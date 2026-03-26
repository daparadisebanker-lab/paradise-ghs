import { useState } from "react";

const GOOGLE_FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
`;

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy: #1a2744;
    --navy-mid: #253459;
    --cream: #f9f6f0;
    --cream-dark: #f0ebe0;
    --gold: #b8935a;
    --gold-light: #d4aa72;
    --text: #1a2744;
    --muted: #7a8099;
    --border: rgba(26,39,68,0.12);
    --radius: 2px;
  }

  body { background: var(--cream); font-family: 'DM Sans', sans-serif; color: var(--text); }

  .wrap { max-width: 900px; margin: 0 auto; padding: 0 24px; }

  /* ── HERO ── */
  .hero { background: var(--navy); color: var(--cream); padding: 72px 0 64px; position: relative; overflow: hidden; }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.025) 79px, rgba(255,255,255,0.025) 80px);
    pointer-events: none;
  }
  .hero-eyebrow { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold-light); margin-bottom: 20px; }
  .hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(38px,6vw,64px); font-weight: 300; line-height: 1.08; margin-bottom: 20px; color: #fff; }
  .hero-title em { font-style: italic; color: var(--gold-light); }
  .hero-sub { font-size: 15px; font-weight: 300; color: rgba(249,246,240,0.65); max-width: 480px; line-height: 1.7; margin-bottom: 40px; }
  .hero-cta { display: inline-block; background: var(--gold); color: #fff; padding: 12px 28px; font-size: 13px; font-weight: 500; letter-spacing: 0.05em; text-decoration: none; cursor: pointer; border: none; transition: background 0.2s; }
  .hero-cta:hover { background: var(--gold-light); }
  .hero-line { width: 48px; height: 1px; background: var(--gold); margin-bottom: 28px; }

  /* ── PROCESS ── */
  .section { padding: 72px 0; }
  .section-label { font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
  .section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(26px,4vw,40px); font-weight: 400; line-height: 1.2; color: var(--navy); margin-bottom: 40px; }

  .timeline { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--border); }
  .tl-item { padding: 32px; border-right: 1px solid var(--border); position: relative; }
  .tl-item:last-child { border-right: none; }
  .tl-week { font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 8px; }
  .tl-heading { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 400; margin-bottom: 12px; color: var(--navy); }
  .tl-body { font-size: 14px; font-weight: 300; line-height: 1.7; color: var(--muted); }

  /* ── PILLARS ── */
  .pillars { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); }
  .pillar { background: var(--cream); padding: 28px 28px 32px; }
  .pillar-num { font-family: 'Cormorant Garamond', serif; font-size: 36px; font-weight: 300; color: var(--cream-dark); line-height: 1; margin-bottom: 12px; }
  .pillar-title { font-size: 13px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: var(--navy); margin-bottom: 8px; }
  .pillar-desc { font-size: 13px; font-weight: 300; line-height: 1.65; color: var(--muted); }

  /* ── DIVIDER ── */
  .divider { border: none; border-top: 1px solid var(--border); margin: 0; }

  /* ── FORM ── */
  .form-section { padding: 64px 0 80px; background: var(--cream); }
  .form-intro { margin-bottom: 40px; }
  .form-intro p { font-size: 14px; font-weight: 300; color: var(--muted); line-height: 1.7; max-width: 560px; }

  .stepper { display: flex; align-items: center; gap: 0; margin-bottom: 48px; }
  .step-item { display: flex; align-items: center; gap: 10px; flex: 1; }
  .step-dot { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 500; flex-shrink: 0; transition: all 0.2s; }
  .step-dot.active { background: var(--navy); color: var(--cream); }
  .step-dot.done { background: var(--gold); color: #fff; }
  .step-dot.inactive { background: transparent; border: 1px solid var(--border); color: var(--muted); }
  .step-label { font-size: 11px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; white-space: nowrap; }
  .step-label.active { color: var(--navy); }
  .step-label.done { color: var(--gold); }
  .step-label.inactive { color: var(--muted); }
  .step-line { flex: 1; height: 1px; background: var(--border); margin: 0 12px; }

  .form-card { background: #fff; border: 1px solid var(--border); padding: 40px 40px 36px; }

  .form-group { margin-bottom: 24px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  label { display: block; font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 7px; }
  input[type="text"], input[type="email"], input[type="tel"], select, textarea {
    width: 100%; padding: 11px 14px; border: 1px solid var(--border);
    background: var(--cream); font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 300;
    color: var(--text); outline: none; transition: border-color 0.2s; border-radius: 0;
    -webkit-appearance: none;
  }
  input:focus, select:focus, textarea:focus { border-color: var(--navy); background: #fff; }
  textarea { resize: vertical; min-height: 100px; line-height: 1.6; }
  select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237a8099' stroke-width='1.5' fill='none'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px; }

  .checkbox-group { display: flex; flex-direction: column; gap: 10px; }
  .checkbox-item { display: flex; align-items: center; gap: 10px; cursor: pointer; }
  .checkbox-item input[type="checkbox"] { width: 16px; height: 16px; cursor: pointer; accent-color: var(--navy); }
  .checkbox-item span { font-size: 14px; font-weight: 300; color: var(--text); }

  .form-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border); }
  .btn-primary { background: var(--navy); color: var(--cream); border: none; padding: 12px 32px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.06em; cursor: pointer; transition: background 0.2s; }
  .btn-primary:hover { background: var(--navy-mid); }
  .btn-secondary { background: transparent; color: var(--muted); border: 1px solid var(--border); padding: 12px 24px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 400; cursor: pointer; transition: all 0.2s; }
  .btn-secondary:hover { border-color: var(--navy); color: var(--navy); }

  .success { text-align: center; padding: 48px 24px; }
  .success-icon { width: 56px; height: 56px; border-radius: 50%; background: var(--cream-dark); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
  .success-title { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 400; color: var(--navy); margin-bottom: 10px; }
  .success-sub { font-size: 14px; font-weight: 300; color: var(--muted); line-height: 1.7; }

  .field-hint { font-size: 12px; color: var(--muted); margin-top: 5px; font-weight: 300; }

  @media (max-width: 620px) {
    .timeline { grid-template-columns: 1fr; }
    .tl-item { border-right: none; border-bottom: 1px solid var(--border); }
    .tl-item:last-child { border-bottom: none; }
    .pillars { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .form-card { padding: 24px 20px; }
    .stepper .step-label { display: none; }
  }
`;

const STEPS = ["Parent / Guardian", "Student Background", "Goals & Expectations"];

const destinations = [
  "United States", "United Kingdom", "Canada", "Australia",
  "Europe (other)", "Latin America", "Asia", "Open to any"
];
const careerFields = [
  "Sciences & Medicine", "Engineering & Technology", "Business & Finance",
  "Arts & Design", "Law & Social Sciences", "Education & Research",
  "Communications & Media", "Not yet defined"
];

export default function App() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    parentName: "", relationship: "", email: "", phone: "", altEmail: "",
    studentName: "", studentDOB: "", currentGrade: "", currentSchool: "",
    gpa: "", language: "", extracurricular: "", priorConsultation: "",
    careerInterests: [], destinations: [], universities: "",
    timeline: "", priorities: "", additionalInfo: ""
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggle = (k, v) => setForm(f => ({
    ...f,
    [k]: f[k].includes(v) ? f[k].filter(x => x !== v) : [...f[k], v]
  }));

  const stepStatus = (i) => i < step ? "done" : i === step ? "active" : "inactive";

  return (
    <div>
      <style>{GOOGLE_FONTS}{css}</style>

      {/* ── HERO ── */}
      <div className="hero">
        <div className="wrap">
          <p className="hero-eyebrow">Paradise International College · Higher Education Advisory</p>
          <div className="hero-line" />
          <h1 className="hero-title">
            A guided path<br />toward <em>your</em> future.
          </h1>
          <p className="hero-sub">
            We help families navigate the transition to higher education with clarity — from defining objectives to identifying the right universities and pathways forward.
          </p>
          {!showForm && (
            <button className="hero-cta" onClick={() => setShowForm(true)}>
              Begin your consultation →
            </button>
          )}
          {showForm && (
            <button className="hero-cta" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }} onClick={() => {
              document.getElementById('form-anchor')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Jump to form ↓
            </button>
          )}
        </div>
      </div>

      {/* ── THE PROCESS ── */}
      <div className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <p className="section-label">The Process</p>
          <h2 className="section-title">Two weeks. One clear direction.</h2>
          <div className="timeline">
            <div className="tl-item">
              <p className="tl-week">Week one</p>
              <h3 className="tl-heading">Initial Family Meeting</h3>
              <p className="tl-body">
                We sit down with the family to understand the student's background, aspirations, and academic profile. Together we map out what matters most — and where the real opportunities lie.
              </p>
            </div>
            <div className="tl-item">
              <p className="tl-week">Week two</p>
              <h3 className="tl-heading">Discovery & Roadmap</h3>
              <p className="tl-body">
                We deliver a structured proposal: career direction analysis, destination shortlist, curated university programs, and a personalised transition roadmap your family can act on immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOUR PILLARS ── */}
      <div className="section">
        <div className="wrap">
          <p className="section-label">Our Focus Areas</p>
          <h2 className="section-title">What we explore together</h2>
          <div className="pillars">
            <div className="pillar">
              <p className="pillar-num">01</p>
              <p className="pillar-title">Career of Interest</p>
              <p className="pillar-desc">Identifying fields that genuinely align with the student's abilities, passions, and long-term potential — not just what sounds impressive.</p>
            </div>
            <div className="pillar">
              <p className="pillar-num">02</p>
              <p className="pillar-title">Destination Match</p>
              <p className="pillar-desc">Understanding which countries, cities, and academic cultures are the right fit — balancing ambition with lifestyle, cost, and opportunity.</p>
            </div>
            <div className="pillar">
              <p className="pillar-num">03</p>
              <p className="pillar-title">Universities of Interest</p>
              <p className="pillar-desc">Curating a shortlist of institutions with strong programs in the student's field, along with realistic admission profiles and ranking context.</p>
            </div>
            <div className="pillar">
              <p className="pillar-num">04</p>
              <p className="pillar-title">Transition Pathways</p>
              <p className="pillar-desc">Mapping the academic, linguistic, and logistical steps required — from testing requirements to foundation programs and application timelines.</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* ── FORM ── */}
      <div className="form-section" id="form-anchor">
        <div className="wrap">
          <p className="section-label">Initial Consultation</p>
          <h2 className="section-title">Tell us about your family</h2>
          <div className="form-intro">
            <p>Complete the form below before our first meeting. This helps us arrive prepared and make the most of our time together.</p>
          </div>

          {!submitted ? (
            <>
              {/* Stepper */}
              <div className="stepper">
                {STEPS.map((s, i) => (
                  <div className="step-item" key={i}>
                    <div className={`step-dot ${stepStatus(i)}`}>
                      {stepStatus(i) === "done" ? "✓" : i + 1}
                    </div>
                    <span className={`step-label ${stepStatus(i)}`}>{s}</span>
                    {i < STEPS.length - 1 && <div className="step-line" />}
                  </div>
                ))}
              </div>

              <div className="form-card">

                {/* ── STEP 0: Parent/Guardian ── */}
                {step === 0 && (
                  <div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full name *</label>
                        <input type="text" value={form.parentName} onChange={e => set("parentName", e.target.value)} placeholder="e.g. María García" />
                      </div>
                      <div className="form-group">
                        <label>Relationship to student</label>
                        <select value={form.relationship} onChange={e => set("relationship", e.target.value)}>
                          <option value="">Select…</option>
                          <option>Mother</option>
                          <option>Father</option>
                          <option>Guardian</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Email address *</label>
                        <input type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="maria@email.com" />
                      </div>
                      <div className="form-group">
                        <label>WhatsApp / Phone</label>
                        <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+51 999 000 000" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Alternative contact (optional)</label>
                      <input type="email" value={form.altEmail} onChange={e => set("altEmail", e.target.value)} placeholder="Second parent or guardian email" />
                    </div>
                  </div>
                )}

                {/* ── STEP 1: Student Background ── */}
                {step === 1 && (
                  <div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Student's full name *</label>
                        <input type="text" value={form.studentName} onChange={e => set("studentName", e.target.value)} placeholder="Full name" />
                      </div>
                      <div className="form-group">
                        <label>Date of birth</label>
                        <input type="text" value={form.studentDOB} onChange={e => set("studentDOB", e.target.value)} placeholder="DD / MM / YYYY" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Current year / grade</label>
                        <select value={form.currentGrade} onChange={e => set("currentGrade", e.target.value)}>
                          <option value="">Select…</option>
                          <option>3rd Secondary (Year 9)</option>
                          <option>4th Secondary (Year 10)</option>
                          <option>5th Secondary (Year 11)</option>
                          <option>Graduated — gap year</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Current school</label>
                        <input type="text" value={form.currentSchool} onChange={e => set("currentSchool", e.target.value)} placeholder="School name, Lima" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Academic average / GPA</label>
                        <input type="text" value={form.gpa} onChange={e => set("gpa", e.target.value)} placeholder="e.g. 16/20 or 3.8/4.0" />
                        <p className="field-hint">Approximate is fine</p>
                      </div>
                      <div className="form-group">
                        <label>English proficiency level</label>
                        <select value={form.language} onChange={e => set("language", e.target.value)}>
                          <option value="">Select…</option>
                          <option>Beginner (A1–A2)</option>
                          <option>Intermediate (B1–B2)</option>
                          <option>Advanced (C1–C2)</option>
                          <option>Native / Bilingual</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Extracurricular activities & interests</label>
                      <textarea value={form.extracurricular} onChange={e => set("extracurricular", e.target.value)} placeholder="Sports, arts, clubs, volunteer work, competitions, internships…" />
                    </div>
                    <div className="form-group">
                      <label>Prior university consulting or research?</label>
                      <select value={form.priorConsultation} onChange={e => set("priorConsultation", e.target.value)}>
                        <option value="">Select…</option>
                        <option>No, this is our first time</option>
                        <option>We've done some independent research</option>
                        <option>We've worked with another advisor before</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* ── STEP 2: Goals ── */}
                {step === 2 && (
                  <div>
                    <div className="form-group">
                      <label>Career fields of interest</label>
                      <p className="field-hint" style={{ marginBottom: 10 }}>Select all that apply</p>
                      <div className="checkbox-group">
                        {careerFields.map(c => (
                          <label className="checkbox-item" key={c}>
                            <input type="checkbox" checked={form.careerInterests.includes(c)} onChange={() => toggle("careerInterests", c)} />
                            <span>{c}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-group" style={{ marginTop: 32 }}>
                      <label>Preferred destinations</label>
                      <p className="field-hint" style={{ marginBottom: 10 }}>Select all that apply</p>
                      <div className="checkbox-group">
                        {destinations.map(d => (
                          <label className="checkbox-item" key={d}>
                            <input type="checkbox" checked={form.destinations.includes(d)} onChange={() => toggle("destinations", d)} />
                            <span>{d}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-group" style={{ marginTop: 32 }}>
                      <label>Universities already on your radar</label>
                      <textarea value={form.universities} onChange={e => set("universities", e.target.value)} placeholder="List any specific universities or programs you've considered, even vaguely…" />
                    </div>

                    <div className="form-group">
                      <label>Target enrollment timeline</label>
                      <select value={form.timeline} onChange={e => set("timeline", e.target.value)}>
                        <option value="">Select…</option>
                        <option>This year (2025)</option>
                        <option>2026</option>
                        <option>2027 or later</option>
                        <option>Not yet decided</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>What matters most to your family?</label>
                      <textarea value={form.priorities} onChange={e => set("priorities", e.target.value)} placeholder="Ranking, cost, program quality, location, scholarships, campus life, safety…" style={{ minHeight: 80 }} />
                    </div>

                    <div className="form-group">
                      <label>Anything else we should know?</label>
                      <textarea value={form.additionalInfo} onChange={e => set("additionalInfo", e.target.value)} placeholder="Concerns, special circumstances, specific questions for the first meeting…" style={{ minHeight: 80 }} />
                    </div>
                  </div>
                )}

                {/* Nav */}
                <div className="form-nav">
                  {step > 0 ? (
                    <button className="btn-secondary" onClick={() => setStep(s => s - 1)}>← Back</button>
                  ) : <div />}
                  {step < STEPS.length - 1 ? (
                    <button className="btn-primary" onClick={() => setStep(s => s + 1)}>Continue →</button>
                  ) : (
                    <button className="btn-primary" onClick={() => setSubmitted(true)}>Submit consultation request →</button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="form-card">
              <div className="success">
                <div className="success-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b8935a" strokeWidth="1.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="success-title">Consultation request received</h3>
                <p className="success-sub">
                  Thank you, {form.parentName ? form.parentName.split(" ")[0] : ""}. We'll be in touch within 24 hours to schedule your first meeting.<br /><br />
                  <span style={{ color: "#b8935a", fontStyle: "italic" }}>Paradise International College · Higher Education Advisory</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#fff", borderTop: "1px solid var(--border)", padding: "28px 0" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--muted)", fontWeight: 300 }}>
            © 2025 Paradise International College · Lima, Perú
          </p>
          <p style={{ fontSize: 12, color: "var(--muted)", fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif" }}>
            Guiding futures, one family at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
