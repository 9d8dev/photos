import React from "react";
import Image from "next/image";
import Masonry from "./masonry";

const ImageGrid = () => {
  // @ts-ignore
  const imageContext: RequireContext = require.context("@/public/images", true);
  const imageFileNames: string[] = imageContext.keys();
  console.log(imageFileNames);

  return (
    <Masonry>
      {imageFileNames.map((fileName, index) => (
        <Image
          key={index}
          src={imageContext(fileName).default}
          alt={`${index} by bridger tower`}
          width={500}
          height={500}
          placeholder="blur"
        />
      ))}
    </Masonry>
  );
};

export default ImageGrid;
