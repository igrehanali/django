"use client";

import { months } from "@/data";
import { useState } from "react";

const YearCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] flex justify-between mt-6"
      >
        <span>{data}</span>
        {open ? (
          <span className="font-black">-</span>
        ) : (
          <span className="font-black">+</span>
        )}
      </button>
      {
        open && (
            <div className="my-6">
                {
                    months.map((month)=>(
                        <button className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] flex justify-between mt-4 text-xs font-light gap-1">
                            <span>{month}</span>
                            <span>{data}</span>
                        </button>
                    ))
                }
            </div>
        )
      }
    </div>
  );
};

export default YearCard;
