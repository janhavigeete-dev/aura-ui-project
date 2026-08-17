"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [rsvp, setRsvp] = useState(false);
  const [selectedMoment, setSelectedMoment] = useState<string | null>(null);

  return (
    <main className="site">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">AURA</div>

        <div className="nav-links">
          <a href="#story">Story</a>
          <a href="#details">Details</a>
          <a href="#rsvp">RSVP</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          AN EVENING TO REMEMBER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          Moments
          <br />
          <span>worth feeling.</span>
        </motion.h1>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          An intimate celebration of people, stories and the little moments
          that stay with us forever.
        </motion.p>

        <motion.a
          href="#story"
          className="hero-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Discover the evening ↓
        </motion.a>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <span></span>
          Scroll to explore
        </motion.div>
      </section>

      {/* STORY */}
      <motion.section
        className="story"
        id="story"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="section-number">01</div>

        <div className="story-content">

          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            THE STORY
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            Some evenings
            <br />
            become <i>memories.</i>
          </motion.h2>

          <motion.p
            className="story-text"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
          >
            AURA is designed around one simple idea — create a space where
            people can slow down, connect and celebrate together.
          </motion.p>

          <motion.div
            className="quote"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            “The best moments are the ones we never planned.”
          </motion.div>

        </div>
      </motion.section>

      {/* VISUAL BREAK */}
      {/* INTERACTIVE VISUAL */}
<section className="visual-section">

  <motion.div
    className="floating-card card-one"
    animate={{
      y: [0, -18, 0],
      rotate: [-2, 1, -2],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    CREATE
  </motion.div>

  <motion.div
    className="floating-card card-two"
    animate={{
      y: [0, 20, 0],
      rotate: [2, -1, 2],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    CONNECT
  </motion.div>

  <motion.div
    className="floating-card card-three"
    animate={{
      y: [0, -14, 0],
      rotate: [1, -2, 1],
    }}
    transition={{
      duration: 5.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    CELEBRATE
  </motion.div>

  <motion.div
    className="visual-center"
    initial={{
      opacity: 0,
      scale: 0.6,
      rotate: -10,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
      rotate: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 1,
      ease: "easeOut",
    }}
    whileHover={{
      scale: 1.12,
      rotate: 5,
    }}
  >
    <motion.span
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      A
    </motion.span>
  </motion.div>

</section>

{/* MOMENTS GALLERY */}
<section className="gallery-section">

  <motion.div
    className="gallery-heading"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <p className="eyebrow">THE EXPERIENCE</p>

    <h2>
      Moments
      <br />
      <i>in between.</i>
    </h2>
  </motion.div>

  <div className="gallery-grid">

    <motion.div
      className="gallery-card gallery-large"
      role="button"
      tabIndex={0}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 0.98 }}
      onClick={() => setSelectedMoment("arrival")}
      onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        setSelectedMoment("arrival");
      }
}}
    >
      <div className="gallery-image image-one">
        <span>01</span>
      </div>

      <div className="gallery-caption">
        <span>THE ARRIVAL</span>
        <p>Where the evening begins.</p>
      </div>
    </motion.div>


    <motion.div
      className="gallery-card gallery-small"
      role="button"
      tabIndex={0}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.15 }}
      whileHover={{ scale: 0.98 }}
      onClick={() => setSelectedMoment("connection")}
      onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        setSelectedMoment("connection");
      }
}}
    >
      <div className="gallery-image image-two">
        <span>02</span>
      </div>

      <div className="gallery-caption">
        <span>THE CONNECTION</span>
        <p>People make the moment.</p>
      </div>
    </motion.div>


    <motion.div
      className="gallery-card gallery-small"
      role="button"
      tabIndex={0}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.25 }}
      whileHover={{ scale: 0.98 }}
      onClick={() => setSelectedMoment("celebration")}
      onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        setSelectedMoment("celebration");
      }
}}
    >
      <div className="gallery-image image-three">
        <span>03</span>
      </div>

      <div className="gallery-caption">
        <span>THE CELEBRATION</span>
        <p>And everything in between.</p>
      </div>
    </motion.div>

  </div>
    

  {selectedMoment && (
    <motion.div
      className="moment-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => setSelectedMoment(null)}
    >
      <motion.div
        className="moment-modal-content"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={() => setSelectedMoment(null)}
        >
          ×
        </button>

        {selectedMoment === "arrival" && (
          <>
            <p className="eyebrow">01 — THE ARRIVAL</p>
            <h3>The evening begins.</h3>
            <p>
              A quiet entrance, warm lights and that first feeling
              that something memorable is about to happen.
            </p>
          </>
        )}

        {selectedMoment === "connection" && (
          <>
            <p className="eyebrow">02 — THE CONNECTION</p>
            <h3>People make the moment.</h3>
            <p>
              The conversations, laughter and unexpected encounters
              that turn an evening into a memory.
            </p>
          </>
        )}

        {selectedMoment === "celebration" && (
          <>
            <p className="eyebrow">03 — THE CELEBRATION</p>
            <h3>Everything in between.</h3>
            <p>
              Music, movement and shared experiences — the moments
              you remember long after the evening ends.
            </p>
          </>
        )}
      </motion.div>
    </motion.div>
  )}


</section>
{/* GALLERY DETAIL OVERLAY */}

{selectedMoment && (
  <motion.div
    className="moment-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedMoment(null)}
  >
    <motion.div
      className="moment-modal"
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 40 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="moment-close"
        onClick={() => setSelectedMoment(null)}
        aria-label="Close moment details"
      >
        ×
      </button>

      <p className="eyebrow">
        {selectedMoment === "arrival" && "01 — THE ARRIVAL"}
        {selectedMoment === "connection" && "02 — THE CONNECTION"}
        {selectedMoment === "celebration" && "03 — THE CELEBRATION"}
      </p>

      <h3>
        {selectedMoment === "arrival" && (
          <>
            Where the
            <br />
            evening <i>begins.</i>
          </>
        )}

        {selectedMoment === "connection" && (
          <>
            Where people
            <br />
            <i>connect.</i>
          </>
        )}

        {selectedMoment === "celebration" && (
          <>
            Where moments
            <br />
            become <i>memories.</i>
          </>
        )}
      </h3>

      <p className="moment-description">
        {selectedMoment === "arrival" &&
          "A quiet beginning, filled with anticipation, warm welcomes and the feeling that something special is about to unfold."}

        {selectedMoment === "connection" &&
          "The conversations, laughter and unexpected encounters that turn an evening into something worth remembering."}

        {selectedMoment === "celebration" &&
          "The energy of being together, celebrating the present and creating memories that stay long after the evening ends."}
      </p>

      <button
        className="moment-back"
        onClick={() => setSelectedMoment(null)}
      >
        Back to the experience ↑
      </button>
    </motion.div>
  </motion.div>
)}
      {/* DETAILS */}
      <motion.section
        className="details"
        id="details"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
        }}
      >

        <div className="section-number">02</div>

        <div className="details-content">

          <motion.p
            className="eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            THE EVENING
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            Save
            <br />
            the <i>date.</i>
          </motion.h2>

          <div className="detail-grid">

            <motion.div
              className="detail"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
            >
              <span>DATE</span>
              <strong>24 OCTOBER</strong>
              <p>Saturday, 2026</p>
            </motion.div>

            <motion.div
              className="detail"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <span>TIME</span>
              <strong>06:30 PM</strong>
              <p>Doors open at 6</p>
            </motion.div>

            <motion.div
              className="detail"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
            >
              <span>VENUE</span>
              <strong>THE GARDEN</strong>
              <p>Pune, Maharashtra</p>
            </motion.div>

          </div>

        </div>

      </motion.section>

      {/* RSVP */}
      <section
        className="rsvp"
        id="rsvp"
      >

        <motion.p
          className="eyebrow"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          03 — YOUR INVITATION
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
        >
          Will you
          <br />
          <i>join us?</i>
        </motion.h2>

        {!rsvp ? (
  <motion.div
    className="rsvp-form"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <input
      type="text"
      placeholder="Your name"
      className="rsvp-input"
      id="rsvp-name"
    />

    <input
      type="email"
      placeholder="Your email"
      className="rsvp-input"
      id="rsvp-email"
    />

    <motion.button
      className="rsvp-button"
      onClick={() => {
        const name = (
          document.getElementById("rsvp-name") as HTMLInputElement
        ).value;

        const email = (
          document.getElementById("rsvp-email") as HTMLInputElement
        ).value;

        if (!name || !email) {
          alert("Please enter your name and email.");
          return;
        }

        setRsvp(true);
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      Confirm attendance →
    </motion.button>
  </motion.div>
) : (
  <motion.div
    className="confirmed"
    initial={{
      opacity: 0,
      scale: 0.8,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 0.5,
    }}
  >
    <div className="check">✓</div>

    <h3>
      You&apos;re on the list.
    </h3>

    <p>
      We&apos;ll see you at AURA.
    </p>
  </motion.div>
)}

      </section>

      {/* FOOTER */}
      <footer>
        <div>AURA © 2026</div>
        <div>Made for moments.</div>
      </footer>

    </main>
    )
  }
