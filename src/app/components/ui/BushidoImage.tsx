'use client';

import React from 'react';
import Image from 'next/image';
import { MotionDiv } from './MotionDiv';

const BushidoImage = () => {
  return (
    <MotionDiv direction="center">
      <div className="w-full h-full flex items-start pt-0">
        <div className="relative w-full max-w-lg">
          <Image
            src="/assets/images/bushido-categories.webp"
            alt="Bushido - Dans le respect de la tradition japonaise"
            width={600}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </MotionDiv>
  );
};

export default BushidoImage;