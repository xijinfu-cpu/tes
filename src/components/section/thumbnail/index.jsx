import React from 'react';
import DetailInfo from '../detail-info';

const TagItem = ({ title }) => {
  return (
    <li className="bg-[#4D4D4D] py-1 px-2 rounded-xl text-xs text-white">
      {title}
    </li>
  );
};

export default function Thumbnail() {
  const [isOpenDetail, setIsOpenDetail] = React.useState(false);
  const base = import.meta.env.BASE_URL || '/';

  if (isOpenDetail) {
    return <DetailInfo />;
  }
  return (
    <div className="min-h-screen bg-thumbnail bg-contain bg-no-repeat flex flex-col justify-end">
      <div className="pb-10  pt-2 bg-gradient-to-b from-transparent via-black to-black">
        <div className="px-5 mb-10 space-y-2">
          <img
            src={`${base}images/NIKAHFIX.webp`}
            alt="NIKAHFIX"
            width={56}
            height={15}
          />
          <div>
            <h1 className="font-bold text-3xl leading-none">
              Fatma & Slamet: <br />
              Sebelum Hari H
            </h1>
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <span className="bg-[#E50913] text-xs text-white rounded-md px-2 py-1">
                Coming Soon
              </span>
              <p className="text-sm">17 Agustus 2025</p>
            </div>
          </div>
          <div>
            <ul className="flex gap-2 items-center">
              <TagItem title="#romantic" />
              <TagItem title="#getmarried" />
              <TagItem title="#family" />
              <TagItem title="#documenter" />
            </ul>
          </div>
        </div>
        <div className="w-full text-center  ">
          <svg
            className="w-6 h-6 mx-auto mb-2 animate-bounce"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
            ></path>
          </svg>
          <button
            onClick={() => setIsOpenDetail(true)}
            className="uppercase w-full text-xl font-semibold"
          >
            See The Detail
          </button>
        </div>
      </div>
    </div>
  );
}
