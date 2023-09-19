'use client';

import React, { useState } from "react";
import Image from "next/image";
import Masonry from "./masonry";
import settings from "@/utils/settings.json";

const ImageGrid = () => {
  // @ts-ignore
  const imageContext: RequireContext = require.context("@/public/images", true);
  const imageFileNames: string[] = imageContext.keys();

  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div>
      <Masonry>
        {imageFileNames.map((fileName, index) => {
          const imageSrc = imageContext(fileName).default;
          const altText = `Image ${index} by ${settings.name}`;
          return (
            <div key={fileName} onClick={() => {
              setIsOpen(true);
              setActiveImage(imageSrc);
            }}>
              <Image
                className="hover:cursor-zoom-in hover:opacity-90"
                src={imageSrc}
                alt={altText}
                width={1080}
                height={500}
                placeholder="blur"
              />
            </div>
          );
        })}
      </Masonry>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10"
          onClick={() => setIsOpen(false)}>
          <Image
            // @ts-ignore
            src={activeImage}
            alt={`Image by ${settings.name}`}
            width={1080}
            height={500}
            className="max-h-screen w-auto md:p-24 p-6"
          />
        </div>
      )
      }
    </div >
  );
};

export default ImageGrid;
