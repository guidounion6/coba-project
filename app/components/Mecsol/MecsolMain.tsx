import MecsolAbout from "./MecsolAbout";
import MecsolHero from "./MecsolHero";
import MecsolProducts from "./MecsolProducts";

const MecsolMain = () => (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <MecsolHero />
        <MecsolProducts />
        <MecsolAbout />
      </div>
    </div>
  );
  

  export default MecsolMain