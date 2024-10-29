'use client'
import React, { useEffect } from 'react';

import MecsolMain from '@/app/components/Mecsol/MecsolMain';
import MecsolHeader from '@/app/components/Mecsol/MecsolHeader';

const MecsolPage = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Work+Sans:wght@400;500;700;900';
    link.onload = () => (link.rel = 'stylesheet');
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <MecsolHeader />
        <MecsolMain />
      </div>
    </div>
  );
};

export default MecsolPage;