"use client";

import { FormEvent, useState } from "react";
import {
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

import { profile } from "@/lib/content";
import { dictionaries, type Locale } from "@/lib/i18n";

export default function Contact({ locale }: { locale: Locale }) {
  const copy = dictionaries[locale].contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio contact from ${name || "Visitor"}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
    );

    window.location.href =
      `mailto:${profile.email}` +
      `?subject=${subject}` +
      `&body=${body}`;
  };

  const socialButtonClass = `
    group
    grid
    h-[70px]
    w-[70px]
    place-items-center

    rounded-[22px]

    border
    border-white/[0.16]

    bg-white/[0.045]

    text-white/80

    shadow-[
      inset_0_1px_0_rgba(255,255,255,0.06),
      0_14px_35px_-22px_rgba(0,0,0,0.7)
    ]

    backdrop-blur-xl

    transition-[border-color,background-color,color,box-shadow]
    duration-300

    hover:border-purple-300/55
    hover:bg-purple-500/[0.10]
    hover:text-white

    hover:shadow-[
      0_0_4px_rgba(255,255,255,0.7),
      0_0_15px_rgba(168,85,247,0.55),
      0_20px_45px_-20px_rgba(139,92,246,0.65)
    ]

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-purple-400
    focus-visible:ring-offset-4
    focus-visible:ring-offset-black
  `;

  const inputClass = `
    h-[66px]
    w-full

    rounded-[18px]

    border-2
    border-white/40

    bg-black/45

    px-6

    text-[17px]
    font-semibold
    text-white

    outline-none

    backdrop-blur-md

    placeholder:text-white/65

    transition-[border-color,background-color,box-shadow]
    duration-300
    ease-out

    hover:border-purple-200

    hover:shadow-[
      0_0_4px_rgba(255,255,255,0.95),
      0_0_10px_rgba(216,180,254,0.95),
      0_0_22px_rgba(168,85,247,0.82),
      0_0_34px_rgba(124,58,237,0.40),
      inset_0_0_10px_rgba(168,85,247,0.08)
    ]

    focus:border-white

    focus:bg-black/55

    focus:shadow-[
      0_0_5px_rgba(255,255,255,1),
      0_0_12px_rgba(216,180,254,1),
      0_0_28px_rgba(168,85,247,0.95),
      0_0_44px_rgba(124,58,237,0.60),
      inset_0_0_14px_rgba(168,85,247,0.12)
    ]
  `;

  const textareaClass = `
    min-h-[270px]
    w-full

    resize-none

    rounded-[22px]

    border-2
    border-white/40

    bg-black/45

    px-6
    py-6

    text-[17px]
    font-semibold
    leading-[1.7]
    text-white

    outline-none

    backdrop-blur-md

    placeholder:text-white/65

    transition-[border-color,background-color,box-shadow]
    duration-300
    ease-out

    hover:border-purple-200

    hover:shadow-[
      0_0_4px_rgba(255,255,255,0.95),
      0_0_10px_rgba(216,180,254,0.95),
      0_0_22px_rgba(168,85,247,0.82),
      0_0_34px_rgba(124,58,237,0.40),
      inset_0_0_10px_rgba(168,85,247,0.08)
    ]

    focus:border-white

    focus:bg-black/55

    focus:shadow-[
      0_0_5px_rgba(255,255,255,1),
      0_0_12px_rgba(216,180,254,1),
      0_0_28px_rgba(168,85,247,0.95),
      0_0_44px_rgba(124,58,237,0.60),
      inset_0_0_14px_rgba(168,85,247,0.12)
    ]
  `;

  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden

        border-t
        border-white/[0.06]

        bg-black

        px-5
        py-24

        sm:px-8

        lg:px-12
        lg:py-32
      "
    >
      {/* SECTION BACKGROUND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -left-52
          top-20

          h-[34rem]
          w-[34rem]

          rounded-full

          bg-[radial-gradient(circle,rgba(124,58,237,0.18),rgba(79,70,229,0.07)_45%,transparent_72%)]

          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -right-52
          bottom-0

          h-[32rem]
          w-[32rem]

          rounded-full

          bg-[radial-gradient(circle,rgba(79,70,229,0.16),rgba(59,130,246,0.06)_45%,transparent_72%)]

          blur-[130px]
        "
      />

      <div
        className="
          relative
          z-10

          mx-auto

          grid
          max-w-[1500px]

          items-center

          gap-16

          lg:grid-cols-[0.82fr_1.18fr]
          lg:gap-20

          xl:gap-28
        "
      >
        {/* LEFT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            x: -34,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-[620px]"
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <Sparkles
              size={16}
              strokeWidth={1.7}
              className="text-purple-300"
              aria-hidden="true"
            />

            <p
              className="
                font-mono
                text-[11px]
                font-bold
                uppercase
                tracking-[0.28em]

                text-purple-300
              "
            >
              {copy.eyebrow}
            </p>
          </div>

          <h2
            className="
              mt-7
              max-w-[600px]

              font-heading
              text-[52px]
              font-black
              leading-[0.98]
              tracking-[-0.06em]

              text-white

              sm:text-[64px]

              lg:text-[68px]

              xl:text-[76px]
            "
          >
            {copy.line1}
            <br />
            {copy.line2}{" "}

            <span
              className="
                bg-gradient-to-r
                from-purple-300
                via-violet-400
                to-indigo-400

                bg-clip-text
                text-transparent
              "
            >
              {copy.accent}
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-[580px]

              text-[18px]
              font-medium
              leading-[1.8]

              text-white/65

              sm:text-[19px]
            "
          >
            {copy.description}
          </p>

          <div className="mt-10">
            <p
              className="
                font-mono
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]

                text-white/35
              "
            >
              {copy.direct}
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="
                group

                mt-3

                inline-flex
                items-center
                gap-3

                text-[18px]
                font-semibold

                text-white

                transition-colors
                duration-300

                hover:text-purple-200
              "
            >
              <span
                className="
                  grid
                  h-11
                  w-11

                  place-items-center

                  rounded-full

                  border
                  border-white/[0.14]

                  bg-white/[0.05]

                  text-purple-200

                  transition-[border-color,background-color,box-shadow]
                  duration-300

                  group-hover:border-purple-400/35
                  group-hover:bg-purple-500/[0.10]

                  group-hover:shadow-[
                    0_0_25px_-8px_rgba(139,92,246,0.8)
                  ]
                "
              >
                <Mail
                  size={19}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <span className="break-all">
                {profile.email}
              </span>

              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="
                  opacity-40

                  transition-[transform,opacity]
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:opacity-100
                "
              />
            </a>
          </div>

          <div
            className="
              mt-10

              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={socialButtonClass}
            >
              <Github
                size={28}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={socialButtonClass}
            >
              <Linkedin
                size={28}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className={socialButtonClass}
            >
              <Mail
                size={28}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}

        <motion.div
          initial={{
            opacity: 0,
            x: 34,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.85,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative

            mx-auto

            w-full
            max-w-[780px]
          "
        >
          {/* OUTER GLOW */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -inset-7

              rounded-[45px]

              bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.10),rgba(139,92,246,0.22)_35%,rgba(59,130,246,0.08)_55%,transparent_75%)]

              blur-[50px]

              opacity-65
            "
          />

          {/* CARD */}

          <div
            className="
              relative

              overflow-hidden

              rounded-[34px]

              border
              border-white/25

              bg-[#090912]

              shadow-[
                inset_0_1px_0_rgba(255,255,255,0.16),
                0_0_4px_rgba(255,255,255,0.28),
                0_0_28px_-12px_rgba(168,85,247,0.45),
                0_34px_100px_-42px_rgba(0,0,0,0.95)
              ]
            "
          >
            {/* PNG BACKGROUND */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                inset-0

                bg-[url('/contact-bg.webp')]
                bg-cover
                bg-center
                bg-no-repeat

                opacity-100
              "
            />

            {/* LESS DARK OVERLAY */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                inset-0

                bg-[linear-gradient(135deg,rgba(3,3,10,0.42),rgba(8,7,20,0.32)_45%,rgba(3,3,10,0.48))]
              "
            />

            {/* COLOR BOOST */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                inset-0

                bg-[radial-gradient(circle_at_18%_16%,rgba(99,102,241,0.24),transparent_35%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.19),transparent_31%),radial-gradient(circle_at_52%_85%,rgba(217,70,239,0.16),transparent_35%)]
              "
            />

            {/* LIGHT REFLECTION */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                inset-0

                bg-[radial-gradient(circle_at_65%_-5%,rgba(255,255,255,0.14),transparent_34%)]
              "
            />

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="
                relative
                z-10

                px-6
                py-8

                sm:px-9
                sm:py-10

                lg:px-11
                lg:py-12
              "
            >
              <div className="mb-8 text-center">
                <p
                  className="
                    font-mono
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]

                    text-purple-200/90
                  "
                >
                  {copy.message}
                </p>

                <h3
                  className="
                    mt-3

                    font-heading
                    text-[30px]
                    font-bold
                    tracking-[-0.045em]

                    text-white

                    sm:text-[35px]
                  "
                >
                  {copy.start}
                </h3>
              </div>

              <div className="space-y-5">
                {/* NAME */}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="sr-only"
                  >
                    {copy.name}
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder={copy.namePlaceholder}
                    className={inputClass}
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="contact-email"
                    className="sr-only"
                  >
                    {copy.email}
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                {/* MESSAGE */}

                <div className="relative">
                  <label
                    htmlFor="contact-message"
                    className="sr-only"
                  >
                    {copy.messageLabel}
                  </label>

                  <textarea
                    id="contact-message"
                    required
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    placeholder={copy.messagePlaceholder}
                    rows={9}
                    className={textareaClass}
                  />
                </div>
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="
                  group/button

                  relative

                  mt-6

                  flex
                  h-[64px]
                  w-full

                  items-center
                  justify-center
                  gap-3

                  overflow-hidden

                  rounded-2xl

                  border-2
                  border-white/55

                  bg-white

                  px-6

                  font-heading
                  text-[17px]
                  font-bold
                  tracking-[-0.025em]

                  text-black

                  shadow-[
                    0_0_3px_rgba(255,255,255,0.6),
                    0_16px_38px_-22px_rgba(255,255,255,0.5)
                  ]

                  transition-[border-color,box-shadow]
                  duration-300

                  hover:border-purple-200

                  hover:shadow-[
                    0_0_5px_rgba(255,255,255,1),
                    0_0_14px_rgba(216,180,254,0.95),
                    0_0_30px_rgba(168,85,247,0.75)
                  ]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0

                    translate-y-full

                    bg-gradient-to-r
                    from-purple-500
                    via-violet-500
                    to-indigo-500

                    transition-transform
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]

                    group-hover/button:translate-y-0
                  "
                />

                <span
                  className="
                    relative
                    z-10

                    transition-colors
                    duration-300

                    group-hover/button:text-white
                  "
                >
                  {copy.send}
                </span>

                <Send
                  size={19}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="
                    relative
                    z-10

                    transition-colors
                    duration-300

                    group-hover/button:text-white
                  "
                />
              </button>

              <p
                className="
                  mt-4

                  text-center

                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.16em]

                  text-white/45
                "
              >
                {copy.mailHint}
              </p>
            </form>
          </div>
        </motion.div>
      </div>

      {/* FOOTER BOTTOM */}

      <div
        className="
          relative
          z-10

          mx-auto
          mt-24

          flex
          max-w-[1500px]

          items-center
          justify-between

          border-t
          border-white/[0.07]

          pt-8

          text-white/30
        "
      >
        <p
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.18em]
          "
        >
          Aliberk Olukkaya · 2026
        </p>

        <a
          href="#top"
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.18em]

            transition-colors
            duration-300

            hover:text-purple-300
          "
        >
          {copy.back}
        </a>
      </div>
    </footer>
  );
}
