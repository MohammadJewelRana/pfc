import About from "./_components/About";
import { Banner1 } from "./_components/Banner1";
import HomeBanner from "./_components/HomeBanner";
import SwiperFeedback from "./_components/SwiperFeedback";

const page = () => {
  return (
    <div>
      <HomeBanner />
      <Banner1 />
      <About />
      <SwiperFeedback />
    </div>
  );
};

export default page;
