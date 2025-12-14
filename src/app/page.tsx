"use client";

import Image from "next/image";
import { useState } from "react";
import type { SVGProps } from "react";

const services = [
  {
    title: {
      en: "Escrow & settlement control",
      ru: "Эскроу и контроль расчётов",
    },
    description: {
      en: "Secure handling of cross-border deals with independent oversight and verification.",
      ru: "Безопасное проведение трансграничных сделок с независимым контролем и проверками.",
    },
  },
  {
    title: { en: "Audit readiness", ru: "Готовность к аудиту" },
    description: {
      en: "Clean data rooms, reconciled flows, and transparent reporting for stakeholders.",
      ru: "Подготовленные data rooms, сверенные потоки и прозрачная отчётность для стейкхолдеров.",
    },
  },
  {
    title: { en: "Due-diligence support", ru: "Поддержка due-diligence" },
    description: {
      en: "Risk assessment and factual validation for investors, corporates, and private clients.",
      ru: "Оценка рисков и проверка фактов для инвесторов, корпораций и частных клиентов.",
    },
  },
];

const figures = [
  {
    value: ">35",
    label: { en: "Number of employees", ru: "Сотрудников" },
  },
  {
    value: "CHF 3.2M",
    label: { en: "Annual turnover 2024", ru: "Оборот 2024" },
  },
  { value: "2014", label: { en: "Established in", ru: "Основана" } },
];

const partners = [
  { en: "International banks", ru: "Международные банки" },
  { en: "Family offices", ru: "Фэмили офисы" },
  { en: "Private equity funds", ru: "Фонды private equity" },
  { en: "Legal & audit firms", ru: "Юридические и аудиторские фирмы" },
  { en: "HNWI advisors", ru: "Консультанты HNWI" },
  { en: "Asset managers", ru: "Управляющие активами" },
];

const languageMarks: Array<"en" | "ru"> = ["en", "ru"];

const PinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    {...props}
  >
    <path d="M12 2.75a5.25 5.25 0 0 0-5.25 5.25c0 3.5 5.25 9.25 5.25 9.25s5.25-5.75 5.25-9.25A5.25 5.25 0 0 0 12 2.75Z" />
    <circle cx="12" cy="8.25" r="1.9" />
  </svg>
);

type LocaleCopy = (typeof copy)[keyof typeof copy];

const PixelMap = ({ t }: { t: LocaleCopy }) => {
  return (
    <div className="map-wrapper-pixel">
      <div
        className="pixel-map-static"
        style={{ backgroundImage: "url('/map.svg')" }}
      />

      <div className="city city--geneva">
        <div className="city-pin">⛯</div>
        <div className="city-labels">
          <span className="city-main">{t.cityGeneva.toUpperCase()}</span>
          <span className="city-sub">{t.cityGenevaSub}</span>
        </div>
      </div>

      <div className="city city--moscow">
        <div className="city-pin">⛯</div>
        <div className="city-labels">
          <span className="city-main">{t.cityMoscow.toUpperCase()}</span>
          <span className="city-sub">{t.cityMoscowSub}</span>
        </div>
      </div>

      <div className="city city--sochi">
        <div className="city-pin">⛯</div>
        <div className="city-labels">
          <span className="city-main">{t.citySochi.toUpperCase()}</span>
          <span className="city-sub">{t.citySochiSub}</span>
        </div>
      </div>

      <div className="city city--beijing">
        <div className="city-pin">⛯</div>
        <div className="city-labels">
          <span className="city-main">{t.cityBeijing.toUpperCase()}</span>
          <span className="city-sub">{t.cityBeijingSub}</span>
        </div>
      </div>

      <div className="city city--guangzhou">
        <div className="city-pin">⛯</div>
        <div className="city-labels">
          <span className="city-main">{t.cityGuangzhou.toUpperCase()}</span>
          <span className="city-sub">{t.cityGuangzhouSub}</span>
        </div>
      </div>
    </div>
  );
};

const copy = {
  en: {
    heroTitle:
      "Escrow, audit & due-diligence services for decisive transactions.",
    heroDesc:
      "REVVEKA provides independent transaction support, risk assessment and financial verification for companies, investors and private clients across Switzerland, the EU, Russia and global jurisdictions.",
    ctaPrimary: "Confidential inquiry",
    ctaSecondary: "View locations",
    trusted: "Trusted partner",
    focusTitle: "Focus areas",
    focusBadge: "Independent & verified",
    locationsTitle: "Switzerland, EU, Russia & Asia",
    locationsSub: "Escrow · Audit · Due-diligence services",
    keyFigures: "Key figures",
    partnersTitle: "Our partners",
    partnersSub: "Transaction counterparties and advisors we work with",
    inquiryTag: "Confidential inquiry",
    inquiryTitle: "Share the scope of your transaction for a discreet response.",
    inquiryDesc:
      "Send us a short outline of your deal, counterparties, and timing. We respond within one business day with a secure contact path.",
    formContact: "Work email or phone",
    formTopic: "Transaction scope / jurisdiction",
    formDetails:
      "Key points to verify or audit (counterparties, amounts, deadlines)",
    formCta: "Start confidential inquiry",
    cityGeneva: "Geneva",
    cityGenevaSub: "HQ · Switzerland",
    cityMoscow: "Moscow",
    cityMoscowSub: "Advisory desk",
    citySochi: "Sochi",
    citySochiSub: "Private clients",
    cityBeijing: "Beijing",
    cityBeijingSub: "Asia transactions",
    cityGuangzhou: "Guangzhou",
    cityGuangzhouSub: "South China coverage",
    footerLine: "Escrow · Audit · Due diligence",
  },
  ru: {
    heroTitle:
      "Эскроу, аудит и due-diligence для решающих транзакций.",
    heroDesc:
      "REVVEKA обеспечивает независимое сопровождение сделок, оценку рисков и финансовую проверку для компаний, инвесторов и частных клиентов в Швейцарии, ЕС, России и других юрисдикциях.",
    ctaPrimary: "Конфиденциальный запрос",
    ctaSecondary: "Локации",
    trusted: "Надёжный партнёр",
    focusTitle: "Основные направления",
    focusBadge: "Независимо и проверено",
    locationsTitle: "Швейцария, ЕС, Россия и Азия",
    locationsSub: "Эскроу · Аудит · Due-diligence",
    keyFigures: "Ключевые показатели",
    partnersTitle: "Наши партнёры",
    partnersSub: "Контрагенты и консультанты, с которыми мы работаем",
    inquiryTag: "Конфиденциальный запрос",
    inquiryTitle:
      "Опишите параметры вашей сделки для конфиденциального ответа.",
    inquiryDesc:
      "Кратко о сделке, контрагентах и сроках — мы свяжемся в течение рабочего дня по защищённому каналу.",
    formContact: "Рабочий email или телефон",
    formTopic: "Сфера сделки / юрисдикция",
    formDetails:
      "Что проверить или аудировать (контрагенты, суммы, дедлайны)",
    formCta: "Отправить запрос",
    cityGeneva: "Женева",
    cityGenevaSub: "HQ · Switzerland",
    cityMoscow: "Москва",
    cityMoscowSub: "Advisory desk",
    citySochi: "Сочи",
    citySochiSub: "Частные клиенты",
    cityBeijing: "Пекин",
    cityBeijingSub: "Asia transactions",
    cityGuangzhou: "Гуанчжоу",
    cityGuangzhouSub: "South China coverage",
    footerLine: "Эскроу · Аудит · Due diligence",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<"en" | "ru">("en");
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    contact: "",
    topic: "",
    details: "",
  });
  const [sending, setSending] = useState(false);

  const t = copy[lang];

  const handleLang = (next: "en" | "ru") => {
    if (next === lang) return;
    setIsLoading(true);
    setTimeout(() => {
      setLang(next);
      setIsLoading(false);
    }, 800);
  };
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[6px_6px_0_rgba(15,23,42,0.15)] animate-[spin_1.2s_linear_infinite]">
              <Image
                src="/logo.svg"
                alt="REVVEKA logo"
                width={64}
                height={64}
                className="h-12 w-12 object-contain"
                priority
              />
            </div>
            <p className="text-sm font-semibold tracking-[0.1em] text-slate-700">
              Loading…
            </p>
          </div>
        </div>
      )}

      {/* убран фон для лучшей адаптивности */}

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:py-14">
        <header className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-1 items-center">
        <Image
                src="/logo.svg"
                alt="REVVEKA Group"
                width={128}
                height={128}
                className="h-28 w-28 object-contain"
          priority
        />
            </div>

            <div className="flex-none text-center">
              <div className="text-[28px] font-semibold leading-tight tracking-[0.16em] text-slate-900 md:text-[30px]">
                REVVEKA GROUP
              </div>
              <p className="text-base font-medium text-slate-700 md:text-lg">
                Independent transaction support
              </p>
            </div>

            <div className="flex flex-1 scale-[0.94] flex-wrap items-center justify-end gap-3 text-[11px] uppercase md:scale-[0.94]">
            <div className="flex items-center gap-2">
              {languageMarks.map((langOpt) => {
                const active = lang === langOpt;
                return (
                  <button
                    key={langOpt}
                    type="button"
                    onClick={() => handleLang(langOpt)}
                    className={`cursor-pointer rounded-full border px-3 py-1 font-semibold shadow-[2px_2px_0_rgba(15,23,42,0.12)] text-[11px] transition-transform transition-shadow duration-150 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_rgba(15,23,42,0.18)] focus:outline-none ${
                      active
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-800"
                    }`}
                  >
                    {langOpt.toUpperCase()}
                  </button>
                );
              })}
            </div>
              <a
                href="#inquiry"
                className="rounded-full border-2 border-slate-900 bg-white px-4 py-2 text-[11px] font-semibold tracking-[0.08em] shadow-[4px_4px_0_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_rgba(15,23,42,0.2)]"
              >
                {lang === "en" ? "Request consultation" : "Запрос консультации"}
              </a>
            </div>
          </div>
        </header>

        <section
          id="hero"
          className="grid items-start gap-10 md:grid-cols-[1.05fr,0.95fr]"
        >
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-[6px] text-sm font-semibold uppercase tracking-[0.08em] text-slate-600 shadow-[2px_2px_0_rgba(15,23,42,0.08)]">
              {t.trusted}
              <span className="h-[1px] w-8 bg-slate-400" />
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                {t.heroTitle}
              </h1>
              <p className="text-lg leading-relaxed text-slate-700">{t.heroDesc}</p>
        </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#inquiry"
                className="rounded-full border-2 border-slate-800 bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[8px_8px_0_rgba(15,23,42,0.2)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:shadow-[10px_10px_0_rgba(15,23,42,0.22)] hover:text-white focus-visible:text-white"
                style={{ color: "#fff" }}
                aria-label="Start confidential inquiry"
              >
                {t.ctaPrimary}
          </a>
          <a
                href="#locations"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-slate-900 shadow-[3px_3px_0_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(15,23,42,0.16)]"
              >
                {t.ctaSecondary}
          </a>
        </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-[10px_10px_0_rgba(15,23,42,0.12)]">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.12em] text-slate-500">
                {t.focusTitle}
              </p>
              <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600">
                {t.focusBadge}
              </span>
            </div>
            <div className="space-y-3">
                {services.map((service) => (
                <div
                    key={service.title.en}
                  className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-4 py-3 shadow-[4px_4px_0_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <p className="text-base font-semibold text-slate-900">
                      {service.title[lang]}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="locations" className="space-y-5">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-slate-600">
                {lang === "en" ? "Locations" : "Локации"}
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                {t.locationsTitle}
              </h2>
            </div>
            <p className="text-sm text-slate-600">{t.locationsSub}</p>
          </div>

          <div className="rounded-[28px] border-[3px] border-slate-900 bg-white/94 p-0 shadow-[12px_12px_0_rgba(15,23,42,0.2)] sm:p-0">
            <PixelMap t={t} />
          </div>
        </section>

        <section id="figures" className="space-y-5">
          <div className="flex items-center gap-3">
            <p className="text-sm uppercase tracking-[0.12em] text-slate-600">
              {t.keyFigures}
            </p>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {figures.map((figure) => (
              <div
                key={figure.value}
                className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-[8px_8px_0_rgba(15,23,42,0.1)]"
              >
                <div className="text-3xl font-semibold tracking-tight text-slate-900">
                  {figure.value}
                </div>
                <p className="mt-3 text-sm uppercase tracking-[0.08em] text-slate-600">
                  {figure.label[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="partners" className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-slate-600">
                {t.partnersTitle}
              </p>
              <p className="text-slate-600">{t.partnersSub}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[10px_10px_0_rgba(15,23,42,0.1)]">
            <div className="partners-marquee">
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={`${partner.en}-${idx}`}
                  className="min-w-[180px] rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-5 py-3 text-center text-sm font-semibold text-slate-800 shadow-[4px_4px_0_rgba(15,23,42,0.08)]"
                >
                  {partner[lang]}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="inquiry"
          className="rounded-2xl border-2 border-slate-900 bg-gradient-to-r from-indigo-50 via-white to-sky-50 p-6 shadow-[12px_12px_0_rgba(15,23,42,0.14)] md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="text-sm uppercase tracking-[0.12em] text-slate-700">
                {t.inquiryTag}
              </p>
              <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                {t.inquiryTitle}
              </h3>
              <p className="text-slate-700">{t.inquiryDesc}</p>
            </div>
            <form
              className="grid w-full max-w-md gap-3"
              onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                try {
                  await fetch("/api/inquiry", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...form, lang }),
                  });
                } catch (error) {
                  console.error("Failed to send inquiry", error);
                } finally {
                  setSending(false);
                }
              }}
            >
              <input
                type="text"
                name="contact"
                placeholder={t.formContact}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-[3px_3px_0_rgba(15,23,42,0.08)] focus:border-slate-800 focus:outline-none"
                required
                value={form.contact}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, contact: e.target.value }))
                }
              />
              <input
                type="text"
                name="topic"
                placeholder={t.formTopic}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-[3px_3px_0_rgba(15,23,42,0.08)] focus:border-slate-800 focus:outline-none"
                value={form.topic}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, topic: e.target.value }))
                }
              />
              <textarea
                name="details"
                placeholder={t.formDetails}
                rows={3}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-[3px_3px_0_rgba(15,23,42,0.08)] focus:border-slate-800 focus:outline-none"
                value={form.details}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, details: e.target.value }))
                }
              />
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-full border-2 border-slate-900 bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[6px_6px_0_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_rgba(15,23,42,0.2)] disabled:opacity-60"
                disabled={sending}
              >
                {sending ? (lang === "en" ? "Sending..." : "Отправка...") : t.formCta}
              </button>
            </form>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-600">
          <div className="font-semibold text-slate-800">REVVEKA Group GmbH</div>
          <div className="flex items-center gap-2">
            <PinIcon className="h-4 w-4 text-slate-700" />
            <span>Switzerland · Geneva</span>
          </div>
          <div className="text-slate-600">{t.footerLine}</div>
        </footer>
      </div>
    </div>
  );
}
