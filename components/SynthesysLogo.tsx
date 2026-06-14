/**
 * Synthesys brand mark — v4
 *
 * White container · Indigo→Mint gradient S · Corner precision marks
 *
 * Design:
 *  - The S uses the same indigo→mint gradient as the hero text on the site
 *  - Two L-shaped corner marks at top-right (indigo) and bottom-left (mint)
 *    echo the S start/end colors and give the mark structure beyond the letter
 *  - Clean, no effects, no glow — the geometry does the work
 */

interface LogoMarkProps {
  size?: number
  className?: string
}

const S_PATH =
  'M 72 20 C 72 11,52 8,36 12 C 16 16,12 34,26 43 C 36 50,64 50,74 57 C 88 66,84 84,68 88 C 56 92,28 90,28 80'

export function LogoMark({ size = 40, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Synthesys"
      className={className}
    >
      <defs>
        {/* S gradient — flows along the path direction: indigo at start, mint at end */}
        <linearGradient
          id="syn-s-grad"
          x1="72" y1="20"
          x2="28" y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#5B7CFA" />
          <stop offset="100%" stopColor="#2DE2C0" />
        </linearGradient>

        {/* Clip everything to the rounded container */}
        <clipPath id="syn-clip">
          <rect width="100" height="100" rx="20" />
        </clipPath>
      </defs>

      {/* ── Container ─────────────────────────────── */}
      {/* White fill */}
      <rect width="100" height="100" rx="20" fill="#FFFFFF" />
      {/* Subtle border so the white mark reads on a white page */}
      <rect
        width="100" height="100" rx="20"
        stroke="#DDE1EA" strokeWidth="1.5" fill="none"
      />

      {/* ── All inner elements clipped to container ─ */}
      <g clipPath="url(#syn-clip)">

        {/* ── S lettermark ─────────────────────────── */}
        <path
          d={S_PATH}
          stroke="url(#syn-s-grad)"
          strokeWidth="10.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/*
         * ── Geometric accent marks ───────────────────
         *
         * Top-right corner mark — indigo (#5B7CFA)
         * Sits at the S start point corner; color echoes gradient start
         *
         * Bottom-left corner mark — mint (#2DE2C0)
         * Sits at the S end point corner; color echoes gradient end
         *
         * Each is a simple L-path with miter join = sharp 90° angle
         */}

        {/* Top-right: down from (84,16) then left */}
        <path
          d="M 84 30 L 84 16 L 70 16"
          stroke="#5B7CFA"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />

        {/* Bottom-left: up from (16,84) then right */}
        <path
          d="M 16 70 L 16 84 L 30 84"
          stroke="#2DE2C0"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />

      </g>
    </svg>
  )
}

interface WordmarkProps {
  size?: number
  textColor?: string
}

export function LogoWordmark({ size = 36, textColor }: WordmarkProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: Math.round(size * 0.33),
        lineHeight: 1,
      }}
    >
      <LogoMark size={size} />
      <span
        style={{
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          fontWeight: 700,
          fontSize: Math.round(size * 0.5),
          letterSpacing: '-0.02em',
          color: textColor ?? 'var(--text-primary)',
        }}
      >
        Synthesys
      </span>
    </span>
  )
}
