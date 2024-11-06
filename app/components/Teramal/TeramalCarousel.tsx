import React from 'react'

const TeramalCarousel = () => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {[
                { title: "Oakwood Dining Table", imageUrl: "https://cdn.usegalileo.ai/stability/df3393bb-12d5-4b80-bd18-575e4fe6562b.png" },
                { title: "Leather Lounge Chair", imageUrl: "https://cdn.usegalileo.ai/stability/a9ce084c-6a9d-4ecb-95ab-0050df9985a2.png" },
                { title: "Walnut Sideboard", imageUrl: "https://cdn.usegalileo.ai/stability/62fae0ef-baed-4482-92fb-79375fb50593.png" },
                { title: "Linen Sofa", imageUrl: "https://cdn.usegalileo.ai/stability/e5c4ab7e-e327-4610-8bb7-355d8a436846.png" }
            ].map((item, index) => (
                <div key={index} className="flex flex-col gap-3 pb-3">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                    <div>
                        <p className="text-[#FFFFFF] text-base font-medium leading-normal">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeramalCarousel