import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Tags = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const tags = ['Interview', 'Strategy', 'Economics', 'Sociology', 'Indian History', 'Sociology', 'Polity', 'Sociology', 'Polity'];

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-[20px] flex flex-col items-center w-[389px]">
      <span className="text-left text-[18px] font-[500] self-start ml-4 mb-4">Tags</span>
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center w-[349px] h-[35px] border-[0.7px] border-gray-400 rounded-lg">
          <FiSearch className="h-[20px] ml-2 w-[20px]" />
          <input
            type="search"
            placeholder="Search for tag"
            className="ml-2 flex-grow outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap w-[315px] justify-evenly mt-4">
        {filteredTags.length > 0 ? (
          filteredTags.map((name, index) => (
            <div key={index} className="m-2 text-[10px] w-[71px] h-[22px] border-[0.5px] border-[#5B5B5B] text-[#5B5B5B] flex justify-center items-center rounded-[25px]">
              {name}
            </div>
          ))
        ) : (
          <div className="m-2 text-[12px] text-gray-500">No tags found</div>
        )}
      </div>
    </div>
  );
};

export default Tags;
