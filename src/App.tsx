import { useState, useEffect } from 'react'

// Low-poly SVG background mesh
function PolyBackground() {
  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 900"
    >
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f2540" />
          <stop offset="100%" stopColor="#1a3a5c" />
        </linearGradient>
      </defs>
      <rect width="800" height="900" fill="url(#g1)" />
      {/* Low poly triangles */}
      <polygon points="0,0 200,80 0,200" fill="rgba(107,58,32,0.12)" />
      <polygon points="200,80 400,0 300,180" fill="rgba(42,122,106,0.09)" />
      <polygon points="400,0 800,0 600,120" fill="rgba(74,122,181,0.08)" />
      <polygon points="600,120 800,0 800,200" fill="rgba(107,58,32,0.07)" />
      <polygon points="0,200 200,80 300,280" fill="rgba(74,122,181,0.1)" />
      <polygon points="200,80 300,180 300,280" fill="rgba(42,122,106,0.06)" />
      <polygon points="300,180 600,120 500,320" fill="rgba(107,58,32,0.09)" />
      <polygon points="600,120 800,200 700,350" fill="rgba(42,122,106,0.1)" />
      <polygon points="800,200 800,400 700,350" fill="rgba(107,58,32,0.08)" />
      <polygon points="0,200 300,280 150,420" fill="rgba(42,122,106,0.07)" />
      <polygon points="300,280 500,320 350,480" fill="rgba(107,58,32,0.1)" />
      <polygon points="500,320 700,350 600,500" fill="rgba(74,122,181,0.09)" />
      <polygon points="700,350 800,400 800,550" fill="rgba(42,122,106,0.08)" />
      <polygon points="0,420 150,420 100,600" fill="rgba(107,58,32,0.06)" />
      <polygon points="150,420 350,480 250,620" fill="rgba(74,122,181,0.08)" />
      <polygon points="350,480 600,500 450,680" fill="rgba(42,122,106,0.09)" />
      <polygon points="600,500 800,550 750,720" fill="rgba(107,58,32,0.07)" />
      <polygon points="0,600 100,600 50,780" fill="rgba(74,122,181,0.07)" />
      <polygon points="100,600 250,620 200,800" fill="rgba(42,122,106,0.08)" />
      <polygon points="250,620 450,680 350,850" fill="rgba(107,58,32,0.09)" />
      <polygon points="450,680 750,720 600,900" fill="rgba(74,122,181,0.07)" />
      <polygon points="750,720 800,720 800,900" fill="rgba(42,122,106,0.06)" />
      <polygon points="0,780 200,800 0,900" fill="rgba(107,58,32,0.08)" />
      <polygon points="200,800 350,850 300,900" fill="rgba(74,122,181,0.07)" />
    </svg>
  )
}

// Coffee cup icon
function CoffeeIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  )
}

function HomeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function ShopIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function ShiftIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function DiamondIcon({ size = 14, color = '#7dd3fc' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1.5">
      <polygon points="12 2 22 9 12 22 2 9" />
    </svg>
  )
}

function SipIcon({ size = 14, color = '#4ab89e' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    </svg>
  )
}

function TrophyIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="8 21 12 21 16 21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 4H17L15 12a5 5 0 0 1-6 0L7 4Z" />
      <path d="M7 4H4l1 5a3 3 0 0 0 2 2" />
      <path d="M17 4h3l-1 5a3 3 0 0 1-2 2" />
    </svg>
  )
}

// Countdown timer hook
function useCountdown(targetMinutes: number) {
  const [seconds, setSeconds] = useState(targetMinutes * 60)
  useEffect(() => {
    const id = setInterval(() => setSeconds(s => s > 0 ? s - 1 : targetMinutes * 60), 1000)
    return () => clearInterval(id)
  }, [targetMinutes])
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return h > 0 ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`
}

// Leaderboard data
const leaderboardData = [
  { rank: 1, name: 'BrewMaster_9', score: 48200, role: 'Head Barista', badge: '👑' },
  { rank: 2, name: 'SipQueen', score: 41500, role: 'Senior Barista', badge: '🥈' },
  { rank: 3, name: 'CaffeineKing', score: 38900, role: 'Barista', badge: '🥉' },
  { rank: 4, name: 'EspressoElite', score: 31200, role: 'Barista', badge: '' },
  { rank: 5, name: 'LatteLogic', score: 27800, role: 'Junior Barista', badge: '' },
  { rank: 6, name: 'FoamPhoenix', score: 24400, role: 'Barista', badge: '' },
  { rank: 7, name: 'RoastRider', score: 19700, role: 'Trainee', badge: '' },
  { rank: 8, name: 'BrewBolt', score: 16200, role: 'Trainee', badge: '' },
  { rank: 9, name: 'SteamSurge', score: 12300, role: 'Trainee', badge: '' },
  { rank: 10, name: 'BeanBoss', score: 9800, role: 'Trainee', badge: '' },
]

export default function App() {
  const [activeNav, setActiveNav] = useState('home')
  const cafeTimer = useCountdown(60)
  const workerTimer = useCountdown(120)

  const rankColors: Record<number, string> = {
    1: '#f5c842',
    2: '#c0c0c0',
    3: '#cd7f32',
  }

  return (
    <div className="min-h-screen relative poly-bg poly-mesh">
      <PolyBackground />

      {/* Main content */}
      <div className="relative z-10 max-w-lg mx-auto px-0 pb-8 min-h-screen flex flex-col">

        {/* ── TOP BAR ── */}
        <div className="sticky top-0 z-30" style={{ background: 'rgba(15,37,64,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(196,135,90,0.2)' }}>
          {/* Profile row */}
          <div className="flex items-center gap-3 px-4 pt-4 pb-3">
            {/* Profile box */}
            <div className="profile-box rounded-lg p-2.5 flex items-center gap-2.5 flex-shrink-0">
              <div
                className="rounded-md flex items-center justify-center"
                style={{
                  width: 38, height: 38,
                  background: 'linear-gradient(135deg, #8b5233 0%, #6b3a20 50%, #3b1f0e 100%)',
                  border: '1px solid rgba(196,135,90,0.5)',
                  boxShadow: '2px 2px 0px rgba(59,31,14,0.8), inset 0 1px 0 rgba(245,230,211,0.1)',
                }}
              >
                <CoffeeIcon size={18} color="#d4a574" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#f5e6d3', lineHeight: 1.2 }}>BrewSip_User</div>
                <div style={{ fontSize: 10, color: 'rgba(212,165,116,0.65)', fontWeight: 500 }}>Head Barista</div>
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Balance pills */}
            <div className="flex flex-col gap-1.5">
              <div className="balance-pill rounded-md px-2.5 py-1.5 flex items-center gap-1.5">
                <SipIcon size={12} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, color: '#4ab89e' }}>12,840</span>
                <span style={{ fontSize: 9, color: 'rgba(212,165,116,0.5)', fontWeight: 500 }}>SIP</span>
              </div>
              <div className="balance-pill rounded-md px-2.5 py-1.5 flex items-center gap-1.5">
                <DiamondIcon size={10} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, color: '#7dd3fc' }}>3,200</span>
                <span style={{ fontSize: 9, color: 'rgba(212,165,116,0.5)', fontWeight: 500 }}>GEM</span>
              </div>
            </div>
          </div>

          {/* Nav bar */}
          <div className="flex items-center justify-around px-2 pb-2">
            {[
              { id: 'home', label: 'Home', icon: <HomeIcon size={18} /> },
              { id: 'shop', label: 'Shop', icon: <ShopIcon size={18} /> },
              { id: 'shift', label: 'Shift', icon: <ShiftIcon size={18} /> },
              { id: 'cafe', label: 'Cafe', icon: <CoffeeIcon size={18} /> },
            ].map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setActiveNav(id)}
                className={`nav-btn ${activeNav === id ? 'active' : ''}`}
              >
                <span style={{ opacity: activeNav === id ? 1 : 0.6 }}>{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Active nav indicator strip */}
          <div className="flex px-2" style={{ gap: 4 }}>
            {['home', 'shop', 'shift', 'cafe'].map((id, i) => (
              <div
                key={id}
                style={{
                  flex: 1,
                  height: 2,
                  background: activeNav === id
                    ? 'linear-gradient(90deg, #c4875a, #4ab89e)'
                    : 'rgba(196,135,90,0.1)',
                  borderRadius: 1,
                  transition: 'background 0.2s',
                  clipPath: i === 0 ? 'polygon(4px 0, 100% 0, 100% 100%, 0 100%)' : undefined,
                }}
              />
            ))}
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="flex flex-col gap-4 px-4 pt-5">

          {/* ── CARD 1: Cafe Shops ── */}
          <div className="card-3d rounded-xl overflow-hidden">
            {/* Section header */}
            <div className="section-header">
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: '#f5e6d3', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                ☕ Cafe Shops
              </span>
            </div>

            <div className="p-4 flex flex-col gap-3">
              {/* Menu Shop */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className="rounded-lg flex items-center justify-center"
                    style={{ width: 36, height: 36, background: 'rgba(107,58,32,0.4)', border: '1px solid rgba(196,135,90,0.3)' }}
                  >
                    <ShopIcon size={16} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: '#f5e6d3' }}>Menu Shop</div>
                    <div style={{ fontSize: 11, color: 'rgba(212,165,116,0.6)' }}>Limited daily items</div>
                  </div>
                </div>
                <div className="timer-badge rounded-lg px-3 py-1.5 text-right">
                  <div style={{ fontSize: 9, color: 'rgba(74,184,158,0.7)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Resets in</div>
                  <div className="countdown" style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700 }}>{cafeTimer}</div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(196,135,90,0.2), transparent)' }} />

              {/* Worker Shop */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className="rounded-lg flex items-center justify-center"
                    style={{ width: 36, height: 36, background: 'rgba(42,122,106,0.3)', border: '1px solid rgba(74,184,158,0.25)' }}
                  >
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#4ab89e" strokeWidth="1.8">
                      <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: '#f5e6d3' }}>Worker Shop</div>
                    <div style={{ fontSize: 11, color: 'rgba(212,165,116,0.6)' }}>Staff-exclusive items</div>
                  </div>
                </div>
                <div className="timer-badge rounded-lg px-3 py-1.5 text-right">
                  <div style={{ fontSize: 9, color: 'rgba(74,184,158,0.7)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Resets in</div>
                  <div className="countdown" style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700 }}>{workerTimer}</div>
                </div>
              </div>

              {/* Enter button */}
              <button
                className="w-full mt-1 rounded-lg py-2.5"
                style={{
                  background: 'linear-gradient(135deg, rgba(107,58,32,0.6), rgba(139,82,51,0.5))',
                  border: '1px solid rgba(196,135,90,0.4)',
                  color: '#f5e6d3',
                  fontFamily: 'var(--font-display)',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  boxShadow: '2px 2px 0px rgba(59,31,14,0.5)',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.transform = 'translate(-1px, -1px)'
                  t.style.boxShadow = '3px 3px 0px rgba(59,31,14,0.6)'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.transform = ''
                  t.style.boxShadow = '2px 2px 0px rgba(59,31,14,0.5)'
                }}
              >
                Browse Shops →
              </button>
            </div>
          </div>

          {/* ── CARD 2: Shifts ── */}
          <div className="card-3d rounded-xl overflow-hidden">
            <div className="section-header">
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: '#f5e6d3', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                ⏱ Shifts
              </span>
            </div>

            <div className="p-4">
              {/* Current shift */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(212,165,116,0.6)', fontWeight: 500, marginBottom: 4 }}>Current Shift</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: '#f5e6d3' }}>No Shifts.</div>
                </div>
                <div
                  className="rounded-lg px-3 py-1.5 flex items-center gap-2"
                  style={{ background: 'rgba(15,37,64,0.6)', border: '1px solid rgba(196,135,90,0.2)' }}
                >
                  <span className="pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(196,135,90,0.5)', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, color: 'rgba(196,135,90,0.7)', letterSpacing: '0.05em' }}>INACTIVE</span>
                </div>
              </div>

              {/* Shift stats mini */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                {[
                  { label: 'Today', val: '0h 0m' },
                  { label: 'This Week', val: '0h 0m' },
                  { label: 'Total Shifts', val: '0' },
                ].map(({ label, val }) => (
                  <div
                    key={label}
                    className="rounded-lg p-2 text-center"
                    style={{ background: 'rgba(15,37,64,0.5)', border: '1px solid rgba(196,135,90,0.12)' }}
                  >
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: '#d4a574' }}>{val}</div>
                    <div style={{ fontSize: 9, color: 'rgba(212,165,116,0.5)', fontWeight: 500, marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Start shift button */}
              <button
                className="w-full mt-3 rounded-lg py-2.5"
                style={{
                  background: 'linear-gradient(135deg, rgba(42,122,106,0.5), rgba(26,58,92,0.6))',
                  border: '1px solid rgba(74,184,158,0.35)',
                  color: '#a8dfd0',
                  fontFamily: 'var(--font-display)',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  boxShadow: '2px 2px 0px rgba(42,122,106,0.3)',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.transform = 'translate(-1px, -1px)'
                  t.style.boxShadow = '3px 3px 0px rgba(42,122,106,0.4)'
                  t.style.background = 'linear-gradient(135deg, rgba(42,122,106,0.65), rgba(26,58,92,0.75))'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.transform = ''
                  t.style.boxShadow = '2px 2px 0px rgba(42,122,106,0.3)'
                  t.style.background = 'linear-gradient(135deg, rgba(42,122,106,0.5), rgba(26,58,92,0.6))'
                }}
              >
                ▶ Start Shift
              </button>
            </div>
          </div>

          {/* ── CARD 3: Cafe Stats ── */}
          <div className="card-3d rounded-xl overflow-hidden">
            <div className="section-header">
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: '#f5e6d3', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                ☕ Cafe Stats
              </span>
            </div>

            <div className="p-4">
              {[
                { label: 'Cafe ID', val: '#BREW-4821', color: '#7dd3fc' },
                { label: 'Cafe Owner', val: 'BrewMaster_9', color: '#f5e6d3' },
                { label: 'Cafe Balance', val: '₿ 284,500 Sip', color: '#4ab89e' },
                { label: 'Cafe Networth', val: '₿ 1,240,800 Sip', color: '#d4a574' },
              ].map(({ label, val, color }) => (
                <div key={label} className="stat-row">
                  <span style={{ fontSize: 12, color: 'rgba(212,165,116,0.6)', fontWeight: 500 }}>{label}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color }}>{val}</span>
                </div>
              ))}

              {/* Decorative poly strip */}
              <div
                className="mt-4 rounded overflow-hidden flex"
                style={{ height: 6, gap: 2 }}
              >
                {['rgba(107,58,32,0.7)', 'rgba(74,122,181,0.7)', 'rgba(42,122,106,0.7)', 'rgba(196,135,90,0.7)', 'rgba(74,122,181,0.5)', 'rgba(107,58,32,0.5)'].map((bg, i) => (
                  <div key={i} style={{ flex: i % 2 === 0 ? 2 : 1, background: bg }} />
                ))}
              </div>
            </div>
          </div>

          {/* ── CARD 4: Leaderboard ── */}
          <div className="card-3d rounded-xl overflow-hidden">
            <div className="section-header">
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: '#f5e6d3', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                🏆 Leaderboard
              </span>
            </div>

            {/* Tab row */}
            <div className="flex px-4 pt-3 gap-2">
              {['Weekly', 'All Time'].map((tab, i) => (
                <button
                  key={tab}
                  style={{
                    padding: '4px 14px',
                    borderRadius: 6,
                    fontSize: 11,
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    border: '1px solid',
                    transition: 'all 0.15s',
                    background: i === 0 ? 'linear-gradient(135deg, rgba(107,58,32,0.5), rgba(139,82,51,0.4))' : 'transparent',
                    borderColor: i === 0 ? 'rgba(196,135,90,0.4)' : 'rgba(196,135,90,0.15)',
                    color: i === 0 ? '#f5e6d3' : 'rgba(212,165,116,0.5)',
                  }}
                >
                  {tab}
                </button>
              ))}
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
                <TrophyIcon size={12} />
                <span style={{ fontSize: 10, color: 'rgba(212,165,116,0.5)', fontWeight: 500 }}>Top 10</span>
              </div>
            </div>

            {/* Table header */}
            <div
              className="flex items-center px-4 py-2 mt-2"
              style={{ borderBottom: '1px solid rgba(196,135,90,0.15)', background: 'rgba(15,37,64,0.4)' }}
            >
              <span style={{ width: 32, fontSize: 9, color: 'rgba(212,165,116,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>#</span>
              <span style={{ flex: 1, fontSize: 9, color: 'rgba(212,165,116,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Worker</span>
              <span style={{ fontSize: 9, color: 'rgba(212,165,116,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Sip Earned</span>
            </div>

            {/* Rows */}
            <div className="px-2 pb-3">
              {leaderboardData.map(({ rank, name, score, role, badge }) => (
                <div
                  key={rank}
                  className="lb-row flex items-center px-2 py-2.5 rounded-lg"
                >
                  {/* Rank */}
                  <div style={{ width: 28, textAlign: 'center' }}>
                    {badge ? (
                      <span style={{ fontSize: 14 }}>{badge}</span>
                    ) : (
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: 'rgba(212,165,116,0.4)' }}>
                        {rank}
                      </span>
                    )}
                  </div>

                  {/* Avatar dot */}
                  <div
                    className="rounded-md flex items-center justify-center mr-2.5 flex-shrink-0"
                    style={{
                      width: 28, height: 28,
                      background: `linear-gradient(135deg, hsl(${(rank * 37) % 360}, 40%, 30%), hsl(${(rank * 37 + 60) % 360}, 30%, 20%))`,
                      border: '1px solid rgba(196,135,90,0.2)',
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#f5e6d3',
                    }}
                  >
                    {name[0]}
                  </div>

                  {/* Name + role */}
                  <div className="flex-1 min-w-0">
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: rankColors[rank] || '#f5e6d3', lineHeight: 1.2 }}>
                      {name}
                    </div>
                    <div style={{ fontSize: 9, color: 'rgba(212,165,116,0.5)', fontWeight: 500 }}>{role}</div>
                  </div>

                  {/* Score */}
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: '#4ab89e' }}>
                      {score.toLocaleString()}
                    </div>
                    <div style={{ fontSize: 9, color: 'rgba(74,184,158,0.5)' }}>sip</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              className="px-4 py-2.5 flex items-center justify-between"
              style={{ borderTop: '1px solid rgba(196,135,90,0.12)', background: 'rgba(15,37,64,0.4)' }}
            >
              <span style={{ fontSize: 10, color: 'rgba(212,165,116,0.4)' }}>Your rank: #—</span>
              <span style={{ fontSize: 10, color: 'rgba(74,184,158,0.5)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Resets Sunday</span>
            </div>
          </div>

          {/* Bottom spacer */}
          <div style={{ height: 16 }} />
        </div>
      </div>
    </div>
  )
}
