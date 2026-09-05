import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// In-memory sliding window used when Upstash env vars aren't set (local dev).
// Not shared across serverless instances — fine for a single dev server,
// NOT sufficient for a multi-instance production deployment.
class InMemoryRatelimit {
  private hits = new Map<string, number[]>();
  constructor(
    private limit: number,
    private windowMs: number,
  ) {}

  async limitCheck(key: string) {
    const now = Date.now();
    const arr = (this.hits.get(key) ?? []).filter((t) => now - t < this.windowMs);
    arr.push(now);
    this.hits.set(key, arr);
    const success = arr.length <= this.limit;
    return { success, remaining: Math.max(0, this.limit - arr.length), limit: this.limit };
  }
}

const hasUpstash = !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);

const upstashLimiter = hasUpstash
  ? new Ratelimit({
      redis: new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL!,
        token: process.env.UPSTASH_REDIS_REST_TOKEN!,
      }),
      limiter: Ratelimit.slidingWindow(10, '60 s'),
      prefix: 'nemora-ratelimit',
    })
  : null;

const fallbackLimiter = new InMemoryRatelimit(10, 60_000);

/** Rate-limits a public POST endpoint by client IP. Returns success:false when over the limit. */
export async function checkRateLimit(identifier: string) {
  if (upstashLimiter) {
    const { success, remaining, limit } = await upstashLimiter.limit(identifier);
    return { success, remaining, limit };
  }
  return fallbackLimiter.limitCheck(identifier);
}

export function getClientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? '127.0.0.1';
}
