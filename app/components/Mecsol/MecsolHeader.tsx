
const MecsolHeader = () => (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8ecf3] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0e141b]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">Heavy Machine Global</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          {['Inicio'].map((item) => (
            <a key={item} className="text-[#0e141b] text-sm font-medium leading-normal" href="#">
              {item}
            </a>
          ))}
        </nav>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1556ac] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Contactanos</span>
        </button>
        
      </div>
    </header>
  );

  export default MecsolHeader
  