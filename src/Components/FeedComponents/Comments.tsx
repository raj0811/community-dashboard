import React, { useState } from "react";
import { formatDistance } from "date-fns";
import {
  BsArrowUpSquare,
  BsArrowDownSquare,
  BsChatSquareText,
} from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import { CiChat2 } from "react-icons/ci";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const Comments = ({ comments }: any) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showMoreReplies, setShowMoreReplies] = useState(false);
  const timeAgo = (date: Date) => {
    const now = new Date();
    let timeString = formatDistance(new Date(date), now, { addSuffix: true });

    // Trim "about" from the result
    if (timeString.startsWith("about ")) {
      timeString = timeString.replace("about ", "");
    }

    return timeString;
  };

  return (
    <div
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      className="mb-[50px] p-4"
    >
      <div className="">
        <div className="flex w-full items-center ">
          {/* parent div */}
          <div className="bg-[#FC8026] h-[32px] rounded-full w-[32px] flex justify-center items-center">
            <span className="h-full w-full flex items-center justify-center text-[20px] text-white">
              {comments.name ? comments.name.charAt(0) : "A"}
            </span>
          </div>
          <div className="ml-2 flex flex-col items-start">
            <span className="text-[14px] font-[700]">{comments.name}</span>
            <span className="text-[10px] text-gray-600">
              {timeAgo(new Date(comments.timeStamp))}
            </span>
          </div>
        </div>

        <div className="flex ml-[15px] border-l-[1.5px] border-gray-400">
          <div className=" p-2">
            <div className="">
              <div className="">
                <div className="text-left text-[13px] ">{comments.comment}</div>
                <div className="flex mt-4 items-center ">
                  <div className="flex font-[500] items-center text-[12px]">
                    <BsArrowUpSquare className="mr-2 text-[#014EE6]" />
                    {comments.likes}
                  </div>

                  <div className="mx-4 h-4 border-l border-gray-300"></div>

                  <div className="flex font-[500] items-center text-[12px]">
                    <BsArrowDownSquare className="mr-2 text-[#014EE6]" />
                    {comments.dislikes}
                  </div>

                  <div className="mx-4 h-4 border-l border-gray-300"></div>
                  <div className="flex font-[500] items-center text-[12px]">
                    <CiChat2 className="mr-2  text-black" />
                    <span className="text-[12px] text-[#8E8E8E]">Reply</span>
                  </div>

                  <div className="flex font-[500] items-center text-[12px] ml-4">
                    <HiOutlineChatBubbleBottomCenterText className="mr-2  text-black" />
                    <span
                      className="text-[12px] text-[#8E8E8E] cursor-pointer"
                      onClick={() => setShowReplies(!showReplies)}
                    >
                      {showReplies ? "Hide Replies" : "Show Replies"}{" "}
                      {comments.reply && comments.reply.length}
                    </span>
                  </div>
                </div>

                <div>
                  {showReplies &&
                    comments.reply &&
                    comments.reply.map((reply: any) => (
                      <div className="mt-4">
                        
                        <div className="flex w-full items-center p-2">
                          {/* child div */}
                          <div className="bg-[#8426FC] h-[32px] rounded-full w-[32px] flex justify-center items-center">
                            <span className="h-full w-full flex items-center justify-center text-[20px] text-white">
                              {reply.name ? reply.name.charAt(0) : "A"}
                            </span>
                          </div>
                          <div className="ml-2 flex flex-col items-start">
                            <span className="text-[14px] font-[700]">
                              {reply.name}
                              <span className="text-[10px] text-gray-600 ml-4">
                                {timeAgo(new Date(reply.timeStamp))}
                              </span>
                            </span>
                          </div>
                        </div>

                        <div className="border-l-[1.5px]  ml-[24px] border-gray-400 p-2">
                          <div className="text-left text-[13px] ">
                            {reply.comment}
                          </div>
                          <div>
                            <div className="flex mt-4 items-center">
                              <div className="flex font-[500] items-center text-[12px]">
                                <BsArrowUpSquare className="mr-2 text-[#014EE6]" />
                                {reply.likes}
                              </div>

                              <div className="mx-4 h-4 border-l border-gray-300"></div>

                              <div className="flex font-[500] items-center text-[12px]">
                                <BsArrowDownSquare className="mr-2 text-[#014EE6]" />
                                {reply.dislikes}
                              </div>

                              <div className="mx-4 h-4 border-l border-gray-300"></div>
                              <div className="flex font-[500] items-center text-[12px]">
                                <CiChat2 className="mr-2  text-black" />
                                <span className="text-[12px] text-[#8E8E8E]">
                                  Reply
                                </span>
                              </div>

                              <div className="flex font-[500] items-center text-[12px] ml-4">
                                <HiOutlineChatBubbleBottomCenterText className="mr-2  text-black" />
                                <span
                                  className="text-[12px] text-[#8E8E8E] cursor-pointer"
                                  onClick={() =>
                                    setShowMoreReplies(!showMoreReplies)
                                  }
                                >
                                  {showMoreReplies
                                    ? "Hide Replies"
                                    : "Show Replies"}{" "}
                                  {reply.reply && reply.reply.length}
                                </span>
                              </div>
                            </div>
                            <div>
                              {showMoreReplies &&
                                reply.reply &&
                                reply.reply.map((reply: any) => (
                                  <div className="ml-[50px]">
                                    <div className="mt-4">
                                      <div className="flex w-full items-center p-2">
                                        {/* child div */}
                                        <div className="bg-[#37e414] h-[32px] rounded-full w-[32px] flex justify-center items-center">
                                          <span className="h-full w-full flex items-center justify-center text-[20px] text-white">
                                            {reply.name
                                              ? reply.name.charAt(0)
                                              : "A"}
                                          </span>
                                        </div>
                                        <div className="ml-2 flex flex-col items-start">
                                          <span className="text-[14px] font-[700]">
                                            {reply.name}
                                            <span className="text-[10px] text-gray-600 ml-4">
                                              {timeAgo(
                                                new Date(reply.timeStamp)
                                              )}
                                            </span>
                                          </span>
                                        </div>
                                      </div>

                                      <div>
                                        <div className="text-left text-[13px]">
                                          {reply.comment}
                                        </div>
                                        <div className="">
                                          <div className="flex mt-4 items-center">
                                            <div className="flex font-[500] items-center text-[12px]">
                                              <BsArrowUpSquare className="mr-2 text-[#014EE6]" />
                                              {reply.likes}
                                            </div>

                                            <div className="mx-4 h-4 border-l border-gray-300"></div>

                                            <div className="flex font-[500] items-center text-[12px]">
                                              <BsArrowDownSquare className="mr-2 text-[#014EE6]" />
                                              {reply.dislikes}
                                            </div>

                                            <div className="mx-4 h-4 border-l border-gray-300"></div>
                                            <div className="flex font-[500] items-center text-[12px]">
                                              <CiChat2 className="mr-2  text-black" />
                                              <span className="text-[12px] text-[#8E8E8E]">
                                                Reply
                                              </span>
                                            </div>

                                            <div className="flex font-[500] items-center text-[12px] ml-4">
                                              <HiOutlineChatBubbleBottomCenterText className="mr-2  text-black" />
                                              <span className="text-[12px] text-[#8E8E8E]">
                                                hide Reply{" "}
                                                {reply.reply &&
                                                  reply.reply.length}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
