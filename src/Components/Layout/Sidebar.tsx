import React, { useState } from "react";
import profile from "../../assets/logos/profile.svg";
import faq from "../../assets/logos/faq.svg";
import clipboard from "../../assets/logos/clipboard.svg";
import notebook from "../../assets/logos/notebook.svg";
import graph from "../../assets/logos/graph.svg";
import fileIcon from "../../assets/logos/frame.svg";
import userProfileIcon from "../../assets/logos/user.svg";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = ({ name }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={`fixed w-[106px] h-screen`}>
      <div className={`w-[76px]  h-[100%] flex flex-col items-center `} style={{ boxShadow: ' 3px 7px 33px -18px rgba(102,102,102,0.53)' }}>
        <img
          src={profile}
          alt="profile"
          className="h-[33.14px] w-[33.14px] mt-[10.1px]"
        /> ,,,
        {/*  icons */}
        <div className="mt-[10vh] w-full flex flex-col items-center">
          <img src={faq} alt="faq" className="p-[8px]" />
          <img src={clipboard} alt="clipboard" className="p-[8px]" />
          <img src={notebook} alt="notebook" className="p-[8px]" />
          <img src={graph} alt="graph" className="p-[8px]" />
        </div>
        <div >
          <div className="demo bg-white w-[70px] h-[101px] mt-10 flex items-center justify-center relative left-[20%] rounded-r-[20px]" style={{ boxShadow: ' 3px 7px 33px -18px rgba(102,102,102,0.53)' }}>
            <IoIosArrowForward  onClick={handleToggle} className=" ml-[50px]" />
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="">
          <img src={fileIcon} alt="file" className="p-[8px]" />
          <img
            src={userProfileIcon}
            alt="userProfileIcon"
            className="p-[8px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
