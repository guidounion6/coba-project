import Image from "next/image";

import image from '../../../public/assets/img/Fondos/Najuma1.jpg'

const NajumaAbout = () => (
  <section className='container grid grid-cols-1 md:grid-cols-2 bg-white mt-2'>
    <div className='mx-2'>
      <Image
        src={image}
        alt="Heavy Mining Machines"
        height={500}
        width={500}
        className="w-full rounded-lg shadow-md"
      />
    </div>
    <div className="flex flex-col justify-center text-center">
      <h2 className="text-3xl font-bold mb-4 text-center">Conocenos</h2>
      <p className="text-lg mb-4">Nos especializamos en proporcionar máquinas de minería pesada y soluciones de ingeniería de suelos de primera línea.</p>
      <p className="text-lg">es trabajar a la par de nuestro clientes, teniendo como
        única mira la proporción de un servicio de calidad, otorgando a sus accionistas una
        rentabilidad creciente y sostenible y a sus empleados la posibilidad de desarrollar sus
        competencias profesionales, en un entorno de trabajo agradable, adecuado a la política
        de seguridad implementada, y respetando el medio ambiente.</p>
    </div>
  </section>
);

export default NajumaAbout