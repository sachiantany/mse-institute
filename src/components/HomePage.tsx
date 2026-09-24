"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/providers";
import ScrollReveal from "./ScrollReveal";

const olSubjects = [
  { key: "mathematics", accent: "var(--accent-math)" },
  { key: "science", accent: "var(--accent-science)" },
  { key: "english", accent: "var(--accent-lang)" },
  { key: "sinhala", accent: "var(--accent-lang)" },
  { key: "buddhism", accent: "var(--accent-humanities)" },
  { key: "history", accent: "var(--accent-humanities)" },
  { key: "commerce", accent: "var(--accent-commerce)" },
  { key: "ict", accent: "var(--accent-tech)" },
  { key: "geography", accent: "var(--accent-science)" },
];

const alStreams = [
  {
    key: "scienceStream",
    subjects: ["combinedMaths", "physics", "chemistry", "biology"],
    accent: "var(--accent-math)",
  },
  {
    key: "commerceStream",
    subjects: ["accounting", "economics", "businessStudies"],
    accent: "var(--accent-commerce)",
  },
  {
    key: "technologyStream",
    subjects: ["ict", "engineeringTech", "scienceForTech"],
    accent: "var(--accent-tech)",
  },
  {
    key: "artsStream",
    subjects: [
      "politicalScience",
      "sinhala",
      "buddhistCiv",
      "media",
      "geography",
      "history",
      "korean",
      "english",
      "logic",
    ],
    accent: "var(--accent-humanities)",
  },
];

const teachers = [
  { name: "Nilantha Nandasiri", nameSi: "නිලන්ත නාන්දසිරි", subject: "sinhala", level: "A/L" },
  { name: "Damith Suranga", nameSi: "දමිත් සුරංග", subject: "media", level: "A/L" },
  { name: "Amila Disanayaka", nameSi: "අමිල දිසානායක", subject: "politicalScience", level: "A/L" },
  { name: "Dilip L Madhushan", nameSi: "දිලිප් L මධුශාන්", subject: "history", level: "O/L & A/L" },
  { name: "Ishara Rewantha", nameSi: "ඉශර රැවන්ත", subject: "buddhistCiv", level: "A/L" },
  { name: "Puboda Warnakulasuriya", nameSi: "පුබෝදා වර්ණකුලසූරිය", subject: "korean", level: "A/L" },
  { name: "Kosala Karunanayaka", nameSi: "කෝසල කරුණානායක", subject: "geography", level: "A/L" },
  { name: "Randika Lakshan", nameSi: "රන්දික ලක්ෂාන්", subject: "english", level: "A/L" },
];

const featureIcons = [
  <svg key="f1" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>,
  <svg key="f2" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 0 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 0 1-2.27.978m0 0a6.004 6.004 0 0 1-2.27-.978" /></svg>,
  <svg key="f3" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>,
  <svg key="f4" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>,
];

export default function HomePage() {
  const { t, lang } = useLanguage();

  const featureKeys = [
    { title: "feature1Title", desc: "feature1Desc" },
    { title: "feature2Title", desc: "feature2Desc" },
    { title: "feature3Title", desc: "feature3Desc" },
    { title: "feature4Title", desc: "feature4Desc" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-24 md:pt-44 md:pb-36">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.jpg"
              alt="MSE Logo"
              width={110}
              height={110}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]">
            {t.heroTitle1}
            <br />
            <span className="text-gradient">{t.heroTitle2}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[var(--brand)] text-white text-base font-medium px-8 py-3 rounded-full hover:bg-[var(--brand-dark)] transition-colors min-w-[180px]"
            >
              {t.heroEnroll}
            </a>
            <a
              href="#subjects"
              className="inline-flex items-center justify-center text-[var(--brand)] text-base font-medium px-8 py-3 rounded-full border border-[var(--brand)]/30 hover:bg-[var(--brand-light)] transition-colors min-w-[180px]"
            >
              {t.heroSubjects}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <p className="text-xs font-semibold text-[var(--brand)] tracking-widest uppercase mb-4">
                  {t.aboutLabel}
                </p>
                <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-tight">
                  {t.aboutTitle}
                </h2>
                <p className="mt-6 text-[var(--muted)] text-[17px] leading-relaxed">
                  {t.aboutP1}
                </p>
                <p className="mt-4 text-[var(--muted)] text-[17px] leading-relaxed">
                  {t.aboutP2}
                </p>
              </div>
              <div>
                <Image
                  src="/images/building.jpg"
                  alt="MSE Higher Educational Center"
                  width={640}
                  height={480}
                  className="rounded-2xl shadow-xl object-cover w-full"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="py-24 md:py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-[var(--brand)] tracking-widest uppercase mb-4">
                {t.subjectsLabel}
              </p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight">
                {t.subjectsTitle}
              </h2>
              <p className="mt-4 text-[var(--muted)] text-lg max-w-xl mx-auto">
                {t.subjectsSubtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* O/L */}
          <ScrollReveal>
            <div className="mb-14">
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                {t.olTitle}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {olSubjects.map((s) => (
                  <div
                    key={s.key}
                    className="subject-card bg-[var(--card)] rounded-xl px-4 py-3.5"
                    style={{ "--accent-color": s.accent } as React.CSSProperties}
                  >
                    <span className="text-sm font-medium">{t[s.key]}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* A/L */}
          <ScrollReveal>
            <div>
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                {t.alTitle}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {alStreams.map((s) => (
                  <div
                    key={s.key}
                    className="subject-card bg-[var(--card)] rounded-xl p-5"
                    style={{ "--accent-color": s.accent } as React.CSSProperties}
                  >
                    <h4 className="font-semibold text-[15px] mb-3">{t[s.key]}</h4>
                    <ul className="space-y-1.5">
                      {s.subjects.map((sub) => (
                        <li
                          key={sub}
                          className="text-sm text-[var(--muted)] flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: s.accent }} />
                          {t[sub]}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Teachers */}
      <section id="teachers" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[var(--brand)] tracking-widest uppercase mb-4">
                {t.teachersLabel}
              </p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight">
                {t.teachersTitle}
              </h2>
              <p className="mt-4 text-[var(--muted)] text-lg max-w-xl mx-auto">
                {t.teachersSubtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/teachers-banner.png"
                alt="MSE Teachers"
                width={1600}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teachers.map((teacher) => (
                <div
                  key={teacher.name}
                  className="bg-[var(--surface)] rounded-xl p-4 text-center"
                >
                  <p className="font-semibold text-sm">{lang === "si" ? teacher.nameSi : teacher.name}</p>
                  <p className="text-xs text-[var(--brand)] mt-1">{t[teacher.subject]}</p>
                  <p className="text-[11px] text-[var(--muted)] mt-0.5">{teacher.level}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why MSE */}
      <section className="py-24 md:py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[var(--brand)] tracking-widest uppercase mb-4">
                {t.whyLabel}
              </p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight">
                {t.whyTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featureKeys.map((f, i) => (
              <ScrollReveal key={f.title} delay={i + 1}>
                <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-7 h-full hover:shadow-lg transition-shadow">
                  <div className="text-[var(--brand)] mb-4">{featureIcons[i]}</div>
                  <h3 className="text-[15px] font-semibold mb-2">{t[f.title]}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {t[f.desc]}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[var(--brand)] tracking-widest uppercase mb-4">
                {t.galleryLabel}
              </p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight">
                {t.galleryTitle}
              </h2>
              <p className="mt-4 text-[var(--muted)] text-lg max-w-xl mx-auto">
                {t.gallerySubtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl aspect-[21/9] mb-5">
              <Image
                src="/images/main-hall.jpg"
                alt="MSE Main Hall"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-sm font-medium">{t.galleryMainHall}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src="/images/building.jpg"
                  alt="MSE Building"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white text-sm font-medium">{t.galleryBuilding}</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src="/images/classroom.jpg"
                  alt="MSE Classroom"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white text-sm font-medium">{t.galleryClassroom}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contact" className="py-24 md:py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[var(--brand)] tracking-widest uppercase mb-4">
                {t.contactLabel}
              </p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight">
                {t.contactTitle}
              </h2>
              <p className="mt-4 text-[var(--muted)] text-lg max-w-xl mx-auto">
                {t.contactSubtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={1}>
              <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-7 h-full">
                <h3 className="text-lg font-semibold mb-6">{t.locationTitle}</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-[var(--brand)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm">{t.addressLabel}</p>
                      <p className="text-sm text-[var(--muted)] mt-0.5">
                        {t.addressLine1}<br />{t.addressLine2}<br />{t.addressLine3}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-[var(--brand)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm">{t.phoneLabel}</p>
                      <p className="text-sm text-[var(--muted)] mt-0.5">
                        <a href="tel:+94773781918" className="hover:text-[var(--brand)] transition-colors">0773 781 918</a>
                        <br />
                        <a href="tel:+94772279340" className="hover:text-[var(--brand)] transition-colors">0772 279 340</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-[var(--brand)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm">{t.scheduleLabel}</p>
                      <p className="text-sm text-[var(--muted)] mt-0.5">
                        {t.scheduleLine1}<br />{t.scheduleLine2}
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.facebook.com/MSEHEC/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <svg className="w-5 h-5 text-[var(--brand)] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm group-hover:text-[var(--brand)] transition-colors">
                        {t.facebookLabel}
                      </p>
                      <p className="text-sm text-[var(--muted)] mt-0.5">@MSEHEC</p>
                    </div>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/QNxzH6WQ5emr9bV3A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)] hover:text-[var(--brand-dark)] transition-colors mt-1"
                  >
                    {t.openMaps}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="rounded-2xl overflow-hidden h-full min-h-[380px] border border-[var(--card-border)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5!2d79.8283!3d8.0331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afd170026f44f87%3A0x3ed6ca47ffd471f5!2sMSE%20Higher%20Educational%20Center!5e0!3m2!1sen!2slk!4v1695000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 380 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MSE Higher Educational Center Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--brand)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t.ctaTitle}
            </h2>
            <p className="mt-4 text-white/75 text-lg">{t.ctaSubtitle}</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/MSEHEC/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[var(--brand)] text-base font-medium px-8 py-3 rounded-full hover:bg-white/90 transition-colors min-w-[180px]"
              >
                {t.ctaContact}
              </a>
              <a
                href="https://maps.app.goo.gl/QNxzH6WQ5emr9bV3A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/30 text-white text-base font-medium px-8 py-3 rounded-full hover:bg-white/10 transition-colors min-w-[180px]"
              >
                {t.ctaVisit}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-[var(--card-border)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.jpg" alt="MSE" width={26} height={26} className="rounded-md" />
              <div>
                <p className="text-sm font-semibold">{t.footerName}</p>
                <p className="text-[11px] text-[var(--muted)]">{t.footerNameLocal}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-xs text-[var(--muted)]">
              <a href="#about" className="hover:text-[var(--foreground)] transition-colors">{t.navAbout}</a>
              <a href="#subjects" className="hover:text-[var(--foreground)] transition-colors">{t.navSubjects}</a>
              <a href="#teachers" className="hover:text-[var(--foreground)] transition-colors">{t.navTeachers}</a>
              <a href="#contact" className="hover:text-[var(--foreground)] transition-colors">{t.navContact}</a>
              <a href="https://www.facebook.com/MSEHEC/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">Facebook</a>
            </div>
          </div>
          <div className="mt-7 pt-5 border-t border-[var(--card-border)] text-center">
            <p className="text-[11px] text-[var(--muted)]">
              &copy; 2024 {t.footerName}. {t.footerRights}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
