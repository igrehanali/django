import Image from "next/image";
import heart from "../../../../public/heart.png";
import CommunityCard from "@/components/communityCard";
import Feeds from "@/components/feeds";
import { getHelp, getInvolved } from "@/data";

const Community = () => {

  return (
    <div className=" w-full bg-white dark:bg-black dark:text-gray-300 text-[#0C4B33]">
      <div className="bg-[#1b8059] text-xl md:text-3xl px-3 md:px-16 font-extralight py-5">
      Building the Django Community for 19 years. Come join us!
      </div>
      <div className="w-full md:flex">
        <div className="md:w-[64%] pl-5 md:pl-16 pr-3 md:pr-10 py-10 grid justify-center">
          <div className=" text-2xl text-center lg:text-start">Get Help</div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-16 mt-5">
          {
            getHelp.map((data)=>(
                <CommunityCard data={data}/>
              )
            )
          }
          </div>
          <div className=" text-2xl mt-10 text-center lg:text-start">Get Involved</div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-16 mt-5">
          {
            getInvolved.map((data)=>(
                <CommunityCard data={data}/>
              )
            )
          }
          </div>
          <Feeds />
          <div className="mb-8 mt-16 text-2xl">Mailing Lists</div>
          <div className=" font-custom text-lg font-thin">
            Subscribe to one of our mailing lists to stay up to date with
            everything in the Django community:
          </div>
          <div className="grid md:grid-cols-2">
            <div>
              <div>
                <div className="text-[#4bb78c] dark:text-[#93D7B7] mt-10">Using Django</div>
                <div className="mt-3">
                  Get help with Django and follow announcements.
                </div>
              </div>
              <div className="relative mt-3 mb-8 w-[90%]">
                <input
                  type="text"
                  className=" border border-gray-300 bg-gray-100 dark:bg-black rounded ps-3 pe-10 w-full py-3 text-sm focus:border-[#44B78B] focus:ring-[#44B78B] focus:outline-none"
                  placeholder="Enter Email"
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                  <svg
                    className="w-6 h-6 text-[#44B78B] dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
              </div>
              <div className="text-xs w-[80%]">
                You can also subscribe by sending an email to
                <span className="text-[#4bb78c] dark:text-[#93D7B7] hover:text-[#569075] cursor-pointer">
                  {" "}
                  django-users+subscribe@googlegroups.com
                </span>{" "}
                and following the instructions that will be sent to you.
              </div>
            </div>
            <div>
              <div>
                <div className="text-[#4bb78c] dark:text-[#93D7B7] mt-10">
                  Contributing to Django
                </div>
                <div className="mt-3">
                  Contribute to the development of Django itself.
                </div>
              </div>
              <div className="relative mt-3 mb-8 w-[90%]">
                <input
                  type="text"
                  className=" border border-gray-300 bg-gray-100 dark:bg-black rounded ps-3 pe-10 w-full py-3 text-sm focus:border-[#44B78B] focus:ring-[#44B78B] focus:outline-none"
                  placeholder="Enter Email"
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                  <svg
                    className="w-6 h-6 text-[#44B78B] dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
              </div>
              <div className="text-xs w-[80%]">
                Before asking a question about how to contribute, read{" "}
                <span className="text-[#4bb78c] dark:text-[#93D7B7] hover:text-[#569075] cursor-pointer">
                  Contributing to Django
                </span>
                . Many frequently asked questions are answered there.
              </div>
              <div className="h-[1px] bg-gray-300 dark:bg-white my-3"></div>
              <div className="text-xs w-[80%]">
                You can also subscribe by sending an email to{" "}
                <span className="text-[#4bb78c] dark:text-[#93D7B7] hover:text-[#569075] cursor-pointer">
                  django-developers+subscribe@googlegroups.com{" "}
                </span>{" "}
                and following the instructions that will be sent to you.
              </div>
            </div>
          </div>
          <div className="font-custom mt-10 md:mb-[250px] text-lg">
            We have a few other specialized lists (announce, i18n, ...). You can
            find more information about them in our{" "}
            <span className="text-[#4bb78c] dark:text-[#93D7B7] hover:text-[#569075] cursor-pointer underline">
              {" "}
              mailing list documentation.
            </span>
          </div>
        </div>
        <div className="dark:bg-[#181d27] bg-[#f1f1f1] dark:text-gray-300 text-[#0C4B33] md:w-[36%] pl-5 md:pl-16 pr-5 md:pr-16 pb-20">
          <div className="mt-8">
            <div className="text-lg">Support Django</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="flex mt-10">
              <div className="w-[30%]">
                <Image alt="" className="h-20 w-20" src={heart} />
              </div>
              <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] text-sm w-[70%] leading-6 cursor-pointer">
              SNEAKSHIGH LTD donated to the Django Software Foundation to support Django development. Donate today!
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-lg">Latest News</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
            Frequently Asked Questions
            </div>
            <div className=" text-sm font-light">
            The FAQ answers many common questions
            </div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-4"></div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
            r/Django Subreddit
            </div>
            <div className=" text-sm font-light">
            News and links on Reddit
            </div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-4"></div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
            StackOverflow
            </div>
            <div className=" text-sm font-light">
            Search community answers
            </div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-4"></div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
            #django IRC Channel
            </div>
            <div className=" text-sm font-light">
            Chat with other Django users like it's 1999
            </div>
          </div>
          <div className="mt-10">
            <div className="text-lg">Dive In</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
            Ticket System
            </div>
            <div className=" text-sm font-light">
            View and update bug reports
            </div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-4"></div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
            Development Dashboard
            </div>
            <div className=" text-sm font-light">
            Statistics about Django development
            </div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-4"></div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
            django-updates Mailing List
            </div>
            <div className=" text-sm font-light">
            Get updated for each code and ticket change
            </div>
          </div>
          <div className="mt-10">
            <div className="text-lg">More Links</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
            Django Packages
            </div>
            <div className=" text-sm font-light">
            Find third-party packages to supercharge your project
            </div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-4"></div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
            Django-powered Sites
            </div>
            <div className=" text-sm font-light">
            Add your site to the list
            </div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-4"></div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
            Django Badges
            </div>
            <div className=" text-sm font-light">
            Show your support (or wish longingly)
            </div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-4"></div>
            <div className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-6">
            Django Logos
            </div>
            <div className=" text-sm font-light">
            Download official logos
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Community;
