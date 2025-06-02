import { Menu } from "@nextui-org/react";
import About from "./_components/About";
import { Banner1 } from "./_components/Banner1";
import HomeBanner from "./_components/HomeBanner";
import SwiperFeedback from "./_components/SwiperFeedback";
import { FoodMenu } from "./_components/FoodMenu";
import { Company } from "./_components/Company";

const page = () => {
  return (
    <div className=" ">
      <HomeBanner />
      <FoodMenu />
      <Banner1 />
      <About />
      <SwiperFeedback />
      <Company/>
    </div>
  );
};

export default page;
