const MecsolHero = () => (
  <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 rounded-xl "
    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("assets/img/Fondos/Najuma Fondo.jpeg")' }}>
    <div className="flex flex-col gap-2 text-left">
      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Acercando Soluciones</h1>
      <h2 className="text-white text-sm font-normal leading-normal">
        Mecsol es una compania lider en reparación de maquinaria pesada. Ayudamos a mantener en los mas altos estandares de rendimiento y producción maquinaria de construcción y minería.
      </h2>
    </div>
    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1556ac] text-white text-sm font-bold transition-transform duration-300 hover:scale-105 hover:bg-[#2f62a6]">
      <span className="truncate">Conocenos</span>
    </button>
  </div>
);


export default MecsolHero