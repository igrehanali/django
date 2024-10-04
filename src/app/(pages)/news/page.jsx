import Image from "next/image";
import heart from "../../../../public/heart.png";
import calendar from "../../../../public/calendar.png";
import signals from "../../../../public/signals.png";
import { news, years } from "@/data";
import NewsCard from "@/components/newsCard";
import YearCard from "@/components/yearCard";

const News = () => {
  return (
    <div className=" w-full bg-white dark:bg-black dark:text-gray-300 text-[#0C4B33]">
      <div className="bg-[#1b8059] text-xl md:text-3xl px-3 md:px-16 font-extralight py-5">
        News & Events
      </div>
      <div className="w-full md:flex">
        <div className="md:w-[64%] pl-5 md:pl-16 pr-3 md:pr-10 pb-10">
          {news.map((data) => (
            <NewsCard data={data} />
          ))}
        </div>

        <div className="dark:bg-[#181d27] bg-[#f1f1f1] dark:text-gray-300 text-[#0C4B33] md:w-[36%] pl-3 sm:pl-5 lg:pl-16 pr-5 lg:pr-16 pb-20">
          <div className="mt-8">
            <div className="text-lg">Support Django</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="flex mt-10 gap-1">
              <div className="w-[30%]">
                <Image alt="" className="h-20 w-20" src={heart} />
              </div>
              <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] text-sm w-[70%] leading-6 cursor-pointer">
                上海滩陈柏霖 donated to the Django Software Foundation to
                support Django development. Donate today!
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-lg">Upcoing Events</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="flex items-center gap-3">
              <div className="-mt-2">
                <Image alt="" className="h-4 w-4" src={calendar} />
              </div>
              <div>
                <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
                  DjangoCon US 2024
                </div>
                <div className=" text-sm font-light mt-2">
                  September 22, 2024 | Durham, North Carolina
                </div>
              </div>
            </div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6 text-sm underline font-lightx">
              Want your event listed here?
            </div>
          </div>
          <div className="mt-10">
            <div className="text-lg">Archives</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div>
              {[...years].reverse().map((year) => (
                <YearCard data={year}/>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <div className="text-lg">RSS Feeds</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="flex items-center gap-3 text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-4">
              <div className="">
                <Image alt="" className="h-5 w-5" src={signals} />
              </div>
              <div>
                <div className="text-sm">
                Latest news entries
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-4">
              <div className="">
                <Image alt="" className="h-5 w-5" src={signals} />
              </div>
              <div>
                <div className="text-sm">
                Recent code changes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
