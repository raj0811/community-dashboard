import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Layout/Sidebar";
import Feed from "../Components/Content/Feed";
import { Link } from "react-router-dom";
import Navbar from "../Components/Layout/Navbar";
import { IoChevronBack } from "react-icons/io5";
import { formatDistance } from "date-fns";
import PDF from "react-pdf-js";
import notes from "../assets/notes.pdf";
import { FaFilePdf } from "react-icons/fa6";
import pdfLogo from "../assets/logos/pdf.svg";
import {
  BsArrowUpSquare,
  BsArrowDownSquare,
  BsChatSquareText,
} from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import Comments from "../Components/FeedComponents/Comments";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as any; // This will bypass TypeScript checking
  const { info, user } = state || {};
  if (!info) {
    navigate('/');
    return null
  }
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const timeAgo = (date: Date) => {
    const now = new Date();
    let timeString = formatDistance(new Date(date), now, { addSuffix: true });

    // Trim "about" from the result
    if (timeString.startsWith("about ")) {
      timeString = timeString.replace("about ", "");
    }

    return timeString;
  };

  useEffect(() => {
    // Simulate PDF loading
    const loadPdf = async () => {
      setPdfLoaded(true); // Set to true when PDF is loaded
    };
    loadPdf();
  }, []);

  const paragraphs = info.description
    .split("\n")
    .filter((paragraph: any) => paragraph.trim() !== "");

  return (
    <div className="w-full flex justify-center ">
      <div className="w-[778px] bg-white">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mb-4">
            <IoChevronBack /> <span className="ml-2 text-[14px]">Back</span>
          </Link>
        </div>
        <div className="flex flex-col">
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
          </div>
          <span className="text-left mt-2 text-[20px] font-[700]">
            {info.title}
          </span>

          <div className="text-left mt-2">
            {paragraphs.map((paragraph: any, index: any) => (
              <div className="text-[14px]">
                <p key={index}>{paragraph} </p>
                <br />
              </div>
            ))}
          </div>

          <div className="">
            <a href={notes} target="_blank">
              <div
                className="w-[202px]"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                {pdfLoaded ? (
                  <div className="w-[201px] h-[127px] overflow-hidden">
                    <iframe src={notes} />
                  </div>
                ) : (
                  <div>Loading PDF...</div>
                )}
                <div className="w-full flex items-center h-[37px]">
                  <img
                    src={pdfLogo}
                    alt="pdf"
                    className="h-[24px] ml-2 w-[24px] text-red-500"
                  />
                  <span className="ml-2 text-[12px]">Notes.pdf</span>
                </div>
              </div>
            </a>
          </div>

          <div>
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
                <LuBookmark className="mr-2 text-[#014EE6]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-4 mb-4">
            <div className="flex justify-between">
              <span className="text-left text-[20px] font-[500]">Comments</span>
              <span className="flex items-center">
                <HiChatBubbleBottomCenterText className="h-[16.67px] w-[16.67px] text-[#424242]" />
                <span className="ml-2 text-[12px]">Comments</span>
              </span>
            </div>
            <div className="mt-[40px]">
              {info.comments &&
                info.comments.map((comment: any) => (
                  <Comments comments={comment} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
