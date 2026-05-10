import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "./data";
import silkyBg from "./assets/lux-watercolor-bg.png";
import floralBg from "./assets/lux-marble-bg.png";
import waxSealImg from "./assets/wax-seal.png";

// ══════════ ORNAMENT ══════════
function Ornament({ large = false }: { large?: boolean }) {
  return (
    <div className={`ornament ${large ? "ornament--large" : ""}`}>
      <div className="ornament__line" />
      <div className="ornament__diamond" />
      <div className="ornament__line" />
    </div>
  );
}

// ══════════ PARTICLES ══════════
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

// ══════════ FADE-UP ══════════
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// ══════════ ENVELOPE INTRO ══════════
function EnvelopeIntro({ onOpen }: { onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSealClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
    // Wait for flap to open, then card to slide out completely
    setTimeout(() => onOpen(), 2200);
  };

  return (
    <motion.div
      className="envelope-intro"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className={`envelope ${isOpen ? "envelope--open" : ""}`}
        initial={{ opacity: 0, y: 80, rotateX: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 1, 0.5, 1] as const }}
      >
        <div className="envelope__body" />

        <motion.div
          className="envelope__card"
          initial={{ y: 0, scale: 1 }}
          animate={isOpen ? { y: "-100%", scale: 1.05 } : { y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.25, 1, 0.5, 1] as const }}
        >
          <div className="envelope__card-ornament">✦ ✦ ✦</div>
          <p className="envelope__card-label">دعوة حفل زفاف</p>
          <p className="envelope__card-invite">{weddingData.invitationText}</p>
          <div className="envelope__card-families">
            <span>{weddingData.brideFamily}</span>
            <span className="envelope__card-amp">&</span>
            <span>{weddingData.groomFamily}</span>
          </div>
          <div className="envelope__card-heart">♥</div>
          <p className="envelope__card-date">{weddingData.dateDisplay}</p>
          <div className="envelope__card-bottom-ornament">✦ ─── ♥ ─── ✦</div>
        </motion.div>

        <div className="envelope__flap">
          <div className="envelope__flap-inner" />
        </div>

        <motion.div
          className="envelope__seal"
          onClick={handleSealClick}
        >
          <img src={waxSealImg} alt="Wax seal" />
        </motion.div>

        {!isOpen && (
          <motion.p
            className="envelope__prompt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            اضغط على الختم لفتح الدعوة
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}

// ══════════ SECTION 1: OPENING (Prayer + Quote + Invitation) ══════════
function OpeningSection() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <img src={silkyBg} alt="" />
      </div>

      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--tr" />
      <div className="hero__corner hero__corner--bl" />
      <div className="hero__corner hero__corner--br" />

      <div className="hero__content">
        {/* Opening Prayer */}
        <motion.p
          className="hero__bismillah"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {weddingData.openingPrayer}
        </motion.p>

        <Ornament />

        {/* Quote */}
        <motion.p
          className="hero__quote"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {weddingData.quote}
        </motion.p>

        <Ornament large />

        {/* Invitation line */}
        <motion.p
          className="hero__invite-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {weddingData.invitationText}
        </motion.p>

        {/* Family names */}
        <motion.div
          className="hero__names"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <h1 className="hero__name">{weddingData.brideFamily}</h1>
          <span className="hero__ampersand">&</span>
          <h1 className="hero__name">{weddingData.groomFamily}</h1>
        </motion.div>
      </div>

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

// ══════════ SECTION 2: COUPLE (Names + Day Quote + Date) ══════════
function CoupleSection() {
  return (
    <section className="section" id="couple">
      <div className="section__bg">
        <img src={floralBg} alt="" />
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <Ornament large />

        {/* Titles & Names */}
        <motion.div className="couple__titles" variants={fadeUp} custom={0}>
          <div className="couple__person">
            <span className="couple__title">{weddingData.groomTitle}</span>
            <span className="couple__name">{weddingData.groom}</span>
          </div>
          <div className="couple__divider">/</div>
          <div className="couple__person">
            <span className="couple__title">{weddingData.brideTitle}</span>
            <span className="couple__name">{weddingData.bride}</span>
          </div>
        </motion.div>

        <Ornament />

        {/* Day quote */}
        <motion.p className="couple__day-quote" variants={fadeUp} custom={1}>
          {weddingData.dayQuote}
        </motion.p>
        <motion.p className="couple__day-quote couple__day-quote--accent" variants={fadeUp} custom={2}>
          {weddingData.dayQuote2}
        </motion.p>

        <Ornament />

        {/* Date */}
        <motion.p className="couple__date" variants={fadeUp} custom={3}>
          {weddingData.dateDisplay}
        </motion.p>
      </motion.div>
    </section>
  );
}

// ══════════ SECTION 3: DUA (Blessing) ══════════
function DuaSection() {
  return (
    <section className="section" id="dua">
      <div className="section__bg">
        <img src={silkyBg} alt="" />
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {/* Alef Lam decoration */}
        <motion.div className="dua__alef" variants={fadeUp} custom={0}>
          اللهم
        </motion.div>

        <Ornament large />

        <motion.p className="dua__text" variants={fadeUp} custom={1}>
          {weddingData.dua}
        </motion.p>

        <Ornament large />
      </motion.div>
    </section>
  );
}

// ══════════ SECTION 4: ATTENDANCE ══════════
function AttendanceSection() {
  return (
    <section className="section" id="attendance">
      <div className="section__bg">
        <img src={silkyBg} alt="" />
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <Ornament large />

        <motion.p className="attendance__text" variants={fadeUp} custom={0}>
          {weddingData.attendanceText}
        </motion.p>

        <Ornament />

        <motion.p className="attendance__kids" variants={fadeUp} custom={1}>
          {weddingData.kidsNote}
        </motion.p>

        <motion.p className="attendance__rsvp" variants={fadeUp} custom={2}>
          {weddingData.rsvpNote}
        </motion.p>

        <Ornament large />
      </motion.div>
    </section>
  );
}

// ══════════ SECTION 5: EVENT DETAILS ══════════
function EventDetailsSection() {
  return (
    <section className="section" id="details">
      <div className="section__bg">
        <img src={floralBg} alt="" />
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Ornament large />

        <motion.p className="event__mashia" variants={fadeUp} custom={0}>
          {weddingData.eventDateLine}
        </motion.p>

        <motion.div className="event__detail" variants={fadeUp} custom={1}>
          <span className="event__icon">📅</span>
          <span className="event__value">{weddingData.dateDisplay}</span>
        </motion.div>

        <motion.div className="event__detail" variants={fadeUp} custom={2}>
          <span className="event__icon">📍</span>
          <span className="event__value">{weddingData.venue.area}</span>
        </motion.div>

        <motion.p className="event__venue-name" variants={fadeUp} custom={3}>
          {weddingData.venue.name}
        </motion.p>

        <motion.div className="event__detail" variants={fadeUp} custom={4}>
          <span className="event__icon">🕐</span>
          <span className="event__value event__value--large">{weddingData.time}</span>
        </motion.div>

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
    <section className="countdown section" id="countdown">
      <div className="section__bg">
        <img src={floralBg} alt="" />
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
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

// ══════════ CLOSING ══════════
function ClosingSection() {
  return (
    <section className="closing section">
      <div className="section__bg">
        <img src={silkyBg} alt="" />
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <span className="flourish">✦</span>
        <Ornament large />
        <motion.h2 className="closing__names shimmer-text" variants={fadeUp} custom={0}>
          {weddingData.bride} ♥ {weddingData.groom}
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
          <DuaSection />
          <CoupleSection />
          <OpeningSection />
          <EventDetailsSection />
          <AttendanceSection />
          <CountdownSection />
          <ClosingSection />
          <footer className="footer">
            <p className="footer__text">
              صُمم بكل <span className="footer__heart">♥</span>
            </p>
          </footer>
        </>
      )}
    </>
  );
}
