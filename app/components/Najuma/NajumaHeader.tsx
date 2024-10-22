import Button from "@/app/UI/Button";
import Image from "next/image";
import NajumaLogo from '../../../public/assets/img/Logos/Najuma-Logo.png'


const NajumaHeader = () => (
  <header className='bg-blue-500 container'>
    <div className='mx-auto my-auto text-center flex justify-between items-center'>
      <Image
        alt='Logo de najuma'
        src={NajumaLogo}
        height={130}
        width={130}
      />
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold my-4">Explore nuestras máquinas de minería pesada</h2>
        <p className="text-lg mb-4">Descubra las últimas innovaciones en tecnología minera e ingeniería de suelos.</p>
      </div>
      <div>
        <Button text={'Ver más'}
        />
      </div>
    </div>
  </header>
);
export default NajumaHeader