const MecsolProducts = () => {
    const products = [
      { title: 'Excavators', description: 'Dig, grade, and load with hydraulic power and precision', image: 'https://cdn.usegalileo.ai/sdxl10/ac4c94cf-6e73-4d60-9f74-451c50ef28ec.png' },
      { title: 'Bulldozers', description: 'Push, pull, and clear with rugged strength and agility', image: 'https://cdn.usegalileo.ai/stability/142d9d1b-53d4-4682-a7e0-d4048dcaff62.png' },
      { title: 'Dump Trucks', description: 'Haul and spread with heavy-duty capacity and control', image: 'https://cdn.usegalileo.ai/stability/8e609a1a-e499-49fc-8579-9cfc6d9e6a2f.png' },
      { title: 'Cranes', description: 'Lift, carry, and place with height and reach', image: 'https://cdn.usegalileo.ai/stability/8045d0e1-6f6a-4745-b13f-9f750457732f.png' },
      { title: 'Forklifts', description: 'Move, stack, and store with versatile maneuverability', image: 'https://cdn.usegalileo.ai/sdxl10/02838692-6cea-4ad1-a7bb-04bd0a836f4b.png' },
    ];
  
    return (
      <div className="flex flex-col gap-10 px-4 py-10">
        <h1 className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight">Featured Products</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          {products.map(({ title, description, image }) => (
            <div key={title} className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div>
                <p className="text-[#0e141b] text-base font-medium">{title}</p>
                <p className="text-[#4f6e96] text-sm font-normal">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default MecsolProducts