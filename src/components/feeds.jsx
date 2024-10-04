"use client";
import Image from "next/image";
import FeedDetail from "./feedDetail";
import { useState, useEffect } from "react";
import { feeds } from "@/data";

const FeedCard = ({ data, isOpen, toggleOpen }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Image className="h-6 w-6" src={data.img} alt="" />
          <span className="font-light hover:text-[#a3e4b1]">{data.text}</span>
        </div>
        {!isOpen ? (
          <button onClick={toggleOpen} className="text-2xl font-black">
            +
          </button>
        ) : (
          <button onClick={toggleOpen} className="text-2xl font-black">
            -
          </button>
        )}
      </div>
      <div
        className={`transition-all duration-1000 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        {isOpen && <FeedDetail data={data.detail} />}
      </div>
      <div className="h-[1px] bg-white mt-4"></div>
    </div>
  );
};

const Feeds = () => {
  const [openStates, setOpenStates] = useState(feeds.map(() => false));

  const toggleOpenState = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  const expandAll = () => {
    setOpenStates(feeds.map(() => true));
  };

  const collapseAll = () => {
    setOpenStates(feeds.map(() => false));
  };

  return (
    <div>
      <div className="mb-8 mt-16 text-2xl">Django RSS feeds</div>
      <div className="flex justify-end gap-2 text-sm font-medium">
        <button onClick={expandAll}>EXPAND ALL</button>
        <div>/</div>
        <button onClick={collapseAll}>COLLAPSE ALL</button>
      </div>
      <div className="h-[1px] bg-white mb-4 mt-1"></div>
      <div className="space-y-5">
        {feeds.map((feed, index) => (
          <FeedCard
            key={index}
            data={feed}
            isOpen={openStates[index]}
            toggleOpen={() => toggleOpenState(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
