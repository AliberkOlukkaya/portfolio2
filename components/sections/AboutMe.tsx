"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Circle } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export default function AboutMe({ locale }: { locale: Locale }) {
  const isTr = locale === "tr";

  const photo: Variants = {
    hidden: {
      opacity: 0,
      x: -40,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const content: Variants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-black
        px-6 py-28
        md:px-10 md:py-32
        lg:px-16
      "
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-[16%] top-1/2
          h-[38rem] w-[38rem]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(124,58,237,0.17),rgba(79,70,229,0.08)_40%,transparent_72%)]
          blur-[130px]
        "
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{
          staggerChildren: 0.16,
        }}
        className="
          relative z-10
          mx-auto grid max-w-7xl
          items-center gap-16
          lg:grid-cols-[0.92fr_1.08fr]
          xl:gap-24
        "
      >
        {/* PHOTO */}
        <motion.div
          variants={photo}
          className="flex justify-center lg:justify-start"
        >
          <div
            className="
              group relative
              w-full max-w-[510px]
              xl:max-w-[540px]
            "
          >
            {/* Outer glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -inset-12
                rounded-[52px]
                bg-[radial-gradient(circle_at_45%_50%,rgba(139,92,246,0.34),rgba(99,102,241,0.18)_38%,transparent_72%)]
                blur-[60px]
                opacity-95
              "
            />

            {/* Frame glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -inset-[7px]
                rounded-[40px]
                bg-gradient-to-br
                from-purple-400/35
                via-violet-500/15
                to-indigo-400/35
                blur-lg
              "
            />

            {/* Photo */}
            <div
              className="
                relative rounded-[34px]
                bg-gradient-to-br
                from-purple-300/90
                via-violet-500/70
                to-indigo-400/90
                p-[3px]
                shadow-[0_0_32px_rgba(168,85,247,0.25),0_0_75px_rgba(99,102,241,0.15)]
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[31px]
                  bg-black
                "
              >
                <Image
                  src="/profile.png"
                  alt="Aliberk Olukkaya"
                  width={950}
                  height={1188}
                  priority
                  className="
                    aspect-[4/5]
                    h-auto w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-[1.012]
                  "
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={content}
          className="max-w-3xl"
        >
          {/* Main heading */}
          <h2
            className="
              font-heading
              text-[44px]
              font-black
              leading-none
              tracking-[-0.055em]
              text-white

              sm:text-[52px]
              md:text-[60px]
            "
          >
            {isTr ? "Hakkımda" : "About Me"}
          </h2>

          {/* Accent line */}
          <div
            className="
              mt-5 h-[3px] w-20
              rounded-full
              bg-gradient-to-r
              from-purple-400
              via-violet-500
              to-indigo-500
              shadow-[0_0_14px_rgba(139,92,246,0.65)]
            "
          />

          {/* Terminal line */}
          <div
            className="
              mt-8 flex items-center gap-3
              font-mono text-[16px]
            "
          >
            <span className="font-bold text-purple-400">
              $
            </span>

            <span className="font-semibold text-white/85">
              whoami
            </span>
          </div>

          {/* Paragraph 1 */}
          <p
            className="
              mt-9
              max-w-3xl

              font-body
              text-[19px]
              font-medium
              leading-[1.75]
              tracking-[-0.015em]
              text-white/70

              md:text-[21px]
            "
          >
            {isTr ? "Bilgisayar Mühendisliği mezunu Aliberk Olukkaya'yım. Pratik yapay zekâ ürünleri, veri sistemleri ve güvenilir yazılımlar geliştirmeye odaklanıyorum." : "I'm Aliberk Olukkaya, a Computer Engineering graduate focused on building practical AI-powered products, data systems, and reliable software."}
          </p>

          {/* Paragraph 2 */}
          <p
            className="
              mt-7
              max-w-3xl

              font-body
              text-[19px]
              font-medium
              leading-[1.75]
              tracking-[-0.015em]
              text-white/70

              md:text-[21px]
            "
          >
            {isTr ? "Kavramları yalnızca teoride tutmak yerine gerçek projeler geliştirerek öğrenmeyi tercih ediyorum. Çalışmalarım Python, makine öğrenmesi, derin öğrenme, backend sistemleri, veri tabanları, API'ler ve modern web arayüzlerini kapsıyor." : "I prefer learning by building real projects rather than keeping concepts purely theoretical. My work spans Python, machine learning, deep learning, backend systems, databases, APIs, and modern web interfaces."}
          </p>

          {/* Paragraph 3 */}
          <p
            className="
              mt-7
              max-w-3xl

              font-body
              text-[19px]
              font-medium
              leading-[1.75]
              tracking-[-0.015em]
              text-white/70

              md:text-[21px]
            "
          >
            {isTr ? "Benim için önemli olan yalnızca çalışan bir ürün ortaya koymak değil; sürdürülebilir, faydalı ve büyümeye hazır yazılımlar geliştirmek. Güncel odağım yapay zekâ mühendisliği, veri mühendisliği ve Python geliştirme." : "What matters to me is not only making something work, but building software that is maintainable, useful, and ready to grow. My current direction is centered around AI engineering, data engineering, and Python development."}
          </p>

          {/* Bottom focus/status */}
          <div
            className="
              mt-10 flex flex-wrap
              items-center gap-x-6 gap-y-4
              border-t border-white/[0.08]
              pt-7
            "
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute inline-flex
                    h-full w-full
                    animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-50
                  "
                />

                <Circle
                  size={10}
                  fill="currentColor"
                  className="relative text-emerald-400"
                  aria-hidden="true"
                />
              </span>

              <span
                className="
                  font-heading
                  text-[14px]
                  font-bold
                  text-white
                "
              >
                {isTr ? "Yapay zekâ ve veri rollerine açığım" : "Open to AI & Data roles"}
              </span>
            </div>

            <span className="hidden h-4 w-px bg-white/15 sm:block" />

            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/35
              "
            >
              AI Engineering · Data Engineering · Python
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
