import React from "react";
import fire from "../../assets/logos/fire.svg";

const GoalSection = () => {
  return (
    <div className="mt-4 rounded-xl w-[389px] h-[107px] flex bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(252,226,158,1)_0.1%,_rgba(253,232,171,0.25)_90.1%)]">
      <div className="w-full h-full flex">
        <div className="p-4 w-[71.33px] h-full ">
          <img src={fire} alt="fire" className="h-full w-[100%]" />
        </div>
        <div className="flex flex-col justify-evenly">
          <span className="text-left ml-2  flex flex-col text-[16px]">
            Achieve Your Goals with Keep The Streak Alive
          </span>
          <button className="bg-[#FC8026] text-[#FFFFFF] w-[118px] h-[28px] ml-4 rounded-xl text-[12px]">Start Practicing</button>
        </div>
      </div>
    </div>
  );
};

export default GoalSection;
