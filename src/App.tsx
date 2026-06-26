import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "./data";
import whiteGoldBg from "./assets/white-gold-bg.png";
import musicFile from "./assets/wedding-music.mp3";
import { useRef } from "react";

// ══════════ GOLD CALLIGRAPHIC SVG DIVIDER ══════════
function GoldDivider() {
  return (
    <div className="gold-divider">
      <svg width="240" height="24" viewBox="0 0 240 24" fill="none">
        <defs>
          <linearGradient id="gold-shimmer-divider" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#540516" />
            <stop offset="25%" stopColor="#800c24" />
            <stop offset="50%" stopColor="#fff5f6" />
            <stop offset="75%" stopColor="#800c24" />
            <stop offset="100%" stopColor="#540516" />
            <animate attributeName="x1" from="-100%" to="100%" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="x2" from="0%" to="200%" dur="3.5s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
        {/* Center diamond */}
        <path d="M120 4 L128 12 L120 20 L112 12 Z" fill="url(#gold-shimmer-divider)" />
        {/* Left wing lines */}
        <path d="M10 12 H100 M20 12 L30 6 M20 12 L30 18" stroke="url(#gold-shimmer-divider)" strokeWidth="1.2" strokeLinecap="round" />
        {/* Right wing lines */}
        <path d="M140 12 H230 M220 12 L210 6 M220 12 L210 18" stroke="url(#gold-shimmer-divider)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// ══════════ HEART SVG DIVIDER ══════════
function HeartDivider() {
  return (
    <div className="gold-divider" style={{ margin: "32px auto" }}>
      <svg width="180" height="24" viewBox="0 0 180 24" fill="none" style={{ opacity: 0.85 }}>
        <defs>
          <linearGradient id="gold-shimmer-heart" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#540516" />
            <stop offset="25%" stopColor="#800c24" />
            <stop offset="50%" stopColor="#fff5f6" />
            <stop offset="75%" stopColor="#800c24" />
            <stop offset="100%" stopColor="#540516" />
            <animate attributeName="x1" from="-100%" to="100%" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="x2" from="0%" to="200%" dur="3.5s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
        <path d="M12 12 H70" stroke="url(#gold-shimmer-heart)" strokeWidth="1" strokeLinecap="round" />
        <path
          d="M90 19.5c.37-.36.75-.8 1.12-1.37A12.7 12.7 0 0 0 94.5 13a4.2 4.2 0 0 0-3.37-6.5c-1.23 0-2.1.37-3.13 1.5-1.03-1.13-1.9-1.5-3.13-1.5A4.2 4.2 0 0 0 81.5 13c0 1.63 1.05 2.87 2.1 3.88l5.43 5.12Z"
          fill="url(#gold-shimmer-heart)"
          stroke="url(#gold-shimmer-heart)"
          strokeWidth="1"
        />
        <path d="M110 12 H168" stroke="url(#gold-shimmer-heart)" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// ══════════ PARTICLES (SVG GOLDEN SPARKLES) ══════════
function Particles() {
  return (
    <div className="particles">
      {Array.from({ length: 20 }, (_, i) => {
        const size = 6 + Math.random() * 10;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 12 + Math.random() * 8;
        return (
          <div
            key={i}
            className="particle"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              style={{
                opacity: 0.3 + Math.random() * 0.45,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              <path
                d="M12 2C12 2 18 7 18 12C18 17 14.5 21 12 23C9.5 21 6 17 6 12C6 7 12 2 12 2Z"
                fill="#800c24"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

// ══════════ ROYAL CREST ══════════
function RoyalCrest() {
  return (
    <div className="royal-crest-wrapper">
      <div className="royal-crest-circle">
        <svg
          width="180"
          height="180"
          viewBox="0 0 100 100"
          style={{ position: 'absolute', transform: 'rotate(-90deg)', pointerEvents: 'none' }}
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#800c24"
            strokeWidth="0.8"
            strokeDasharray="4 2"
          />
        </svg>
        <div className="royal-crest-letters">
          <span>ع</span>
          <span className="royal-crest-amp">&amp;</span>
          <span>غ</span>
        </div>
      </div>
    </div>
  );
}

// ══════════ CURTAIN INTRO (DOUBLE-GATE SPLITTING VIEW) ══════════
function CurtainIntro({ onOpen }: { onOpen: () => void }) {
  const [animating, setAnimating] = useState(false);

  const handleOpen = () => {
    setAnimating(true);
  };

  return (
    <div className="curtain-intro-wrapper">
      {/* Left Gate Panel */}
      <motion.div
        className="curtain-gate curtain-gate--left"
        initial={{ x: 0 }}
        animate={{ x: animating ? "-100%" : 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as const }}
        onAnimationComplete={() => {
          if (animating) {
            onOpen();
          }
        }}
      />
      {/* Right Gate Panel */}
      <motion.div
        className="curtain-gate curtain-gate--right"
        initial={{ x: 0 }}
        animate={{ x: animating ? "100%" : 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as const }}
      />

      {/* Centered Content */}
      <motion.div
        className="curtain-intro__content"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: animating ? 0 : 1, scale: animating ? 0.95 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <RoyalCrest />
        <p className="curtain-intro__label">دعوة حفل زفاف</p>
        <motion.button
          className="curtain-enter-btn"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOpen}
        >
          افتح الدعوة
        </motion.button>
        <p className="curtain-intro__footer">{weddingData.dateDisplay}</p>
      </motion.div>
    </div>
  );
}

// ══════════ STAGGERED SCROLL REVEAL CONFIG ══════════
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 0.85,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const viewportConfig = { once: true, amount: 0.15 };

// ══════════ SECTION 1: HERO OPENING ══════════
function OpeningSection() {
  return (
    <section className="hero-royal" id="top">
      <motion.div
        className="hero-royal__content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.p className="hero-royal__bismillah" variants={itemVariants}>
          {weddingData.openingPrayer}
        </motion.p>

        <motion.div variants={lineVariants} style={{ originX: 0.5 }}>
          <GoldDivider />
        </motion.div>

        <motion.p className="hero-royal__invite-line" variants={itemVariants}>
          {weddingData.invitationText}
        </motion.p>

        <motion.div className="hero-royal__names gold-gradient-text" variants={itemVariants}>
          <h1 className="hero-royal__name">{weddingData.groomFamily}</h1>
          <span className="hero-royal__ampersand">&amp;</span>
          <h1 className="hero-royal__name">{weddingData.brideFamily}</h1>
        </motion.div>

        <motion.div variants={lineVariants} style={{ originX: 0.5 }}>
          <GoldDivider />
        </motion.div>

        <motion.div
          variants={itemVariants}
          style={{ marginTop: "16px", color: "var(--text-muted)", fontSize: "1.1rem" }}
        >
          <p>{weddingData.dayName}، {weddingData.dateDisplay}</p>
          <p style={{ marginTop: "6px" }}>الساعة {weddingData.time}</p>
          <p style={{ marginTop: "6px" }}>{weddingData.venue.name}</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-royal__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <span>مرر للأسفل</span>
        <div className="hero-royal__scroll-line" />
      </motion.div>
    </section>
  );
}

// ══════════ SECTION 2: INVITATION MESSAGE ══════════
function MessageSection() {
  return (
    <section className="section-royal" id="message">
      <motion.div
        className="section-royal__content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.div variants={lineVariants} style={{ originX: 0.5 }}>
          <HeartDivider />
        </motion.div>

        <motion.p className="hero-royal__quote" variants={itemVariants}>
          {weddingData.quote}
        </motion.p>
      </motion.div>
    </section>
  );
}

// ══════════ SECTION 3: EVENT DETAILS ══════════
function EventDetailsSection() {
  return (
    <section className="section-royal" id="details">
      <motion.div
        className="section-royal__content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.div variants={lineVariants} style={{ originX: 0.5 }}>
          <GoldDivider />
        </motion.div>

        <motion.p className="event-royal__mashia" variants={itemVariants}>
          {weddingData.eventDateLine}
        </motion.p>

        <div className="event-royal__grid">
          <motion.div className="event-royal__card" variants={itemVariants}>
            <span className="event-royal__icon">📅</span>
            <span className="event-royal__label">التاريخ</span>
            <span className="event-royal__value">{weddingData.dateDisplay}</span>
          </motion.div>

          <motion.div className="event-royal__card" variants={itemVariants}>
            <span className="event-royal__icon">🕐</span>
            <span className="event-royal__label">الوقت</span>
            <span className="event-royal__value event-royal__value--large">{weddingData.time}</span>
          </motion.div>

          <motion.div className="event-royal__card" variants={itemVariants}>
            <span className="event-royal__icon">📍</span>
            <span className="event-royal__label">المكان</span>
            <span className="event-royal__value">{weddingData.venue.name}</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ══════════ SECTION 4: COUNTDOWN ══════════
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
    <section className="section-royal" id="countdown">
      <motion.div
        className="section-royal__content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.h2 className="countdown-royal__title" variants={itemVariants}>
          العد التنازلي لليوم الموعود
        </motion.h2>

        <motion.div className="countdown-royal__grid" variants={itemVariants}>
          <div className="countdown-royal__circle">
            <span className="countdown-royal__number">{timeLeft.days}</span>
            <span className="countdown-royal__label">يوم</span>
          </div>
          <span className="countdown-royal__separator">:</span>
          <div className="countdown-royal__circle">
            <span className="countdown-royal__number">{timeLeft.hours}</span>
            <span className="countdown-royal__label">ساعة</span>
          </div>
          <span className="countdown-royal__separator">:</span>
          <div className="countdown-royal__circle">
            <span className="countdown-royal__number">{timeLeft.minutes}</span>
            <span className="countdown-royal__label">دقيقة</span>
          </div>
          <span className="countdown-royal__separator">:</span>
          <div className="countdown-royal__circle">
            <span className="countdown-royal__number">{timeLeft.seconds}</span>
            <span className="countdown-royal__label">ثانية</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ══════════ SECTION 5: CLOSING ══════════
function ClosingSection() {
  return (
    <section className="section-royal" id="closing">
      <motion.div
        className="section-royal__content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.span className="flourish" variants={itemVariants}>✦</motion.span>

        <motion.div variants={lineVariants} style={{ originX: 0.5 }}>
          <GoldDivider />
        </motion.div>

        <motion.h2 className="closing-royal__names gold-gradient-text" variants={itemVariants}>
          {weddingData.groom} ♥ {weddingData.bride}
        </motion.h2>

        <motion.p className="closing-royal__message" variants={itemVariants}>
          {weddingData.closingMessage}
        </motion.p>

        <motion.p className="closing-royal__date" variants={itemVariants}>
          {weddingData.dateDisplay}
        </motion.p>

        <motion.div variants={lineVariants} style={{ originX: 0.5 }}>
          <GoldDivider />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ══════════ MAIN APP ══════════
export default function App() {
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize ambient audio background music
    audioRef.current = new Audio(musicFile);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.55; // Gentle, luxury-tier background volume level

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handlePlayToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => console.log("Audio play failed:", err));
      setIsPlaying(true);
    }
  };

  const handleOpenInvitation = () => {
    setOpened(true);
    // Auto-trigger music play. Browser permits autoplay since this is inside a click handler (user gesture).
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Music autoplay failed:", err));
    }
  };

  return (
    <>
      {/* Permanent background and page frame to prevent layout flash/resizing lag on mobile */}
      <div className="app-bg">
        <img src={whiteGoldBg} className="app-bg__img" alt="" />
        <div className="app-bg__overlay" />
      </div>
      <div className="page-frame" />

      {/* Floating Gold Music Controls Button */}
      {opened && (
        <button
          className={`music-toggle-btn ${isPlaying ? "playing" : ""}`}
          onClick={handlePlayToggle}
          aria-label="Toggle Background Music"
        >
          <div className="music-toggle-btn__ripple" />
          <svg
            className="music-toggle-btn__icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            {isPlaying ? (
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h6V3h-8z" />
            ) : (
              <path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.18l5.45 5.45L21 21.73 4.27 3zM14 7h4V3h-6v5.18l2 2V7z" />
            )}
          </svg>
        </button>
      )}

      <AnimatePresence mode="wait">
        {!opened && <CurtainIntro key="curtain" onOpen={handleOpenInvitation} />}
      </AnimatePresence>

      {opened && (
        <div className="app-scroll-container">
          <Particles />
          <OpeningSection />
          <MessageSection />
          <EventDetailsSection />
          <CountdownSection />
          <ClosingSection />
          <footer className="footer">
            <p className="footer__text">
              صُمم بكل <span className="footer__heart">♥</span>
            </p>
          </footer>
        </div>
      )}
    </>
  );
}
