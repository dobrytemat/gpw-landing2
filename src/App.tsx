import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, LineChart, Shield, Sparkles, Building2, Phone } from "lucide-react";

// Zaktualizowane: każda spółka posiada pole `chart` z nazwą pliku obrazka.
// Pamiętaj, aby umieścić obrazy w katalogu: public/charts/
// Dokładne nazwy plików: PGM.png, CIA Games.png, MO Bruk.png, DINO.png, Tarczynski.png, Sygnity.png, XTB.png, CD Projekt.png

const companies = [
  {
    name: "Grupa Niewiadów – PGM",
    tag: "Obronność",
    returnInfo: "Zwrot YTD: 1230%",
    thesis:
      "Konsolidacja kompetencji, efekt skali, rosnące wydatki na bezpieczeństwo. Spółka powstała na przełomie 2025 roku w wyniku fuzji Grupy Niewiadów S.A. z Polską Grupą Militarną S.A.",
    chart: "./charts/dom.jpg",
  },
  {
    name: "CI Games",
    tag: "Gaming",
    returnInfo: "Zwrot YTD: 127%",
    thesis:
      "Globalny zasięg i pipeline nowych tytułów. Niezależne studio gamingowe z siedzibą w Warszawie, działające globalnie.",
    chart: "./charts/CIA Games.png",
  },
  {
    name: "Mo-BRUK",
    tag: "Gospodarka odpadami",
    returnInfo: "10 lat: 4430%",
    thesis:
      "Ekologiczna przemiana UE i długoterminowe kontrakty. Spółka specjalizuje się w stabilizacji oraz zestalaniu odpadów nieorganicznych, produkcji paliw alternatywnych oraz termicznym przetwarzaniu odpadów niebezpiecznych i medycznych.",
    chart: "./charts/MO Bruk.png",
  },
  {
    name: "Dino Polska",
    tag: "Retail",
    returnInfo: "Od debiutu: 1120%",
    thesis:
      "Skalowalny model, ekspansja w mniejszych miastach. Sieć supermarketów spożywczych,zlokalizowanych głównie w małych i średnich miastach Zysk netto 1,5 mld PLN (2024).",
    chart: "./charts/DINO.png",
  },
  {
    name: "Tarczyński",
    tag: "FMCG",
    returnInfo: "10 lat: 1120%",
    thesis:
      "Silna marka przekąsek proteinowych i eksport.Polski producent w branży mięsnej — wędlin, kabanosów, parówek oraz przekąsek białkowych. Przychody >2 mld PLN (2024), zysk netto 120 mln PLN.",
    chart: "./charts/Tarczynski.png",
  },
  {
    name: "Sygnity",
    tag: "IT/Software",
    returnInfo: ">5 lat: 1280%",
    thesis:
      "Cyfryzacja sektora publicznego i AI. Doradztwo IT, wytwarzanie i wdrażanie oprogramowania, integracja systemów.Segmenty działalności: sektor bankowo-finansowy, publiczny, użyteczności publicznej; także przemysł, telekomunikacja, ochrona zdrowia.",
    chart: "./charts/Sygnity.png",
  },
  {
    name: "XTB",
    tag: "FinTech",
    returnInfo: "10 lat: 1085%",
    thesis:
      "Skalowalne przychody, rozbudowa oferty inwestycyjnej, innowacje online.Firma oferuje dostęp do rynków finansowych: Forex, kontraktów różnicy (CFD), surowców, indeksów, akcji, ETF-ówPrzychody 1,9 mld PLN (2024), zysk netto 860 mln PLN.",
    chart: "./charts/XTB.png",
  },
  {
    name: "CD PROJEKT",
    tag: "Gaming",
    returnInfo: "10 lat: 1021%",
    thesis:
      "Silne IP (Witcher, Cyberpunk) i zapowiedziane sequele.Spółka gamingowa z silną marka międzynarodowa — gry jak The Witcher czy Cyberpunk zdobyły szerokie grono fanów i przyniosły wielomilionwe przychody.",
    chart: "./charts/CD Projekt.png",
  },
];

export default function InvestorLanding() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0b0f] text-white antialiased">
      {/* Background aesthetics */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #6ee7ff 0%, rgba(110,231,255,0) 70%)",
          }}
        />
        <div
          className="absolute top-20 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #a78bfa 0%, rgba(167,139,250,0) 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #34d399 0%, rgba(52,211,153,0) 70%)",
          }}
        />
      </div>

      {/* Nav */}
      <header className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 grid place-items-center">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-wide"> Odkryj Potencjał GPW</span>
        </div>
        <a
          href="#kontakt"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
        >
          Porozmawiajmy <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Inwestuj w liderów polskiego rynku.
              <span className="block text-white/70">GPW z potencjałem wzrostu ponad globalne benchmarki.</span>
            </motion.h1>
            <p className="mt-5 text-white/70 md:text-lg">
              W 2025 r. warszawska giełda wyróżnia się na tle Europy. Wybrane sektory z trwałymi trendami: obronność, nowe technologie, retail i fintech. Selektywny dobór spółek akcentuje skalowalność, przewagi konkurnecyjne i przewidywalne przepływy.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm">
                <LineChart className="h-4 w-4" />Wzrost + dywidendy
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm">
                <Shield className="h-4 w-4" />Ryzyko pod kontrolą
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm">
                <Building2 className="h-4 w-4" />Branże z potencjałem wzrostu
              </span>
            </div>
          </div>

          {/* Decorative graphic */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-white/10 via-white/0 to-white/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-56 w-full rounded-2xl bg-gradient-to-br from-indigo-500/30 via-sky-400/20 to-emerald-400/20" />
              <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                {["Obronność", "Gospodarka odpadami", "FinTech", "Retail", "Gaming", "Software"].map((t) => (
                  <div key={t} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-center text-white/80">
                    {t}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/60">
                Wizualizacja poglądowa. Dane historyczne nie gwarantują przyszłych wyników. Inwestycje wiążą się z ryzykiem utraty kapitału.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market highlight */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold">Dlaczego teraz?</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-sm md:text-base">
            <div className="rounded-2xl bg-black/30 p-5 border border-white/10">
              <p className="font-medium">Relatywna siła</p>
              <p className="mt-1 text-white/70">Silne zachowanie indeksów vs. wybrane rynki rozwinięte, rotacja w kierunku spółek jakościowych.</p>
            </div>
            <div className="rounded-2xl bg-black/30 p-5 border border-white/10">
              <p className="font-medium">Megatrendy</p>
              <p className="mt-1 text-white/70">Bezpieczeństwo, IT, gaming, cyfryzacja usług publicznych i prywatnych.</p>
            </div>
            <div className="rounded-2xl bg-black/30 p-5 border border-white/10">
              <p className="font-medium">Selekcja i risk-management</p>
              <p className="mt-1 text-white/70">Koncentracja na przepływach pieniężnych, barierach wejścia i przewagach technologicznych.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies grid */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">Wybrani liderzy GPW</h2>
          <p className="text-xs text-white/60">Zwroty mają charakter historyczny i poglądowy.</p>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {companies.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div
                className="absolute -top-20 -right-10 h-40 w-40 rounded-full opacity-30 blur-2xl"
                style={{
                  background:
                    "radial-gradient(40% 40% at 50% 50%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)",
                }}
              />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/60">{c.tag}</p>
                  <h3 className="mt-1 text-lg font-semibold">{c.name}</h3>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-1 text-xs">{c.returnInfo}</div>
              </div>
              <p className="mt-3 text-sm text-white/70">{c.thesis}</p>

              {/* Chart image with graceful fallback */}
              {c.chart ? (
                <img
                  src={c.chart}
                  alt={`${c.name} – wykres`}
                  className="mt-4 h-28 w-full rounded-xl object-contain border border-white/10"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "block";
                  }}
                />
              ) : null}
              <div className="mt-4 h-28 w-full rounded-xl bg-gradient-to-br from-white/10 via-white/0 to-white/10 hidden" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA / Form */}
      <section id="kontakt" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 md:p-10">
          <div
            className="absolute -inset-1 rounded-3xl opacity-20 blur-2xl"
            style={{
              background:
                "linear-gradient(120deg, #60a5fa 0%, #a78bfa 35%, #34d399 70%, transparent 100%)",
            }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Porozmawiajmy o Twojej strategii</h3>
              <p className="mt-3 text-white/70">
                Zostaw kontakt. Nasz doradca przedstawi selekcję spółek dopasowaną do Twoich celów i tolerancji ryzyka.
              </p>
              <div className="mt-6 flex items-center gap-3 text-white/80">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 text-sm">
                  <Phone className="h-4 w-4" />Oddzwaniamy w 24h
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 text-sm">
                  Bez zobowiązań
                </div>
              </div>
            </div>
            <form onSubmit={onSubmit} className="relative rounded-2xl border border-white/10 bg-black/30 p-5">
              <label className="block text-sm mb-2">Imię i nazwisko</label>
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Jan Kowalski"
                required
                className="mb-4 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 outline-none placeholder:text-white/40"
              />

              <label className="block text-sm mb-2">Telefon</label>
              <input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+48 600 000 000"
                required
                className="mb-4 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 outline-none placeholder:text-white/40"
              />

              <label className="block text-sm mb-2">E-mail (opcjonalnie)</label>
              <input
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="jan.kowalski@firma.pl"
                className="mb-5 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 outline-none placeholder:text-white/40"
              />

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 font-medium hover:bg-white/15"
              >
                Wyślij zgłoszenie <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </button>
              {sent && (
                <p className="mt-3 text-sm text-emerald-300">Dziękujemy! Skontaktujemy się wkrótce.</p>
              )}
              <p className="mt-3 text-[11px] leading-relaxed text-white/50">
                Administratorem danych jest ...... Dane przetwarzamy w celu kontaktu na podstawie uzasadnionego interesu (art.6 ust.1 lit.f RODO). Podanie danych jest dobrowolne. Masz prawo dostępu, sprostowania i usunięcia danych.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-xs text-white/60">
          <p>
            Materiał informacyjny przygotowany dla potencjalnych inwestorów. Nie stanowi rekomendacji inwestycyjnej ani oferty w rozumieniu Kodeksu cywilnego. Historyczne stopy zwrotu nie gwarantują wyników w przyszłości. Inwestowanie wiąże się z ryzykiem utraty zainwestowanego kapitału.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}
