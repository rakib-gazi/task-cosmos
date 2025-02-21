import { BsPersonRaisedHand } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
const OurImpact = () => {
  const {darkTheme} = useContext(AuthContext);
  return (
    <div className="my-12 px-4">
      <h1 className={`${darkTheme ? ' text-white' : 'text-btm-footer'} font-bold text-3xl`}>
        Our Impact
      </h1>
      <div className="divider divider-neutral"></div>
      <div className="bg-footer rounded-3xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-20  px-8 py-16 shadow-md">
        <div className="flex flex-col justify-center items-center">
        <BsPersonRaisedHand className="text-6xl text-nav" />
          <h1 className="text-4xl font-extrabold text-nav pt-2">7870+</h1>
          <p className="text-base font-medium text-nav py-2 text-center">
          Volunteers raised their hands to help
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <FaUsers  className="text-6xl text-nav"/>
          <h1 className="text-4xl font-extrabold text-nav pt-2">1200+</h1>
          <p className="text-base font-medium text-nav py-2 text-center">
          Volunteers deployed
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <MdOutlineDocumentScanner className="text-6xl text-nav"/>
          <h1 className="text-4xl font-extrabold text-nav pt-2">400+</h1>
          <p className="text-base font-medium text-nav py-2 text-center">
          completed partner projects
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <FaHandshake  className="text-6xl text-nav"/>
          <h1 className="text-4xl font-extrabold text-nav pt-2">382+</h1>
          <p className="text-base font-medium text-nav py-2 text-center">Partners</p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <FaMapLocationDot className="text-6xl text-nav"/>
          <h1 className="text-4xl font-extrabold text-nav pt-2">40+</h1>
          <p className="text-base font-medium text-nav py-2 text-center">
          States, Territories, and Districts Represented by Volunteers
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <MdOutlineVolunteerActivism className="text-6xl text-nav"/>
          <h1 className="text-4xl font-extrabold text-nav pt-2">60000+</h1>
          <p className="text-base font-medium text-nav py-2 text-center">
          Estimated hours volunteered in 2023/2024
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default OurImpact;
