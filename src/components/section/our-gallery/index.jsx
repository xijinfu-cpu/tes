import React from 'react';

const GalleryItem = ({ src }) => (
  <img
    src={src}
    className="rounded-md hover:scale-105 w-full h-48 object-cover cursor-pointer"
  />
);

export default function OurGallery() {
  const base = import.meta.env.BASE_URL || '/';
  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-4">
        Our Gallery
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <GalleryItem src={`${base}images/1.jpg`} />
        <GalleryItem src={`${base}images/2.jpg`} />
        <GalleryItem src={`${base}images/3.jpg`} />
        <GalleryItem src={`${base}images/4.jpg`} />
        <GalleryItem src={`${base}images/5.jpg`} />
        <GalleryItem src={`${base}images/6.jpg`} />
        <GalleryItem src={`${base}images/7.jpg`} />
        <GalleryItem src={`${base}images/8.jpg`} />
        <GalleryItem src={`${base}images/9.jpg`} />
      </div>
    </div>
  );
}
