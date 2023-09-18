import React from "react";
import Image from "next/image";
import Masonry from "./masonry";
import setiings from "@/utils/settings.json"

const ImageGrid = () => {
  // @ts-ignore
  const imageContext: RequireContext = require.context("@/public/images", true);
  const imageFileNames: string[] = imageContext.keys();
  console.log(imageFileNames);

  return (
    <Masonry>
      {imageFileNames.map((fileName, index) => {
        const imageSrc = imageContext(fileName).default;
        const altText = `Image ${index} by ${setiings.name}`;

        return (
          <Image
            key={fileName}
            src={imageSrc}
            alt={altText}
            width={500}
            height={500}
            placeholder="blur"
          />
        );
      })}
    </Masonry>
  );
};

export default ImageGrid;
