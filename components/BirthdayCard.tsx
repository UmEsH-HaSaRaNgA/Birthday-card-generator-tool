import React, { forwardRef } from 'react';
import { CardData } from '../types';

interface BirthdayCardProps extends CardData {}

const BirthdayCard = forwardRef<HTMLDivElement, BirthdayCardProps>((props, ref) => {
  const { 
    greeting, mainEvent, name, bestWishes, recipientLine1, recipientLine2,
    cheers, batch, department, imageUrl
  } = props;

  return (
    <div 
      ref={ref} 
      className="bg-slate-900 w-full h-full text-white p-8 flex flex-col justify-between overflow-hidden relative"
    >
        {/* Blurred Circles Background */}
        <div className="absolute top-4 right-8 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-10 blur-lg"></div>

      <div className="text-center z-10">
        <p className="text-yellow-400 text-sm tracking-widest uppercase">{greeting}</p>
        <h1 className="text-5xl font-['Satisfy'] text-white my-2">{mainEvent}</h1>
        <p className="inline-block bg-blue-500 px-6 py-2 rounded-lg shadow-lg font-bold text-2xl text-white my-2 uppercase">{name}</p>
      </div>

      <div className="relative flex justify-center items-center my-4 z-10">
        <div className="p-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-2xl">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden">
             {/* CRITICAL FIX: crossOrigin="anonymous" is required for html2canvas to work with external images */}
             <img 
              src={imageUrl} 
              alt={name} 
              crossOrigin="anonymous"
              className="w-full h-full object-cover" 
             />
          </div>
        </div>
      </div>

      <div className="text-center z-10 space-y-2">
        <p className="text-gray-200 text-sm font-light uppercase tracking-wide">{bestWishes}</p>
        <p className="font-bold text-lg tracking-wide uppercase">{recipientLine1}</p>
        <p className="text-gray-300 text-xs">{recipientLine2}</p>
        <p className="text-yellow-400 text-4xl font-['Satisfy'] py-1">{cheers}</p>
        <div className="inline-block px-5 py-1 bg-yellow-500 rounded-full text-black text-sm font-semibold shadow-md">
          {batch}
        </div>
        <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-4">{department}</p>
      </div>
    </div>
  );
});

export default BirthdayCard;