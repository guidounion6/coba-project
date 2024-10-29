const MecsolHero = () => (
    <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 rounded-xl"
      style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/09f28e3f-78ed-4ece-a68a-04a35291bbec.png")' }}>
      <div className="flex flex-col gap-2 text-left">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">We move the earth</h1>
        <h2 className="text-white text-sm font-normal leading-normal">
          HMG is a global leader in heavy machinery. We help you build, dig, and haul, with the best equipment and services for construction, mining, road building, and more.
        </h2>
      </div>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1556ac] text-[#f8fafb] text-sm font-bold">
        <span className="truncate">Get a quote</span>
      </button>
    </div>
  );

  
  export default MecsolHero