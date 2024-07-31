import React from "react";
import { formatDistance } from "date-fns";
import { IoEyeSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BsArrowUpSquare, BsArrowDownSquare, BsChatSquareText } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const UserCard = ({ info, category,user }: any) => {
  const timeAgo = (date: Date) => {
    const now = new Date();
    let timeString = formatDistance(new Date(date), now, { addSuffix: true });

    // Trim "about" from the result
    if (timeString.startsWith("about ")) {
      timeString = timeString.replace("about ", "");
    }

    return timeString;
  };

  const filterByCategory = (category: string, act: string[]) => {
    if (category === "All") return true;
    if (category === "Preparation Strategy") return act.includes("strategy");
    if (category === "Interview Experience") return act.includes("interview");
    return false;
  };
  const navigate = useNavigate(); // Hook should be called directly in the component

  if (!filterByCategory(category, info.act)) return null;
  


  const handleClick = () => {
    navigate('/profile', { state: { info,user } }); // Use navigate for redirection
  };

  return (
    <div onClick={handleClick} className="w-[683px] border-[1.8px] m-2 rounded-lg p-4 border-[#6398FF] cursor-pointer">
      <div className="flex w-full items-center p-2">
        <div className="bg-[#FC8026] h-[32px] rounded-full w-[32px] flex justify-center items-center">
          <span className="h-full w-full flex items-center justify-center text-[20px] text-white">
            {info.name ? info.name.charAt(0) : "A"}
          </span>
        </div>
        <div className="ml-2 flex flex-col items-start">
          <span className="text-[14px] font-[700]">{info.name}</span>
          <span className="text-[10px] text-gray-600">
            {timeAgo(new Date(info.timeStamp))}
          </span>
        </div>

        <div className="ml-auto m-2 h-full flex items-center">
          <IoEyeSharp className="text-[#BFBFBF]" />
          <span className="pl-2 text-[14px]">{info.views}</span>
        </div>
      </div>
      <div className="flex items-center p-2">
        <GoDotFill className="text-[#014EE6]" />{" "}
        <span className="text-[14px] font-[700]">{info.title}</span>
      </div>

      <div className="line-clamp-2 text-[13px] text-left box-border">
        {info.description}
      </div>

      <div className="flex mt-4 items-center">
        <div className="flex font-[500] items-center text-[12px]">
          <BsArrowUpSquare className="mr-2 text-[#014EE6]" />
          {info.likes}
        </div>

        <div className="mx-4 h-4 border-l border-gray-300"></div>

        <div className="flex font-[500] items-center text-[12px]">
          <BsArrowDownSquare className="mr-2 text-[#014EE6]" />
          {info.dislikes}
        </div>

        <div className="mx-4 h-4 border-l border-gray-300"></div>

        <div className="flex font-[500] items-center text-[12px]">
          <BsChatSquareText className="mr-2 text-[#014EE6]" />
          {info.comments.length}
        </div>
        <span className="ml-2 text-[#FC8026] text-[10px]">
            New Comment {timeAgo(new Date(info.comments[0]?.timeStamp))}
        </span>

        <div className="flex items-center ml-auto">
            {info.act && info.act.map((data:any, index:number)=>(
                <div key={index} className="flex items-center h-[22px] w-[61px] bg-[#FFE39A] m-2 pl-2 pr-2 text-[10px] rounded-[50px] border-[0.5px] border-[#FC8026] text-[#FC8026] ">
                    {data}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
