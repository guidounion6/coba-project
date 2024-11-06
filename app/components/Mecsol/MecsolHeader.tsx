'use client'
import { useRouter } from "next/navigation"

import NajumaIcon from '../../../public/assets/icons/Najuma-Tool.svg'
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MecsolHeader = () => {
  const router = useRouter()

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8ecf3] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0e141b]">
        <div className="size-7">
          <Image
            alt='page-logo'
            src={NajumaIcon}
            width={150}
            height={150}
          />
        </div>
        <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">Mecsol</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Button className="text-[#0e141b] text-sm font-medium leading-normal bg-transparent hover:hover:bg-[#2f62a6]" 
          onClick={() => router.push('/')}
          >
            Inicio
          </Button>
        </nav>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1556ac] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:hover:bg-[#2f62a6]"
          onClick={() => router.push('/')}
        >
          <span className="truncate">Contactanos</span>
        </button>
      </div>
    </header>
  )
};

export default MecsolHeader
