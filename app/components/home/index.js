"use client";
import Banner from "./banner";
import data from "./data.json";

const Components = () => {

  return (
    <>
      <Banner
        heading={data?.banner?.heading}
        subHeading={data.banner.subHeading}
        content={data.banner.content}
        bannerImage={data.banner.image}
      />
      </div>
    </>
  );
};

export default Components;
