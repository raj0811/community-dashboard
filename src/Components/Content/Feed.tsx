import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar";
import Navbar from "../Layout/Navbar";
import UserCard from "../FeedComponents/UserCard";
import GoalSection from "../FeedComponents/GoalSection";
import Tags from "../FeedComponents/Tags";
import { useNavigate } from "react-router-dom";
const Feed = ({ info, user }: any) => {
  const [selected, setSelected] = useState<string>("All");
  const handleButtonClick = (value: string) => {
    setSelected(value);
  };

  return (
    <div className="w-full">
      {/* <Navbar user={user} /> */}
      <div className="flex h-screen ">
        <div className="flex flex-col w-[813px]">
          <span className="text-[20px] w-full flex font-arOneSans">
            Community
          </span>
          <div className="flex mt-4">
            {["All", "Preparation Strategy", "Interview Experience"].map(
              (label) => (
                <button
                  key={label}
                  className={`m-2 border-[1px] rounded-[50px] pl-2 pr-2 ${
                    selected === label
                      ? "border-[#014EE6] text-[#014EE6]"
                      : "border-[#5B5B5B] text-[#5B5B5B]"
                  }`}
                  onClick={() => handleButtonClick(label)}
                >
                  {label}
                </button>
              )
            )}
          </div>

          <div className="flex flex-col w-[723px] mt-4 items-start">
            {info.map((i: any) => (
              <UserCard key={i.id} info={i} user={user} category={selected} />
            ))}
          </div>
        </div>
        <div className="h-full w-[6px] mt-4 bg-gray-300"></div>
        <div
          className="h-full w-[4px] mt-4 ml-1"
          style={{
            background:
              "linear-gradient(to bottom, #9747FF 50%, transparent 50%)",
            backgroundSize: "5px 30px", 
            backgroundRepeat: "repeat-y",
          }}
        ></div>

        <div className="w-full flex flex-col items-center ">
          <GoalSection />
          <Tags />
        </div>
      </div>
      {/* <hr className="my-4 border-gray-300" /> */}
    </div>
  );
};

export default Feed;
