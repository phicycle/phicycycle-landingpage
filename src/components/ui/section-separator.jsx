export function SectionSeparator() {
  return (
    <div className="relative py-16">
      <div className="absolute left-1/2 -translate-x-1/2 w-[200px] h-[100px] opacity-30">
        <div className="geometric-box scale-50">
          <div className="geometric-shape" style={{
            animationDuration: '20s',
            opacity: 0.3,
          }}></div>
          <div className="geometric-shape" style={{
            animationDelay: '-10s',
            opacity: 0.2,
            scale: '0.8'
          }}></div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
    </div>
  )
} 