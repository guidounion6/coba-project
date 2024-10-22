import Image from "next/image";
import mineria from '../../../public/assets/icons/icono pala.png'
import camion from '../../../public/assets/icons/icono camion.png'
import servicio from '../../../public/assets/icons/customer-service.png'


const NajumaService = () => (
    <section className='bg-white py-10 my-2'>
        <div className='container mx-auto my-auto text-center'>
            <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
            <div className='container mx-auto my-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className="p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105">
                    <Image
                        src={camion}
                        alt="Service 1"
                        width={200}
                        height={200}
                        className="w-25 h-25 mx-auto"
                    />
                    <h3 className="text-xl font-bold mb-2">Maquinaria Minera</h3>
                    <p className="text-lg">Descubra nuestra gama de máquinas de minería pesada diseñadas para brindar eficiencia y durabilidad.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105">
                    <Image
                        src={mineria}
                        alt="Service 2"
                        width={200}
                        height={200}
                        className="w-25 h-25 mx-auto" />
                    <h3 className="text-xl font-bold mb-2">Ingeniería de suelos</h3>
                    <p className="text-lg">Conozca nuestras soluciones de ingeniería de suelos que garantizan la estabilidad y sostenibilidad en las operaciones mineras.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105">
                    <Image
                        src={servicio}
                        alt="Service 3"
                        width={200}
                        height={200}
                        className="w-25 h-25 mx-auto" />
                    <h3 className="text-xl font-bold mb-2">Servicios de consultoría</h3>
                    <p className="text-lg">Obtenga asesoramiento experto y servicios de consultoría para optimizar sus procesos mineros.</p>
                </div>
            </div>
        </div>
    </section>
);

export default NajumaService