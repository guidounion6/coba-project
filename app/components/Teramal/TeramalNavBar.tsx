'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const TeramalNavBar = () => {

    const router = useRouter()
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2E2E2E] px-10 py-3">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 text-[#FFFFFF]">
                    <div className="size-4">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3./2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h2 className="text-[#FFFFFF] text-lg font-bold leading-tight tracking-[-0.015em]">Teramal</h2>
                </div>
                <div className="flex items-center gap-9">
                    {["Living Room", "Bedroom", "Kitchen", "Office", "Outdoor"].map((item) => (
                        <a key={item} className="text-[#FFFFFF] text-sm font-medium leading-normal" href="#">{item}</a>
                    ))}
                </div>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <label className="flex flex-col min-w-40 !h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    </div>
                </label>
                <div className="flex gap-2">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2E2E2E] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] hover:scale-105 hover:bg-[#454545]"
                    onClick={() => router.push('/')}
                    >
                        <span className="truncate">Inicio</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default TeramalNavBar