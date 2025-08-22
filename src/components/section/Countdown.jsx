import React, { useState, useEffect } from 'react';

export default function Countdown({
  targetDate,
  title,
  akadTime,
  resepsiTime,
  locationName,
  locationAddress,
  locationUrl,
  calendarStart,
  calendarEnd,
  calendarTitle,
  calendarDetails,
  showDatePill = true,
}) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const dateLabel = (() => {
    try {
      return new Date(targetDate).toLocaleDateString('id-ID', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    } catch (_) {
      return '';
    }
  })();

  const buildGoogleCalendarUrl = () => {
    if (!calendarStart || !calendarEnd) return null;
    const toCalendarDate = (iso) => {
      try {
        return new Date(iso)
          .toISOString()
          .replace(/[-:]/g, '')
          .replace(/\.\d{3}Z$/, 'Z');
      } catch (_) {
        return '';
      }
    };
    const startStr = toCalendarDate(calendarStart);
    const endStr = toCalendarDate(calendarEnd);
    if (!startStr || !endStr) return null;
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: calendarTitle || title || 'Wedding Day',
      dates: `${startStr}/${endStr}`,
      location: locationName || '',
      details: calendarDetails || '',
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white my-4 space-y-3">
      <h2 className="font-bold mb-4">
        {title || 'Save the Date'}
      </h2>

      {showDatePill && dateLabel && (
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-[#E50913] text-white font-semibold py-2 px-3 rounded-lg">
            <span>{dateLabel}</span>
          </div>
        </div>
      )}

      <div className="bg-black/40 rounded-lg p-3 mx-auto w-fit">
        <div className="flex justify-center items-end gap-3">
          <div className="w-16 bg-[#0f0f0f] rounded-md py-2 text-center">
            <div className="text-lg font-bold">{timeLeft.days || 0}</div>
            <div className="text-xs text-[#AFAFAF]">Hari</div>
          </div>
          <div className="text-[#AFAFAF] text-base"></div>
          <div className="w-16 bg-[#0f0f0f] rounded-md py-2 text-center">
            <div className="text-lg font-bold">{timeLeft.hours || 0}</div>
            <div className="text-xs text-[#AFAFAF]">Jam</div>
          </div>
          <div className="text-[#AFAFAF] text-base"></div>
          <div className="w-16 bg-[#0f0f0f] rounded-md py-2 text-center">
            <div className="text-lg font-bold">{timeLeft.minutes || 0}</div>
            <div className="text-xs text-[#AFAFAF]">Menit</div>
          </div>
          <div className="text-[#AFAFAF] text-base"></div>
          <div className="w-16 bg-[#0f0f0f] rounded-md py-2 text-center">
            <div className="text-lg font-bold">{timeLeft.seconds || 0}</div>
            <div className="text-xs text-[#AFAFAF]">Detik</div>
          </div>
        </div>

        {(akadTime || resepsiTime) && (
          <div className="grid grid-cols-2 gap-8 text-left mt-2">
            <div>
              <div className="text-[#AFAFAF] text-sm">Akad</div>
              <div className="text-white text-base font-medium">{akadTime || '-'}</div>
            </div>
            <div>
              <div className="text-[#AFAFAF] text-sm">Resepsi</div>
              <div className="text-white text-base font-medium">{resepsiTime || '-'}</div>
            </div>
          </div>
        )}
      </div>

      {buildGoogleCalendarUrl() && (
        <a
          href={buildGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-2 bg-[#E50913] text-white font-bold rounded-lg text-center"
        >
          Save to Calendar
        </a>
      )}
    </div>
  );
}
