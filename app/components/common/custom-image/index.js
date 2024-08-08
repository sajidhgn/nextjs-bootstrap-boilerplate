import React from "react";
import Image from "next/image";

function CustomImage(props) {
  const { src, width, height, alt, ...rest } = props;

  const shouldUsePlaceholder = width >= 40 && height >= 40;

  return (
    <Image
      src={src}
      width={width || 0}
      height={height || 0}
      alt={alt || src}
      {...(shouldUsePlaceholder && { blurDataURL: src, placeholder: "blur" })}
      sizes={"100vw"}
      {...rest}
    />
  );
}

export default CustomImage;