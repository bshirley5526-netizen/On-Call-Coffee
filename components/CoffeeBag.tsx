interface CoffeeBagProps {
  name: string
  origin: string
  roast: string
  bagColor: string
  foldColor: string
}

export default function CoffeeBag({ name, origin, roast, bagColor, foldColor }: CoffeeBagProps) {
  return (
    <svg viewBox="0 0 100 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80px', height: '118px' }}>
      {/* Bag body */}
      <rect x="8" y="26" width="84" height="116" rx="5" fill={bagColor} />

      {/* Top fold */}
      <rect x="8" y="14" width="84" height="18" rx="3" fill={foldColor} />
      <line x1="8" y1="20" x2="92" y2="20" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" />
      <line x1="8" y1="26" x2="92" y2="26" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" />

      {/* Degassing valve */}
      <circle cx="50" cy="9" r="4.5" fill={foldColor} stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
      <circle cx="50" cy="9" r="2.2" fill="rgba(0,0,0,0.12)" />

      {/* Label */}
      <rect x="13" y="42" width="74" height="86" rx="2" fill="rgba(255,255,255,0.38)" />

      {/* Brand name */}
      <text x="50" y="60" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="rgba(255,255,255,0.95)" letterSpacing="2.5" fontFamily="sans-serif">ON CALL</text>
      <text x="50" y="69" textAnchor="middle" fontSize="4.2" fill="rgba(255,255,255,0.7)" letterSpacing="1.8" fontFamily="sans-serif">COFFEE CO.</text>

      {/* Divider */}
      <line x1="23" y1="75" x2="77" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" />

      {/* Coffee name */}
      <text x="50" y="90" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.97)" letterSpacing="-0.3" fontFamily="sans-serif">{name.toUpperCase()}</text>

      {/* Origin */}
      <text x="50" y="101" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,0.75)" letterSpacing="1.8" fontFamily="sans-serif">{origin.toUpperCase()}</text>

      {/* Divider */}
      <line x1="23" y1="108" x2="77" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" />

      {/* Roast level */}
      <text x="50" y="120" textAnchor="middle" fontSize="4.2" fill="rgba(255,255,255,0.65)" letterSpacing="1.5" fontFamily="sans-serif">{roast.toUpperCase()}</text>
    </svg>
  )
}
