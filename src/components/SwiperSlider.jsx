import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import medical from "../assets/medical.png";
import social from "../assets/social.png";
import school from "../assets/school.png";

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const SwiperSlider = () => {
  return (
    <div className="bg-footer pt-20 md:pt-32 py-12 md:py-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper container mx-auto "
      >
        <SwiperSlide>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4">
              <div className="flex flex-col justify-center">
                <h1 className="text-base  lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-btm-footer pt-8 lg:pt-0">
                  Making a Difference Through Medical Volunteering
                </h1>
                <p
                  className="text-black
                 text-xs lg:text-base font-semibold pt-8"
                >
                  Medical volunteers deliver healthcare, educate communities,
                  and provide vital support during emergencies, improving lives
                  with compassion and commitment.
                </p>
                <div className="mt-6 mb-0 md:mb-12 lg:md-0">
                  <Link
                    className="bg-btm-footer text-white font-bold px-6 py-3 rounded-lg "
                    to="/all-volunteer-need-posts"
                  >
                    All Volunteer Needs Post
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img src={medical} alt="" className="hidden md:block h-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4">
              <div className="flex flex-col justify-center">
                <h1 className="text-base  lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-btm-footer pt-8 lg:pt-0">
                  Empowering Communities Through Social Volunteering
                </h1>
                <p
                  className="text-black
                 text-xs lg:text-base font-semibold pt-8"
                >
                  Social volunteers support community programs, assist
                  vulnerable groups, promote education, and address social
                  issues, fostering positive change and improving lives through
                  dedication and compassion.
                </p>
                <div className="mt-6 mb-0 md:mb-12 lg:md-0">
                  <Link
                    className="bg-btm-footer text-white font-bold px-6 py-3 rounded-lg"
                    to="/all-volunteer-need-posts"
                  >
                    All Volunteer Needs Post
                  </Link>
                </div>
              </div>
              <div className="flex justify-center ">
                <img src={social} alt="" className="hidden md:block h-full w-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4">
              <div className="flex flex-col justify-center">
                <h1 className="text-base  lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-btm-footer pt-8 lg:pt-0">
                  Transforming Lives Through Education Volunteering
                </h1>
                <p
                  className="text-black
                 text-xs lg:text-base font-semibold pt-8"
                >
                  Education volunteers mentor students, teach skills, support
                  schools, and promote lifelong learning, empowering individuals
                  and communities with knowledge and opportunities for a
                  brighter future.
                </p>
                <div className="mt-6 mb-0 md:mb-12 lg:md-0">
                  <Link
                    className="bg-btm-footer text-white font-bold px-6 py-3 rounded-lg"
                    to="/all-volunteer-need-posts"
                  >
                    All Volunteer Needs Post
                  </Link>
                </div>
              </div>
              <div className="flex justify-center  ">
                <img src={school} alt="" className="hidden md:block h-full w-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
