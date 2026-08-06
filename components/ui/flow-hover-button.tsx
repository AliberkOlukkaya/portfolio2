"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type FlowHoverButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: React.ReactNode;
    active?: boolean;
  };

export const Button = React.forwardRef<
  HTMLButtonElement,
  FlowHoverButtonProps
>(
  (
    {
      icon,
      children,
      active = false,
      className,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          `
          group relative isolate flex min-h-[58px]
          w-[300px] shrink-0 cursor-pointer
          items-center justify-center gap-2
          overflow-hidden rounded-[18px] border
          bg-[#f3f0e8] px-6 py-3

          font-heading text-[15px] font-extrabold
          tracking-[-0.025em] text-[#171426]

          shadow-[0_10px_30px_-22px_rgba(139,92,246,0.5)]

          transition-[transform,border-color,box-shadow]
          duration-700
          ease-[cubic-bezier(0.16,1,0.3,1)]

          hover:-translate-y-1
          hover:scale-[1.035]
          hover:border-purple-400
          hover:shadow-[0_20px_45px_-18px_rgba(99,102,241,0.75)]

          active:translate-y-0
          active:scale-[0.99]

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-purple-400
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#090713]

          md:w-full
          `,
          active
            ? `
              border-purple-400
              ring-1 ring-purple-500/30
              shadow-[0_14px_38px_-20px_rgba(139,92,246,0.7)]
            `
            : `
              border-[#d8d2c7]
            `,
          className,
        )}
        {...props}
      >
        {/* Hover sırasında yavaşça beliren mor-mavi yüzey */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-0
            rounded-[inherit]
            bg-gradient-to-br
            from-purple-500
            via-violet-600
            to-indigo-500

            opacity-0
            transition-opacity
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]

            group-hover:opacity-100
          "
        />

        {/* Üst parlaklık */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-8 top-0 z-10
            h-px bg-gradient-to-r
            from-transparent via-white/80 to-transparent
          "
        />

        {icon && (
          <span
            className="
              relative z-20
              transition-colors duration-500
              group-hover:text-white
            "
          >
            {icon}
          </span>
        )}

        <span
          className="
            relative z-20 whitespace-nowrap
            transition-colors duration-500
            group-hover:text-white
          "
        >
          {children}
        </span>

        {/* Aktif proje göstergesi */}
        {active && (
          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute bottom-1.5 left-1/2 z-30
              h-[3px] w-16 -translate-x-1/2 rounded-full
              bg-gradient-to-r
              from-purple-500 via-violet-500 to-indigo-500
            "
          />
        )}
      </button>
    );
  },
);

Button.displayName = "FlowHoverButton";