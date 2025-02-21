import Activities from "../components/Activities";
import NewsLetter from "../components/NewsLetter";
import OurImpact from "../components/OurImpact";
import SwiperSlider from "../components/SwiperSlider";
import VolunteerPostHome from "../components/VolunteerPostHome";

const Home = () => {
  return (
    <>
      <SwiperSlider></SwiperSlider>
      <div className="container mx-auto">
        <VolunteerPostHome></VolunteerPostHome>
        <OurImpact></OurImpact>
        <Activities></Activities>
        <NewsLetter></NewsLetter>
      </div>
    </>
  );
};

export default Home;
