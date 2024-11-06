import TeramalAbout from "@/app/components/Teramal/TeramalAbout";
import TeramalCarousel from "@/app/components/Teramal/TeramalCarousel";
import TeramalContact from "@/app/components/Teramal/TeramalContact";
import TeramalFooter from "@/app/components/Teramal/TeramalFooter";
import TeramalHero from "@/app/components/Teramal/TeramalHero";
import TeramalNavBar from "@/app/components/Teramal/TeramalNavBar";
import React from "react";

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#1A1A1A] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <TeramalNavBar />
        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <TeramalHero />
            <TeramalCarousel />
            <TeramalAbout />     
            <TeramalContact />
            <TeramalFooter />     
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
