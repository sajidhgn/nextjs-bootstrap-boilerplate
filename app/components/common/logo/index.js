"use client";
import CustomImage from "../custom-image";
const Logo = (props) => {
  const { width, height } = props;
  return (
    <>
      <CustomImage
        src="/assets/images/logo.svg"
        alt="logo.png"
        width={width ? width : 130}
        height={height ? height : 130}
      />
    </>
  );
};

export default Logo;
