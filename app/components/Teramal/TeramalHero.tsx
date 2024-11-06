import React from 'react'

const TeramalHero = () => {
    return (
        <section className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4"
            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("assets/img/Fondos/Teramal.jpeg")' }}>
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Deposito refrigerado de papa</h1>
                <h2 className="text-white text-sm font-normal leading-normal"></h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#6eedc1] hover:scale-105">
                <span className="truncate">Contacto</span>
            </button>
        </section>
    )
}

export default TeramalHero