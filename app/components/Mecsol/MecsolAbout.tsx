const MecsolAbout = () => (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dae6] bg-[#f8fafb] p-4 flex-col">
        <div className="text-[#0e141b]">
          {/* SVG for the Globe */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="..." />
          </svg>
        </div>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em]">About Us</h2>
      </div>
    </div>
  );

  
  export default MecsolAbout