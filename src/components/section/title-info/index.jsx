import React from 'react';

export default function TitleInfo() {
  const base = import.meta.env.BASE_URL || '/';
  return (
    <div className="space-y-1">
      <div className="flex gap-2 items-center">
        <img src={`${base}favicon.ico`} alt="logo" width={18} height={18} />
        <span className="text-[#A3A1A1] text-xs mt-0.5 tracking-widest">
          DOCUMENTER
        </span>
      </div>
      <h2 className="text-lg leading-5 text-white font-bold">
        Aku &amp; Kamu : Sebelum Hari H
      </h2>
      <div className="flex gap-1 items-center">
        <span className="text-green-500 mr-2">100% match</span>
        <span className="bg-[#4D4D4D] text-white text-xs px-1 py-0 mr-2 rounded-sm">
          Explict
        </span>
        <span className="text-white mr-2">2025</span>
        <span className="text-white mr-2">1h 26m</span>
        <span>
          <img src={`${base}images/4k-icon.png`} width={16} height={16} alt="4k" />
        </span>
        <span>
          <img src={`${base}images/hd-icon.png`} width={16} height={16} alt="hd" />
        </span>
      </div>
      <div className="bg-[#E50913] py-1 px-2 rounded text-xs text-white font-bold w-fit">
        Coming soon on Sunday, 17 Agustus 2025
      </div>
      <div className="pt-2">
        <p className="text-white text-sm leading-[1.15rem] mb-2">
          Setelah Aku dan Kamu dipertemukan dalam situasi yang tepat, di mana
          keduanya telah siap untuk memulai hubungan bersama, tibalah mereka di
          awal perjalanan baru menuju pernikahan.
        </p>
        <p className="font-bold text-[#AFADA9] text-[10px] leading-[1rem]">
          "Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat
          (kebesaran Allah)" (Q.S Az-Zariyah: 49)
        </p>
      </div>
    </div>
  );
}
