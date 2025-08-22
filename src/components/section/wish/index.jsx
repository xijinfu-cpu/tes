import React from 'react';

function getInviteeName() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('to');
  if (!raw) return ''; // kalau tidak ada ?to= biarkan kosong
  return decodeURIComponent(raw.replace(/\+/g, ' '));
}

export default function WishSection() {
  const invitee = getInviteeName();

  return (
    <div>
      {/* Google Maps GPS */}
      <h2 className="text-lg leading-2 text-white font-bold mb-2">
        Our Location
      </h2>
      <div className="mb-2 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.65456043869!2d106.82577493014824!3d-6.1769763347988995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1754703547733!5m2!1sid!2sid"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Pernikahan"
        ></iframe>
      </div>
      <a
        href="https://goo.gl/maps/XXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline block w-full mb-4"
      >
        Lihat Lokasi
      </a>

      {/* Judul tetap */}
      <h2 className="text-lg leading-2 text-white font-bold mb-2">
        Wish for the couple
      </h2>

      {/* Form kirim ucapan via WhatsApp */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value || invitee;
          const message = e.target.message.value;
          if (!name || name.length < 3 || !message) return;
          const text = `Untuk: ${name}\n\n${message}`;
          const whatsappURL = `https://wa.me/62895404778800?text=${encodeURIComponent(text)}`;
          window.open(whatsappURL, '_blank');
        }}
        className="mt-4 space-y-4"
      >
        <div className="space-y-1">
          <label>Name</label>
          <input
            name="name"
            defaultValue={invitee} // otomatis isi dari URL ?to=
            className="rounded-lg w-full focus:outline-none px-2 py-1 text-black"
          />
        </div>
        <div className="space-y-1">
          <label>Message</label>
          <textarea
            name="message"
            className="rounded-lg w-full focus:outline-none px-2 py-1 text-black"
            rows={4}
          ></textarea>
        </div>
        <button type="submit" className="w-full py-2 bg-red-600 text-white font-bold rounded-lg">Send</button>
      </form>

    </div>
  );
}
