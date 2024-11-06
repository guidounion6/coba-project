import React from 'react'

const TeramalCard = () => {
    return (

        <div className="p-4">
            <div className="flex flex-col items-stretch justify-start rounded-xl xl:flex-row xl:items-start">
                <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                        backgroundImage:
                            'url("https://cdn.usegalileo.ai/stability/b4b289a0-bddf-4587-a21a-ced9e548e883.png")',
                    }}
                ></div>
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4">
                    <p className="text-[#FFFFFF] text-lg font-bold leading-tight tracking-[-0.015em]">
                        Summer Collection
                    </p>
                    <div className="flex items-end gap-3 justify-between">
                        <p className="text-[#999999] text-base font-normal leading-normal">
                            Experience the warmth of Scandinavian design
                        </p>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#019863] text-[#FFFFFF] text-sm font-medium leading-normal">
                            <span className="truncate">Ver más...</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeramalCard