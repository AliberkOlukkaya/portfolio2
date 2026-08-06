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
      onPointerEnter,
      onPointerLeave,
      onFocus,
      onBlur,
      style,
      ...props
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const gradientOpacity = isHovered ? 1 : active ? 0.1 : 0;

    return (
      <button
        ref={ref}
        type={type}
        onPointerEnter={(event) => {
          setIsHovered(true);
          onPointerEnter?.(event);
        }}
        onPointerLeave={(event) => {
          setIsHovered(false);
          onPointerLeave?.(event);
        }}
        onFocus={(event) => {
          setIsHovered(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setIsHovered(false);
          onBlur?.(event);
        }}
        className={cn(
          "relative isolate flex min-h-[62px] w-[300px] shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[22px] border bg-[#f6f2ea] px-6 py-3 font-heading text-[15px] font-bold tracking-[-0.02em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090713] active:scale-[0.99] md:w-full",
          className,
        )}
        style={{
          ...style,
          color: isHovered ? "#ffffff" : "#171426",

          borderColor: active
            ? "rgba(157, 120, 255, 0.95)"
            : isHovered
              ? "rgba(129, 140, 248, 0.9)"
              : "#d8d2c7",

          boxShadow: isHovered
            ? "0 24px 58px -24px rgba(99, 102, 241, 0.82), 0 10px 24px -18px rgba(157, 120, 255, 0.9)"
            : active
              ? "0 15px 42px -27px rgba(157, 120, 255, 0.9)"
              : "0 10px 30px -24px rgba(139, 92, 246, 0.45)",

          transform: isHovered
            ? "translateY(-4px) scale(1.035)"
            : "translateY(0) scale(1)",

          transition:
            "transform 850ms cubic-bezier(0.16, 1, 0.3, 1), border-color 700ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 850ms cubic-bezier(0.16, 1, 0.3, 1), color 500ms ease",

          transformOrigin: "center",
          willChange: "transform",
        }}
        {...props}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] bg-[linear-gradient(120deg,#9d78ff_0%,#775cf2_48%,#4f67df_100%)]"
          style={{
            opacity: gradientOpacity,
            transition:
              "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
          style={{
            opacity: isHovered ? 0.95 : 0.5,
            transition: "opacity 600ms ease",
          }}
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-[1px] z-[1] rounded-[21px] border border-white/25"
        />

        {icon && (
          <span
            className="relative z-20 flex items-center"
            style={{
              transform: isHovered ? "scale(1.08)" : "scale(1)",
              transition:
                "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {icon}
          </span>
        )}

        <span className="relative z-20 whitespace-nowrap">
          {children}
        </span>

        {active && (
          <>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-1.5 left-1/2 z-30 h-[3px] w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500"
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-5 w-24 -translate-x-1/2 translate-y-3 rounded-full bg-purple-500/30 blur-xl"
            />
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "FlowHoverButton";