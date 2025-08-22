import React from 'react';

export default function Bridegroom() {
  const base = import.meta.env.BASE_URL || '/';
  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-2">
        Bride and Groom
      </h2>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <img
            src={`${base}images/fatmaa.jpeg`}
            className="w-full rounded-md"
            height={164}
            alt="Fatmawati"
          />
          <div>
            <h4 className="text-sm text-white font-medium mt-2">Fatmawati</h4>
            <p className="text-[#A3A1A1] text-xs leading-4 mt-2">
              Putri dari Bapak Suyadi &amp; Ibu Parjinem
            </p>
          </div>
        </div>
        <div>
          <img
            src={`${base}images/slamett.jpeg`}
            className="w-full rounded-md"
            height={164}
            alt="Slamet Riyadi"
          />
          <div>
            <h4 className="text-sm text-white font-medium mt-2">Slamet Riyadi</h4>
            <p className="text-[#A3A1A1] text-xs leading-4 mt-2">
              Putra dari Bapak Arpa &amp; Ibu Hasiri
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
