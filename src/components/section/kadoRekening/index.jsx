import React from 'react';

const KadoRekening = () => {
  const base = import.meta.env.BASE_URL || '/';
  const rekeningList = [
    { 
      id: 1, 
      bank: '',
      nomor: '123456789', 
      nama: 'Fatma', 
      logo: `${base}images/Logo_dana_blue.svg.png`
    },
    { 
      id: 2, 
      bank: '', 
      nomor: '123456789', 
      nama: 'Slamet', 
      logo: `${base}images/2560px-Bank_Central_Asia.svg.png` 
    },
    { 
      id: 3, 
      bank: '', 
      nomor: '123456789', 
      nama: 'Slamet', 
      logo: `${base}images/Bank_Mandiri_logo_2016.svg.png` 
    },
  ];

  return (
    <div className="p-2">
      {/* Judul konsisten dengan gaya font di bagian lain */}
      <h3 className="text-white text-lg font-bold mb-2">Send Gifts</h3>

      <p className="mt-2 text-sm text-white leading-relaxed">
      Kami dengan tulus menerima hadiah dari Anda sebagai tanda cinta dan doa. Kehadiran Anda sudah merupakan berkah bagi kami, dan setiap hadiah yang diberikan akan selalu kami hargai. Bagi yang ingin memberikan hadiah melalui transfer, berikut adalah nomor rekening kami:
      </p>

      <div className="flex flex-col items-stretch gap-5 mt-9 w-full">
        {rekeningList.map((rekening) => (
          <div
            key={rekening.id}
            className="flex flex-col items-center border border-gray-200 rounded-lg p-4 w-full text-center shadow-md bg-white"
          >
            <img 
              src={rekening.logo} 
              alt={`${rekening.bank} Logo`} 
              className="w-[135px] h-[40px] mb-1"
            />
            <p className="text-base font-bold text-black">{rekening.nomor}</p>
            <p className="text-xs font-bold text-black">a.n {rekening.nama}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KadoRekening;
