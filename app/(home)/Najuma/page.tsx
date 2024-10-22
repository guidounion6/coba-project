import NajumaAbout from '@/app/components/Najuma/NajumaAbout';
import NajumaContact from '@/app/components/Najuma/NajumaContact';
import NajumaFooter from '@/app/components/Najuma/NajumaFooter';
import NajumaHeader from '@/app/components/Najuma/NajumaHeader';
import NajumaService from '@/app/components/Najuma/NajumaService';
import React from 'react';

const NajumaPage = () => (
  <div className="bg-white text-foreground">
    <nav className='bg-blue-600 shadow-md'>
      <div className='container mx-auto my-auto flex justify-between items-center py-4'>
        <h1 className="text-xl font-bold">Heavy Mining Machines</h1>
        <button className='bg-white text-neutral-950 px-4 py-2 rounded-lg shadow-md'>Contact Us</button>
      </div>
    </nav>
    <NajumaHeader />
    <NajumaAbout />
    <NajumaService/>
    <NajumaContact />
    <NajumaFooter />
  </div>
);

export default NajumaPage;