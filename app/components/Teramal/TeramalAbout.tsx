import React from 'react'
import TeramalCard from './TeramalCard'

const TeramalAbout = () => {
    return (
        <div>
            <h2 className="text-[#FFFFFF] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Sobre Nosotros
            </h2>
            <div className="p-4">
            <TeramalCard />
            <TeramalCard />
            <TeramalCard />
            <TeramalCard />
            </div>
        </div>
    )
}

export default TeramalAbout