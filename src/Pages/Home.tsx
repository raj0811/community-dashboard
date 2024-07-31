import React from "react";
import Sidebar from "../Components/Layout/Sidebar";
import Feed from "../Components/Content/Feed";
import { info, user } from "../Utils/data";
import Navbar from "../Components/Layout/Navbar";

const Home = () => {
  return (
    <div className="">
      {/* <div className="flex">
        <Sidebar name={user.name} />
        <div className="ml-[80px] w-full p-4 ">
          <Navbar user={user} />
        </div>
      </div> */}
      <div className=" w-full p-4">
        <Feed info={info} user={user} />
      </div>
    </div>
  );
};

export default Home;
