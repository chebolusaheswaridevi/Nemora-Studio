'use client';

import { useEffect, useState } from 'react';
import { useReveal } from '@/lib/useReveal';
import TestimonialModal from '@/components/TestimonialModal';
import './customers.scoped.css';

const CATEGORIES = ['all', 'clinic', 'coach', 'ecom', 'service'];

export default function Page() {
  useReveal();
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.t-card[data-cat]').forEach((el) => {
      const show = filter === 'all' || el.dataset.cat === filter;
      el.style.display = show ? '' : 'none';
    });
  }, [filter]);

  return (
    <div className="page-customers">
      {/* ════════════════ NAVIGATION ════════════════ */}
      
      
      {/* ════════════════ HERO ════════════════ */}
      <section id="customers-hero" aria-label="Customers hero">
      
        {/* Business name marquee wall */}
        <div className="hero-marquee-bg" aria-hidden="true">
          {/* Row 1 → left */}
          <div className="hm-row"><div className="hm-track">
            <div className="hm-pill"><span className="hm-dot"></span>Orthocare Clinic</div>
            <div className="hm-pill"><span className="hm-dot"></span>Velvet Roots Botanicals</div>
            <div className="hm-pill"><span className="hm-dot"></span>Studio Hues</div>
            <div className="hm-pill"><span className="hm-dot"></span>Bloom Wellness Clinic</div>
            <div className="hm-pill"><span className="hm-dot"></span>Dental Sparkle</div>
            <div className="hm-pill"><span className="hm-dot"></span>KidsCare Pediatrics</div>
            <div className="hm-pill"><span className="hm-dot"></span>Interior Nest</div>
            <div className="hm-pill"><span className="hm-dot"></span>VK Electronics</div>
            <div className="hm-pill"><span className="hm-dot"></span>SpeedFit Gym</div>
            <div className="hm-pill"><span className="hm-dot"></span>Radiance Skin Clinic</div>
            <div className="hm-pill"><span className="hm-dot"></span>MindSpace Studio</div>
            <div className="hm-pill"><span className="hm-dot"></span>OneShot Fitness</div>
            {/* duplicate for loop */}
            <div className="hm-pill"><span className="hm-dot"></span>Orthocare Clinic</div>
            <div className="hm-pill"><span className="hm-dot"></span>Velvet Roots Botanicals</div>
            <div className="hm-pill"><span className="hm-dot"></span>Studio Hues</div>
            <div className="hm-pill"><span className="hm-dot"></span>Bloom Wellness Clinic</div>
            <div className="hm-pill"><span className="hm-dot"></span>Dental Sparkle</div>
            <div className="hm-pill"><span className="hm-dot"></span>KidsCare Pediatrics</div>
            <div className="hm-pill"><span className="hm-dot"></span>Interior Nest</div>
            <div className="hm-pill"><span className="hm-dot"></span>VK Electronics</div>
            <div className="hm-pill"><span className="hm-dot"></span>SpeedFit Gym</div>
            <div className="hm-pill"><span className="hm-dot"></span>Radiance Skin Clinic</div>
            <div className="hm-pill"><span className="hm-dot"></span>MindSpace Studio</div>
            <div className="hm-pill"><span className="hm-dot"></span>OneShot Fitness</div>
          </div></div>
          {/* Row 2 ← right */}
          <div className="hm-row"><div className="hm-track">
            <div className="hm-pill"><span className="hm-dot"></span>Anandhi Coaching</div>
            <div className="hm-pill"><span className="hm-dot"></span>Priya Business Coach</div>
            <div className="hm-pill"><span className="hm-dot"></span>Karthik Auto Detailing</div>
            <div className="hm-pill"><span className="hm-dot"></span>Namma Organic Store</div>
            <div className="hm-pill"><span className="hm-dot"></span>ArchiForm Studios</div>
            <div className="hm-pill"><span className="hm-dot"></span>Chennai Pet Care</div>
            <div className="hm-pill"><span className="hm-dot"></span>PureGlow Salon</div>
            <div className="hm-pill"><span className="hm-dot"></span>TechShift Academy</div>
            <div className="hm-pill"><span className="hm-dot"></span>Luxe Sarees Chennai</div>
            <div className="hm-pill"><span className="hm-dot"></span>T.Nagar Skincare</div>
            <div className="hm-pill"><span className="hm-dot"></span>Chennai Physio</div>
            <div className="hm-pill"><span className="hm-dot"></span>Preethi Yoga</div>
            <div className="hm-pill"><span className="hm-dot"></span>Anandhi Coaching</div>
            <div className="hm-pill"><span className="hm-dot"></span>Priya Business Coach</div>
            <div className="hm-pill"><span className="hm-dot"></span>Karthik Auto Detailing</div>
            <div className="hm-pill"><span className="hm-dot"></span>Namma Organic Store</div>
            <div className="hm-pill"><span className="hm-dot"></span>ArchiForm Studios</div>
            <div className="hm-pill"><span className="hm-dot"></span>Chennai Pet Care</div>
            <div className="hm-pill"><span className="hm-dot"></span>PureGlow Salon</div>
            <div className="hm-pill"><span className="hm-dot"></span>TechShift Academy</div>
            <div className="hm-pill"><span className="hm-dot"></span>Luxe Sarees Chennai</div>
            <div className="hm-pill"><span className="hm-dot"></span>T.Nagar Skincare</div>
            <div className="hm-pill"><span className="hm-dot"></span>Chennai Physio</div>
            <div className="hm-pill"><span className="hm-dot"></span>Preethi Yoga</div>
          </div></div>
          {/* Row 3 → left */}
          <div className="hm-row"><div className="hm-track">
            <div className="hm-pill"><span className="hm-dot"></span>MindSpace Therapy</div>
            <div className="hm-pill"><span className="hm-dot"></span>Saffron Kitchen</div>
            <div className="hm-pill"><span className="hm-dot"></span>PrintWorks Studio</div>
            <div className="hm-pill"><span className="hm-dot"></span>RedBrick Realtors</div>
            <div className="hm-pill"><span className="hm-dot"></span>Bloom &amp; Stitch</div>
            <div className="hm-pill"><span className="hm-dot"></span>SpiceRoute Foods</div>
            <div className="hm-pill"><span className="hm-dot"></span>NagaSakthi Designs</div>
            <div className="hm-pill"><span className="hm-dot"></span>GreenLeaf Organics</div>
            <div className="hm-pill"><span className="hm-dot"></span>Aura Aesthetics</div>
            <div className="hm-pill"><span className="hm-dot"></span>SweatBox Studios</div>
            <div className="hm-pill"><span className="hm-dot"></span>Metro Physio</div>
            <div className="hm-pill"><span className="hm-dot"></span>CraftBrew Studio</div>
            <div className="hm-pill"><span className="hm-dot"></span>MindSpace Therapy</div>
            <div className="hm-pill"><span className="hm-dot"></span>Saffron Kitchen</div>
            <div className="hm-pill"><span className="hm-dot"></span>PrintWorks Studio</div>
            <div className="hm-pill"><span className="hm-dot"></span>RedBrick Realtors</div>
            <div className="hm-pill"><span className="hm-dot"></span>Bloom &amp; Stitch</div>
            <div className="hm-pill"><span className="hm-dot"></span>SpiceRoute Foods</div>
            <div className="hm-pill"><span className="hm-dot"></span>NagaSakthi Designs</div>
            <div className="hm-pill"><span className="hm-dot"></span>GreenLeaf Organics</div>
            <div className="hm-pill"><span className="hm-dot"></span>Aura Aesthetics</div>
            <div className="hm-pill"><span className="hm-dot"></span>SweatBox Studios</div>
            <div className="hm-pill"><span className="hm-dot"></span>Metro Physio</div>
            <div className="hm-pill"><span className="hm-dot"></span>CraftBrew Studio</div>
          </div></div>
          {/* Row 4 ← right */}
          <div className="hm-row"><div className="hm-track">
            <div className="hm-pill"><span className="hm-dot"></span>Devi Nutrition Co.</div>
            <div className="hm-pill"><span className="hm-dot"></span>Nungambakkam Dental</div>
            <div className="hm-pill"><span className="hm-dot"></span>WellnessFirst Health</div>
            <div className="hm-pill"><span className="hm-dot"></span>FitLife Chennai</div>
            <div className="hm-pill"><span className="hm-dot"></span>StyleCraft Tailors</div>
            <div className="hm-pill"><span className="hm-dot"></span>Glow Derma</div>
            <div className="hm-pill"><span className="hm-dot"></span>NovaTech Training</div>
            <div className="hm-pill"><span className="hm-dot"></span>Nest Interior Co.</div>
            <div className="hm-pill"><span className="hm-dot"></span>Spark Fitness</div>
            <div className="hm-pill"><span className="hm-dot"></span>AuraDesign Studio</div>
            <div className="hm-pill"><span className="hm-dot"></span>SoulSpace Therapy</div>
            <div className="hm-pill"><span className="hm-dot"></span>ProFit Gym Anna Nagar</div>
            <div className="hm-pill"><span className="hm-dot"></span>Devi Nutrition Co.</div>
            <div className="hm-pill"><span className="hm-dot"></span>Nungambakkam Dental</div>
            <div className="hm-pill"><span className="hm-dot"></span>WellnessFirst Health</div>
            <div className="hm-pill"><span className="hm-dot"></span>FitLife Chennai</div>
            <div className="hm-pill"><span className="hm-dot"></span>StyleCraft Tailors</div>
            <div className="hm-pill"><span className="hm-dot"></span>Glow Derma</div>
            <div className="hm-pill"><span className="hm-dot"></span>NovaTech Training</div>
            <div className="hm-pill"><span className="hm-dot"></span>Nest Interior Co.</div>
            <div className="hm-pill"><span className="hm-dot"></span>Spark Fitness</div>
            <div className="hm-pill"><span className="hm-dot"></span>AuraDesign Studio</div>
            <div className="hm-pill"><span className="hm-dot"></span>SoulSpace Therapy</div>
            <div className="hm-pill"><span className="hm-dot"></span>ProFit Gym Anna Nagar</div>
          </div></div>
          {/* Row 5 → left */}
          <div className="hm-row"><div className="hm-track">
            <div className="hm-pill"><span className="hm-dot"></span>Mani Ortho Clinic</div>
            <div className="hm-pill"><span className="hm-dot"></span>BrandWorks Agency</div>
            <div className="hm-pill"><span className="hm-dot"></span>Chennai Home Decor</div>
            <div className="hm-pill"><span className="hm-dot"></span>UrbanFit Studio</div>
            <div className="hm-pill"><span className="hm-dot"></span>Riya Image Studio</div>
            <div className="hm-pill"><span className="hm-dot"></span>The Growth Lab</div>
            <div className="hm-pill"><span className="hm-dot"></span>Karpagam Clinic</div>
            <div className="hm-pill"><span className="hm-dot"></span>SaffronLeaf Cafe</div>
            <div className="hm-pill"><span className="hm-dot"></span>Digital Hive Agency</div>
            <div className="hm-pill"><span className="hm-dot"></span>Sunbird Wellness</div>
            <div className="hm-pill"><span className="hm-dot"></span>LegalEdge Firm</div>
            <div className="hm-pill"><span className="hm-dot"></span>ClearSkin Derma</div>
            <div className="hm-pill"><span className="hm-dot"></span>Mani Ortho Clinic</div>
            <div className="hm-pill"><span className="hm-dot"></span>BrandWorks Agency</div>
            <div className="hm-pill"><span className="hm-dot"></span>Chennai Home Decor</div>
            <div className="hm-pill"><span className="hm-dot"></span>UrbanFit Studio</div>
            <div className="hm-pill"><span className="hm-dot"></span>Riya Image Studio</div>
            <div className="hm-pill"><span className="hm-dot"></span>The Growth Lab</div>
            <div className="hm-pill"><span className="hm-dot"></span>Karpagam Clinic</div>
            <div className="hm-pill"><span className="hm-dot"></span>SaffronLeaf Cafe</div>
            <div className="hm-pill"><span className="hm-dot"></span>Digital Hive Agency</div>
            <div className="hm-pill"><span className="hm-dot"></span>Sunbird Wellness</div>
            <div className="hm-pill"><span className="hm-dot"></span>LegalEdge Firm</div>
            <div className="hm-pill"><span className="hm-dot"></span>ClearSkin Derma</div>
          </div></div>
        </div>
      
        {/* Gradient fade overlays */}
        <div className="hg-top" aria-hidden="true"></div>
        <div className="hg-bottom" aria-hidden="true"></div>
        <div className="hg-left" aria-hidden="true"></div>
        <div className="hg-right" aria-hidden="true"></div>
      
        {/* Content */}
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow reveal">
              <div className="hero-eyebrow-line"></div>
              Customer Stories
            </div>
            <h1 className="customers-h1 reveal reveal-delay-1">
              Real businesses.<br /><em>Real results.</em>
            </h1>
            <p className="customers-sub reveal reveal-delay-2">
              Clinics, coaches, and service businesses across Chennai share what changed after Nemora went live — in their own words.
            </p>
            <div className="hero-actions reveal reveal-delay-3">
              <button className="h-btn-primary" onClick={() => document.getElementById("testimonials-section")?.scrollIntoView({ behavior: "smooth" })}>
                Read stories ↓
              </button>
              <button className="h-btn-ghost" onClick={() => setModalOpen(true)}>Share your result</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════════════════ STATS BAND ════════════════ */}
      <div className="stats-band" aria-label="Key metrics">
        <div className="stats-band-inner" style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          <div className="stat-cell">
            <div className="stat-num" data-target="4.9" data-suffix="★" data-decimals="1">0★</div>
            <div className="stat-lbl">Average rating</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num" data-target="40" data-suffix="+">0+</div>
            <div className="stat-lbl">Businesses live</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num" data-target="3" data-suffix="×">0×</div>
            <div className="stat-lbl">Avg response speed</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num" data-target="90" data-suffix="%">0%</div>
            <div className="stat-lbl">Would recommend</div>
          </div>
        </div>
      </div>
      
      {/* ════════════════ FEATURED CASE STUDY ════════════════ */}
      <section className="featured-section" aria-labelledby="feat-heading">
        <div className="container">
          <div className="sec-eyebrow reveal">
            <div className="sec-eyebrow-line"></div>
            Featured Story
          </div>
          <div className="featured-card reveal reveal-delay-1">
            {/* LEFT: Story */}
            <div>
              <div className="featured-tag-row">
                <span className="feat-label">Case Study</span>
                <span className="feat-sep"></span>
                <span className="industry-pill clinic">🏥 Orthopaedic Clinic</span>
              </div>
              <div className="feat-quote">
                <div className="feat-quote-mark" aria-hidden="true">"</div>
                <div className="feat-quote-text">We used to miss at least 5–6 appointment queries every week just because staff were busy. Nemora's WhatsApp bot handles everything now — patients get instant replies, and our front desk can actually focus on in-person care.</div>
              </div>
              <div className="feat-author">
                <div className="feat-avatar">DR</div>
                <div>
                  <div className="feat-name">Dr. Ramesh Iyer</div>
                  <div className="feat-biz">Orthocare Clinic, Anna Nagar · since Jan 2025</div>
                </div>
              </div>
              <div className="result-pills">
                <div className="rpill">
                  <span className="rpill-lbl">Missed queries</span>
                  <span className="rpill-val g">Zero · 3 months</span>
                </div>
                <div className="rpill">
                  <span className="rpill-lbl">Patient satisfaction</span>
                  <span className="rpill-val a">+34%</span>
                </div>
                <div className="rpill">
                  <span className="rpill-lbl">Setup time</span>
                  <span className="rpill-val w">72 hours</span>
                </div>
                <div className="rpill">
                  <span className="rpill-lbl">Channel</span>
                  <span className="rpill-val">WhatsApp + Web</span>
                </div>
              </div>
            </div>
            {/* RIGHT: Metrics terminal */}
            <div>
              <div className="metrics-terminal" role="img" aria-label="Before and after metrics for Orthocare Clinic">
                <div className="mt-bar">
                  <div className="mt-dots">
                    <div className="mt-dot mt-r"></div>
                    <div className="mt-dot mt-y"></div>
                    <div className="mt-dot mt-g"></div>
                  </div>
                  <div className="mt-title">nemora · orthocare · report</div>
                </div>
                <div className="mt-body">
                  <div className="mt-section-head">BEFORE NEMORA</div>
                  <div className="mt-row">
                    <span className="mt-key">missed queries / week</span>
                    <span className="mt-val red">5–6</span>
                  </div>
                  <div className="mt-row">
                    <span className="mt-key">avg response time</span>
                    <span className="mt-val red">4.2 hours</span>
                  </div>
                  <div className="mt-row">
                    <span className="mt-key">after-hours coverage</span>
                    <span className="mt-val red">none</span>
                  </div>
                  <div className="mt-row">
                    <span className="mt-key">patient satisfaction</span>
                    <span className="mt-val red">baseline</span>
                  </div>
                  <div className="mt-sep"></div>
                  <div className="mt-section-head after">AFTER NEMORA ↑</div>
                  <div className="mt-row">
                    <span className="mt-key">missed queries / week</span>
                    <span className="mt-val green">0</span>
                  </div>
                  <div className="mt-row">
                    <span className="mt-key">avg response time</span>
                    <span className="mt-val green">0.8s</span>
                  </div>
                  <div className="mt-row">
                    <span className="mt-key">after-hours coverage</span>
                    <span className="mt-val green">24/7</span>
                  </div>
                  <div className="mt-row">
                    <span className="mt-key">patient satisfaction</span>
                    <span className="mt-val green">+34%</span>
                  </div>
                  <div className="mt-footer">
                    <div className="mt-live"></div>
                    live since jan 2025 · whatsapp + web chat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════════════════ TESTIMONIALS SECTION ════════════════ */}
      <section id="testimonials-section" aria-labelledby="t-heading">
        <div className="container">
      
          <div className="section-head">
            <div className="sec-eyebrow reveal">
              <div className="sec-eyebrow-line"></div>
              Customer Stories
            </div>
            <h2 id="t-heading" className="sec-h2 reveal reveal-delay-1">40+ businesses, one pattern.</h2>
            <p className="sec-sub reveal reveal-delay-2">Filter by industry to find the story most relevant to your business.</p>
          </div>
      
          {/* Filter tabs */}
          <div className="filter-bar" role="tablist" aria-label="Filter by industry">
            <button className={`filter-tab ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")} role="tab" aria-selected={filter === "all"}>All stories</button>
            <button className={`filter-tab ${filter === "clinic" ? "active" : ""}`} onClick={() => setFilter("clinic")} role="tab" aria-selected={filter === "clinic"}>🏥 Clinics</button>
            <button className={`filter-tab ${filter === "coach" ? "active" : ""}`} onClick={() => setFilter("coach")} role="tab" aria-selected={filter === "coach"}>🎯 Coaches</button>
            <button className={`filter-tab ${filter === "ecom" ? "active" : ""}`} onClick={() => setFilter("ecom")} role="tab" aria-selected={filter === "ecom"}>🛒 E-commerce</button>
            <button className={`filter-tab ${filter === "service" ? "active" : ""}`} onClick={() => setFilter("service")} role="tab" aria-selected={filter === "service"}>🛠 Service Biz</button>
          </div>
      
          {/* Grid */}
          <div className="t-grid" id="t-grid">
      
            {/* 1 */}
            <div className="t-card reveal" data-cat="clinic">
              <div className="t-head">
                <span className="t-tag clinic">🏥 Clinic</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"We used to miss 5–6 appointment queries every week because staff were busy. Nemora's WhatsApp bot handles everything — patients get instant replies, and our front desk focuses on in-person care."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#6E56FF,#a78bfa)' }}>DR</div>
                <div>
                  <div className="t-name">Dr. Ramesh Iyer</div>
                  <div className="t-biz">Orthocare Clinic, Anna Nagar</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>Zero missed queries in 3 months</div>
            </div>
      
            {/* 2 */}
            <div className="t-card reveal reveal-delay-1" data-cat="coach">
              <div className="t-head">
                <span className="t-tag coach">🎯 Coach</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"My Custom GPT answers all the pre-sale questions about my programmes. I wake up to sign-ups that happened at 2 AM. It's like having a salesperson who never sleeps."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#FF5C35,#f59e0b)' }}>SP</div>
                <div>
                  <div className="t-name">Subha Priya</div>
                  <div className="t-biz">Business Coach, Chennai</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>2× programme sign-ups in 6 weeks</div>
            </div>
      
            {/* 3 */}
            <div className="t-card reveal reveal-delay-2" data-cat="ecom">
              <div className="t-head">
                <span className="t-tag ecom">🛒 E-commerce</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"Customer support was eating 3–4 hours of my day. Now the chatbot handles returns, tracking, and FAQs on its own. I check in once a day to approve anything unusual."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#10B981,#34d399)' }}>MK</div>
                <div>
                  <div className="t-name">Meena Krishnan</div>
                  <div className="t-biz">Velvet Roots Botanicals</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>4 hrs/day back. Zero extra hires.</div>
            </div>
      
            {/* 4 */}
            <div className="t-card reveal" data-cat="clinic">
              <div className="t-head">
                <span className="t-tag clinic">🏥 Clinic</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"Patients were calling at odd hours about prep instructions. The FAQ bot covers everything now — diet restrictions, what to bring, cancellation policy. Patient satisfaction went up immediately."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#60a5fa,#3b82f6)' }}>NK</div>
                <div>
                  <div className="t-name">Dr. Nithya Kumar</div>
                  <div className="t-biz">Bloom Wellness Clinic, T. Nagar</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>Patient satisfaction up 34%</div>
            </div>
      
            {/* 5 */}
            <div className="t-card reveal reveal-delay-1" data-cat="coach">
              <div className="t-head">
                <span className="t-tag coach">🎯 Coach</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"The knowledge base Nemora built is extraordinary. Clients ask about my methodology, case studies, payment options — it knows everything I know. I recommend Nemora to every solo coach I meet."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#f472b6,#ec4899)' }}>AV</div>
                <div>
                  <div className="t-name">Anandhi V.</div>
                  <div className="t-biz">Life &amp; Career Coach, Chennai</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>40% fewer repetitive DMs</div>
            </div>
      
            {/* 6 */}
            <div className="t-card reveal reveal-delay-2" data-cat="service">
              <div className="t-head">
                <span className="t-tag service">🛠 Service Biz</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"I was skeptical AI could understand our brand voice — but the Custom GPT is indistinguishable from us. Clients don't even realise they're not talking to a person half the time."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#a78bfa,#7c3aed)' }}>RS</div>
                <div>
                  <div className="t-name">Riya Sharma</div>
                  <div className="t-biz">Studio Hues, Nungambakkam</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>On-brand replies, 24/7</div>
            </div>
      
            {/* 7 */}
            <div className="t-card reveal" data-cat="clinic">
              <div className="t-head">
                <span className="t-tag clinic">🏥 Clinic</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"No-shows were a real problem — patients forgetting their appointments cost us 4–5 slots a week. Nemora sends automated WhatsApp reminders and the drop-off nearly disappeared overnight."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#818cf8,#4f46e5)' }}>SM</div>
                <div>
                  <div className="t-name">Dr. Suresh Mani</div>
                  <div className="t-biz">Dental Sparkle Clinic, Adyar</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>No-shows cut by 45%</div>
            </div>
      
            {/* 8 */}
            <div className="t-card reveal reveal-delay-1" data-cat="coach">
              <div className="t-head">
                <span className="t-tag coach">🎯 Coach</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"I launched my online yoga batches and was nervous about managing enquiries alone. Nemora pre-qualifies leads and answers all the typical questions. All 3 batches sold out in 10 days."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#fb923c,#f59e0b)' }}>PL</div>
                <div>
                  <div className="t-name">Preethi Lakshmanan</div>
                  <div className="t-biz">Wellness by Preethi, Yoga Coach</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>3 batches sold out · 10 days</div>
            </div>
      
            {/* 9 */}
            <div className="t-card reveal reveal-delay-2" data-cat="ecom">
              <div className="t-head">
                <span className="t-tag ecom">🛒 E-commerce</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"Our returns and exchange process was a mess — WhatsApp DMs piling up daily. Nemora trained on our policy, handles every return request end-to-end, and escalates only the edge cases."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#34d399,#059669)' }}>VK</div>
                <div>
                  <div className="t-name">Vijay Kumar</div>
                  <div className="t-biz">VK Electronics Store, Chennai</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>Returns fully automated · 0 backlog</div>
            </div>
      
            {/* 10 */}
            <div className="t-card reveal" data-cat="service">
              <div className="t-head">
                <span className="t-tag service">🛠 Service Biz</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"Interior design leads used to go cold while I was on site. Now Nemora qualifies every enquiry — budget, timeline, project type — before I even see it. My follow-up rate has never been higher."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#93c5fd,#3b82f6)' }}>NS</div>
                <div>
                  <div className="t-name">Naga Sakthi</div>
                  <div className="t-biz">Interior Nest Design Studio</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>Lead qualification on autopilot</div>
            </div>
      
            {/* 11 */}
            <div className="t-card reveal reveal-delay-1" data-cat="clinic">
              <div className="t-head">
                <span className="t-tag clinic">🏥 Clinic</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"We have 200+ parents in our WhatsApp group asking questions every day. Nemora handles all the routine ones — vaccination schedules, fever guidelines, appointment slots — without a single staff member."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#c084fc,#9333ea)' }}>AR</div>
                <div>
                  <div className="t-name">Dr. Anitha R.</div>
                  <div className="t-biz">KidsCare Pediatrics, Velachery</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>200+ parents served · zero staff overhead</div>
            </div>
      
            {/* 12 */}
            <div className="t-card reveal reveal-delay-2" data-cat="service">
              <div className="t-head">
                <span className="t-tag service">🛠 Service Biz</span>
                <span className="t-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="t-quote">"I do mobile car detailing, and bookings used to come through calls I'd miss on the road. Nemora takes every booking via WhatsApp, confirms the slot, and sends reminders. I've never been this booked up."</p>
              <div className="t-author">
                <div className="t-ava" style={{ background: 'linear-gradient(135deg,#38bdf8,#0284c7)' }}>KR</div>
                <div>
                  <div className="t-name">Karthik Raja</div>
                  <div className="t-biz">Karthik's Auto Detailing, Chennai</div>
                </div>
              </div>
              <div className="t-result"><div className="t-rdot"></div>Bookings up 60% in one month</div>
            </div>
      
          </div>{/* /t-grid */}
        </div>
      </section>
      
      {/* ════════════════ STORY SUBMIT BAR ════════════════ */}
      <div className="story-bar">
        <div className="container">
          <div className="story-bar-inner">
            <div className="story-bar-text">
              <strong>Used Nemora? Tell us what changed.</strong>
              <p>Your story helps other business owners see what's possible — and we'd love to feature it here.</p>
            </div>
            <div className="story-actions">
              <button className="sb-ghost" onClick={() => setModalOpen(true)}>See all stories</button>
              <button className="sb-primary" onClick={() => setModalOpen(true)}>Share your result →</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* ════════════════ CTA SECTION ════════════════ */}
      <section id="sec-cta" aria-labelledby="cta-heading">
        <div className="cta-grid-bg" aria-hidden="true"></div>
        <div className="cta-glow" aria-hidden="true"></div>
        <div className="container">
          <div className="cta-inner">
            <div className="cta-badge reveal">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true"><circle cx="4" cy="4" r="4" fill="#6E56FF" /></svg>
              No setup fees · Live in 72 hours
            </div>
            <h2 id="cta-heading" className="cta-h2 reveal reveal-delay-1">Your business doesn't<br />sleep. Neither does<br />Nemora.</h2>
            <p className="cta-sub reveal reveal-delay-2">Join 40+ businesses running on intelligence. Book a call and see your custom AI agent live in under 30 minutes.</p>
            <div className="cta-buttons reveal reveal-delay-3">
              <button className="cta-btn-p">
                <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 1.5L16.5 5.25V12.75L9 16.5L1.5 12.75V5.25L9 1.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="9" cy="9" r="3" fill="white" fillOpacity="0.9" /></svg>
                Book a free demo
              </button>
              <button className="cta-btn-s">See live demos →</button>
            </div>
            <div className="cta-note reveal reveal-delay-4">No commitment required · Cancel anytime · Setup included</div>
          </div>
        </div>
      </section>
      
      {/* ════════════════ FOOTER ════════════════ */}
      
      
      <TestimonialModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
