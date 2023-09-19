import React, { useState, useEffect } from "react";
import Image from "next/image";
import Masonry from "./masonry";
import settings from "@/utils/settings.json";

const ImageGrid = () => {
  const [imageFileNames, setImageFileNames] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      const context = require.context("@/public/images", true);
      setImageFileNames(context.keys());
    };

    loadImages();
  }, []);

  return (
    <>
      <Masonry>
        {imageFileNames.map((fileName, index) => {
          // @ts-ignore : webpack magic
          const imageContext = require.context("@/public/images", true);
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

      {
        isOpen && activeImage && (
          <div className="fixed inset-0 flex items-center cursor-zoom-out justify-center bg-white bg-opacity-75 backdrop-blur-md z-10"
            onClick={() => setIsOpen(false)}>
            <Image
              src={activeImage}
              alt={`Image by ${settings.name}`}
              width={1080}
              height={500}
              className="max-h-screen w-auto md:p-24 p-6"
            />
          </div>
        )
      }
    </>
  );
};

export default ImageGrid;
