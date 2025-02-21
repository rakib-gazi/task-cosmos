import dhaka from "../assets/dhaka.jpg";
import ctg from "../assets/ctg.jpg";
import sylhet from "../assets/sylhet.jpg";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";

const CityActivities = () => {
  const { darkTheme } = useContext(AuthContext);
  return (
    <div className="container mx-auto pt-24">
      <div className="my-12 px-4">
        <h1
          className={`${
            darkTheme ? " text-white" : "text-btm-footer"
          } font-bold text-3xl`}
        >
          City Wise Activities
        </h1>
        <div className="divider divider-neutral"></div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 bg-gray-100 rounded-3xl p-6 my-6">
            <div className="col-span-1 lg:col-span-3 ">
              <img
                src={dhaka}
                alt=""
                className="h-80  w-full rounded-3xl object-cover"
              />
            </div>
            <div className="col-span-1 lg:col-span-6">
              <h2 className="text-btm-footer font-bold text-2xl pb-6">Dhaka</h2>
              <p className="text-black">
                As the bustling capital of Bangladesh, Dhaka offers a wide array
                of volunteer opportunities to address the needs of its diverse
                and dense population. Health-related volunteer initiatives
                include free medical camps in underprivileged areas, where
                volunteers assist doctors, distribute medicines, and raise
                awareness about hygiene and preventive care. Educational
                volunteering is also prominent, with NGOs providing free
                tutoring for street children and running literacy programs in
                slums. <br />
                <br />
                For animal welfare enthusiasts, organizations work to rescue
                stray animals, provide medical care, and promote responsible pet
                ownership. Social service volunteers can engage in community
                clean-up drives, help distribute food during Ramadan, or provide
                support to disaster-affected communities, ensuring quick
                rehabilitation.
                <br />
                <br />
                Volunteering in Dhaka not only improves the quality of life for
                its residents but also offers volunteers a chance to connect
                with grassroots efforts and witness the resilience of the people
                firsthand.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 bg-gray-100 rounded-3xl p-6 my-6">
            <div className="col-span-1 lg:col-span-6 order-2 lg:order-none">
              <h2 className="text-btm-footer font-bold text-2xl pb-6">
                Chittagong
              </h2>
              <p className="text-black">
                Known for its port and scenic beauty, Chittagong provides
                volunteers with opportunities that blend urban and rural
                outreach. Health volunteers can participate in mobile medical
                clinics that travel to remote areas, providing essential
                healthcare services. Educational initiatives in Chittagong focus
                on empowering children in fishing villages by teaching them
                basic literacy and vocational skills.
                <br />
                <br />
                Animal welfare organizations here are active in marine
                conservation efforts, with programs aimed at protecting
                endangered sea turtles along the coastline. Volunteers can
                assist in beach clean-ups, nest monitoring, and awareness
                campaigns for local communities. Social service volunteering
                often involves assisting families affected by flooding,
                organizing relief programs, and supporting women’s empowerment
                initiatives.
                <br />
                <br />
                Chittagong’s volunteer scene offers a perfect mix of adventure
                and meaningful contribution to the community.
              </p>
            </div>
            <div className="col-span-1 lg:col-span-3 order-1 lg:order-none">
              <img src={ctg} alt="" className="h-80 w-full rounded-3xl" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 bg-gray-100 rounded-3xl p-6 my-6">
            <div className="col-span-1 lg:col-span-3">
              <img src={sylhet} alt="" className="h-80 w-full rounded-3xl" />
            </div>
            <div className="col-span-1 lg:col-span-6">
              <h2 className="text-btm-footer font-bold text-2xl pb-6">
                Sylhet
              </h2>
              <p className="text-black">
                Sylhet, known for its tea gardens and natural beauty, offers
                unique volunteer opportunities rooted in the region’s culture
                and environment. Health volunteers are often engaged in
                providing medical aid to tribal communities and rural areas,
                focusing on maternal and child health.
                <br />
                <br />
                Education-based volunteering includes setting up schools for
                children in tea estates and organizing English language and
                computer literacy classes. Animal welfare efforts in Sylhet are
                often tied to wildlife conservation, as the region is home to
                diverse flora and fauna. Volunteers can participate in forest
                conservation programs and work with local authorities to protect
                endangered species.
                <br />
                <br />
                Social service volunteers help implement water sanitation
                projects in flood-prone areas and assist in community
                development programs. Sylhet is ideal for volunteers seeking to
                combine scenic beauty with impactful work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityActivities;
