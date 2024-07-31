import React from "react";
import fire from "../../assets/logos/fire.svg";
import Select from "react-select";
import call from "../../assets/logos/call.svg";
const Navbar = ({ user }: any) => {
  const options = user.tags.map((tag: string) => ({
    value: tag,
    label: tag,
  }));
  const defaultOption = options[0] || null;
  const [selectedOption, setSelectedOption] = React.useState(defaultOption);
  const handleChange = (selectedOption: any) => {
    console.log("Selected course:", selectedOption);
  };
  return (
    <div className="  w-full h-[73px] border-b-[1px]">
      <div className="flex items-center justify-between h-full">
        <span className="pl-2 h-full flex items-center text-[20px] font-[700]">
          Welcome {user.name.split(" ")[0]}!
        </span>

        <div className="flex justify-end items-center  h-full pr-4">
          <div className="m-2 w-[74px] h-[34px] rounded-[50px] overflow-hidden">
            <div
              className="border-2 h-full w-full border-transparent flex justify-center items-center"
              style={{
                background: "linear-gradient(45deg, #f3a5b7, #a5baf3)",
                borderRadius: "50px",
              }}
            >
              <div className=" w-[100%] h-[100%] flex items-center justify-evenly bg-white rounded-[50px]">
                <img src={fire} alt="fire" className=" h-[24px]" />
                <span>{user.points}</span>
              </div>
            </div>
          </div>

          <button className="text-[#014EE6] border border-[#014EE6] rounded-[10px] pr-4 pl-4 h-[35px] m-2">
            Explore Community
          </button>

          <div className="w-[218px] m-2 h-[35px]">
            <Select
              options={options}
              onChange={handleChange}
              value={defaultOption}
              className="text-white"
              placeholder="Select a course"
              styles={{
                control: (provided) => ({
                  ...provided,
                  background:
                    "radial-gradient( circle farthest-corner at 10% 20%,  rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% );",
                  border: "none",
                }),
                input: (provided) => ({
                  ...provided,
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  "::placeholder": {
                    color: "#FFFFFF",
                  },
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#FFFFFF",
                  display: "flex",
                }),
              }}
            />
          </div>

          <div className="m-2">
            <img src={call} alt="call" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
