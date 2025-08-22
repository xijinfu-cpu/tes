import React from 'react';

export default function BreakingNews() {
  const base = import.meta.env.BASE_URL || '/';
  return (
    <div>
      <h2 className="font-bold mb-4">Breaking News</h2>
      <img className="w-full rounded-md" height={300} src={`${base}images/news.jpg`} />
      <div className="text-[#AFADA9] text-sm leading-[1.15rem] mt-2">
        <p>
        Dengan penuh kebahagiaan, kami mengundang sahabat, teman, dan kerabat tercinta 
        untuk merayakan hari bahagia kami. Kehadiran Anda akan menambah keberkahan dalam 
        pernikahan kami, karena momen ini tak akan lengkap tanpa doa dan dukungan dari 
        orang-orang yang kami cintai. Kami berharap dapat berbagi kebahagiaan ini dengan 
        Anda, yang telah bersama kami dalam setiap langkah perjalanan hidup ini.
        </p>
        <p className="mt-2">
        Kami memohon doa restu dari Anda, agar perjalanan kami ke depan selalu dilimpahi 
        berkah, kebahagiaan, dan cinta. Kehadiran Anda bukan hanya sebuah kebahagiaan bagi 
        kami, tetapi juga doa yang sangat berarti dalam langkah awal kehidupan baru kami 
        sebagai pasangan. Semoga hari ini menjadi kenangan indah yang akan kami simpan sepanjang hidup.
        </p>
      </div>
    </div>
  );
}
