import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "./data";

// ══════════ ORNAMENT COMPONENT ══════════
function Ornament({ large = false }: { large?: boolean }) {
  return (
    <div className={`ornament ${large ? "ornament--large" : ""}`}>
      <div className="ornament__line" />
      <div className="ornament__diamond" />
      <div className="ornament__line" />
    </div>
  );
}

// ══════════ FLOATING PARTICLES ══════════
function Particles() {
  return (
    <div className="particles">
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${10 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
}

// ══════════ FADE-IN WRAPPER ══════════
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// ══════════ HERO SECTION ══════════
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--tr" />
      <div className="hero__corner hero__corner--bl" />
      <div className="hero__corner hero__corner--br" />

      <motion.p
        className="hero__bismillah"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        بسم الله الرحمن الرحيم
      </motion.p>

      <motion.p
        className="hero__subtitle-top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        حفل زفاف
      </motion.p>

      <Ornament />

      <motion.div
        className="hero__names"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <h1 className="hero__name">{weddingData.groom}</h1>
        <span className="hero__ampersand">♥</span>
        <h1 className="hero__name">{weddingData.bride}</h1>
      </motion.div>

      <Ornament />

      <motion.p
        className="hero__date"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        {weddingData.dateDisplay}
      </motion.p>

      <motion.p
        className="hero__verse"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        ❝ قلبان ينبضان بحب واحد ❞
      </motion.p>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <span>مرر للأسفل</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}

// ══════════ QURAN SECTION ══════════
function QuranSection() {
  return (
    <section className="quran-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={0}
      >
        <span className="flourish">✦</span>
        <Ornament large />
        <p className="quran__text">{weddingData.quranVerse}</p>
        <p className="quran__ref">{weddingData.quranRef}</p>
        <Ornament large />
      </motion.div>
    </section>
  );
}

// ══════════ INVITATION SECTION ══════════
function InvitationSection() {
  return (
    <section className="invitation" id="invitation">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p className="section__label" variants={fadeUp} custom={0}>
          الدعوة
        </motion.p>
        <motion.h2 className="section__title" variants={fadeUp} custom={1}>
          يسرنا دعوتكم
        </motion.h2>
        <Ornament />

        <motion.div className="invitation__parents" variants={fadeUp} custom={2}>
          <div className="invitation__family">
            <p className="invitation__family-label">{weddingData.groomFamily.label}</p>
            <p className="invitation__family-names">
              {weddingData.groomFamily.father}
              <br />
              {weddingData.groomFamily.mother}
            </p>
          </div>
          <div className="invitation__family">
            <p className="invitation__family-label">{weddingData.brideFamily.label}</p>
            <p className="invitation__family-names">
              {weddingData.brideFamily.father}
              <br />
              {weddingData.brideFamily.mother}
            </p>
          </div>
        </motion.div>

        <motion.p className="invitation__body" variants={fadeUp} custom={3}>
          {weddingData.invitationText.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </motion.p>
      </motion.div>
    </section>
  );
}

// ══════════ DETAILS SECTION ══════════
function DetailsSection() {
  return (
    <section className="details" id="details">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p className="section__label" variants={fadeUp} custom={0}>
          التفاصيل
        </motion.p>
        <motion.h2 className="section__title" variants={fadeUp} custom={1}>
          تفاصيل الحفل
        </motion.h2>
        <Ornament />

        <div className="details__grid">
          <motion.div className="detail-card" variants={fadeUp} custom={2}>
            <div className="detail-card__icon">📅</div>
            <p className="detail-card__label">التاريخ</p>
            <p className="detail-card__value">{weddingData.dateDisplay}</p>
            <p className="detail-card__sub">{weddingData.dateEn}</p>
          </motion.div>

          <motion.div className="detail-card" variants={fadeUp} custom={3}>
            <div className="detail-card__icon">🕐</div>
            <p className="detail-card__label">الوقت</p>
            <p className="detail-card__value">{weddingData.time}</p>
            <p className="detail-card__sub">{weddingData.timeEn}</p>
          </motion.div>

          <motion.div className="detail-card" variants={fadeUp} custom={4}>
            <div className="detail-card__icon">📍</div>
            <p className="detail-card__label">المكان</p>
            <p className="detail-card__value">{weddingData.venue.name}</p>
            <p className="detail-card__sub">{weddingData.venue.address}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ══════════ COUNTDOWN ══════════
function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(weddingData.date + "T19:00:00").getTime();
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="countdown" id="countdown">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="countdown__title" variants={fadeUp} custom={0}>
          العد التنازلي لليوم الموعود
        </motion.h2>

        <motion.div className="countdown__grid" variants={fadeUp} custom={1}>
          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.days}</span>
            <span className="countdown__label">يوم</span>
          </div>
          <span className="countdown__separator">:</span>
          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.hours}</span>
            <span className="countdown__label">ساعة</span>
          </div>
          <span className="countdown__separator">:</span>
          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.minutes}</span>
            <span className="countdown__label">دقيقة</span>
          </div>
          <span className="countdown__separator">:</span>
          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.seconds}</span>
            <span className="countdown__label">ثانية</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ══════════ TIMELINE SECTION ══════════
function TimelineSection() {
  return (
    <section className="timeline" id="program">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p className="section__label" variants={fadeUp} custom={0}>
          البرنامج
        </motion.p>
        <motion.h2 className="section__title" variants={fadeUp} custom={1}>
          برنامج الحفل
        </motion.h2>
        <Ornament />

        <div className="timeline__list">
          {weddingData.program.map((item, i) => (
            <motion.div
              key={i}
              className="timeline__item"
              variants={fadeUp}
              custom={i + 2}
            >
              <div className="timeline__dot" />
              <div className="timeline__content">
                <p className="timeline__time">{item.time}</p>
                <p className="timeline__event">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ══════════ LOCATION SECTION ══════════
function LocationSection() {
  return (
    <section className="location" id="location">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p className="section__label" variants={fadeUp} custom={0}>
          الموقع
        </motion.p>
        <motion.h2 className="section__title" variants={fadeUp} custom={1}>
          مكان الحفل
        </motion.h2>
        <Ornament />

        <motion.div className="location__card" variants={fadeUp} custom={2}>
          <iframe
            className="location__map"
            src={weddingData.venue.mapEmbed}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding venue location"
          />
          <div className="location__info">
            <h3 className="location__name">{weddingData.venue.name}</h3>
            <p className="location__address">{weddingData.venue.address}</p>
            <a
              className="location__btn"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(weddingData.venue.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 افتح في خرائط جوجل
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ══════════ CLOSING SECTION ══════════
function ClosingSection() {
  return (
    <section className="closing">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="flourish">✦</span>
        <Ornament large />

        <motion.h2 className="closing__names shimmer-text" variants={fadeUp} custom={0}>
          {weddingData.groom} ♥ {weddingData.bride}
        </motion.h2>

        <motion.p className="closing__message" variants={fadeUp} custom={1}>
          {weddingData.closingMessage}
        </motion.p>

        <motion.p className="closing__date" variants={fadeUp} custom={2}>
          {weddingData.dateDisplay}
        </motion.p>

        <Ornament large />
      </motion.div>
    </section>
  );
}

// ══════════ ENVELOPE INTRO ══════════
function EnvelopeIntro({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)",
        textAlign: "center",
        padding: "24px",
        cursor: "pointer",
      }}
      onClick={onOpen}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ marginBottom: "24px" }}
      >
        <span style={{ fontSize: "4rem" }}>💌</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.4rem",
          color: "#c9a96e",
          marginBottom: "8px",
        }}
      >
        لديك دعوة
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          color: "#8a8578",
          letterSpacing: "0.2em",
          marginBottom: "40px",
        }}
      >
        حفل زفاف {weddingData.groom} و {weddingData.bride}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpen}
        style={{
          padding: "16px 48px",
          border: "1px solid #c9a96e",
          background: "transparent",
          color: "#c9a96e",
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          letterSpacing: "0.25em",
          cursor: "pointer",
          borderRadius: "2px",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLButtonElement).style.background = "#c9a96e";
          (e.target as HTMLButtonElement).style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.background = "transparent";
          (e.target as HTMLButtonElement).style.color = "#c9a96e";
        }}
      >
        افتح الدعوة
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{
          position: "absolute",
          bottom: "32px",
          fontFamily: "var(--font-body)",
          fontSize: "0.7rem",
          color: "#8a8578",
          letterSpacing: "0.15em",
        }}
      >
        اضغط لفتح الدعوة
      </motion.p>
    </motion.div>
  );
}

// ══════════ MAIN APP ══════════
export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!opened && <EnvelopeIntro onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <>
          <Particles />
          <div className="page-frame" />
          <Hero />
          <QuranSection />
          <InvitationSection />
          <DetailsSection />
          <CountdownSection />
          <TimelineSection />
          <LocationSection />
          <ClosingSection />
          <footer className="footer">
            <p className="footer__text">
              صُمم بكل <span className="footer__heart">♥</span> — {weddingData.groom} & {weddingData.bride}
            </p>
          </footer>
        </>
      )}
    </>
  );
}
