
import NajumaAbout from '@/app/components/Najuma/NajumaAbout';
import NajumaContact from '@/app/components/Najuma/NajumaContact';
import NajumaFooter from '@/app/components/Najuma/NajumaFooter';
import NajumaHeader from '@/app/components/Najuma/NajumaHeader';
import NajumaService from '@/app/components/Najuma/NajumaService';


import React from 'react';


const NajumaPage = () => (
  <div className="bg-white text-foreground">
    <nav className='bg-blue-500 shadow-md'>
      <div className='container mx-auto my-auto flex justify-between items-start pt-2'>
        <NajumaHeader />
      </div>
    </nav>
    <NajumaAbout />
    <NajumaService/>
    <NajumaContact />
    <NajumaFooter />
  </div>
);

export default NajumaPage;