import Image from "next/image";
import bolt from "../../public/bolt.png";
import lock from "../../public/lock.png";
import meter from "../../public/speed.png";
import heart from "../../public/heart.png";
import documentImg from "../../public/document.png";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black dark:text-gray-300 text-[#0C4B33]">
      <div className="h-[400px] w-full grid justify-center items-center py-20">
        <div className="text-4xl font-light max-w-[750px] text-center ">
          Django makes it easier to build better web apps more quickly and with
          less code
        </div>
        <button className="w-[280px] py-4 bg-[#44B78B] hover:bg-[#4ace9b] text-black font-bold rounded mx-auto">
          Get Started with Django
        </button>
      </div>
      <div className="w-full h-[1px] bg-gray-300 dark:bg-white"></div>
      <div className="w-full md:flex">
        <div className="md:w-[64%] pl-5 md:pl-16 pr-3 md:pr-10 py-10 grid justify-center">
          <div className="mb-8 text-3xl">Meet Django</div>
          <div className=" font-custom text-lg font-thin">
            Django is a high-level Python web framework that encourages rapid
            development and clean, pragmatic design. Built by experienced
            developers, it takes care of much of the hassle of web development,
            so you can focus on writing your app without needing to reinvent the
            wheel. It’s free and open source.
          </div>
          <div className="flex mt-16">
            <div className="w-[15%]">
              <div className="bg-[#44B78B] w-12 h-12 md:h-20 md:w-20 rounded-full flex justify-center items-center">
                <Image alt="" className="h-6 w-6 md:h-10 md:w-10" src={bolt} />
              </div>
            </div>
            <div className="w-[80%]">
              <div className="text-lg">Ridiciously fast.</div>
              <div className="font-custom mt-3">
                Django was designed to help developers take applications from
                concept to completion as quickly as possible.
              </div>
            </div>
          </div>
          <div className="flex mt-16">
            <div className="w-[15%]">
              <div className="bg-[#44B78B] w-12 h-12 md:h-20 md:w-20 rounded-full flex justify-center items-center">
                <Image alt="" className="h-6 w-6 md:h-10 md:w-10" src={lock} />
              </div>
            </div>
            <div className="w-[80%]">
              <div className="text-lg">Reassuringly secure.</div>
              <div className="font-custom mt-3">
              Django takes security seriously and helps developers avoid many common security mistakes.
              </div>
            </div>
          </div>
          <div className="flex mt-16">
            <div className="w-[15%]">
              <div className="bg-[#44B78B] w-12 h-12 md:h-20 md:w-20 rounded-full flex justify-center items-center">
                <Image alt="" className="h-8 w-8 md:h-14 md:w-14" src={meter} />
              </div>
            </div>
            <div className="w-[80%]">
              <div className="text-lg">Exceedingly scalable.</div>
              <div className="font-custom mt-3">
              Some of the busiest sites on the web leverage Django’s ability to quickly and flexibly scale.
              </div>
            </div>
          </div>
          <div className="mt-20 mb-16 flex justify-center items-center">
            <button className="w-[300px] md:w-[450px]  py-5 border border-gray-300 hover:border-[#4ace9b] hover:text-[#4ace9b] font-medium rounded ">
              Learn more about Django
            </button>
          </div>
          <div className="h-[1px] bg-gray-300 dark:bg-white"></div>
          <div className="mb-8 mt-16 text-3xl">Stay in the loop</div>
          <div className=" font-custom text-lg font-thin">
            Subscribe to one of our mailing lists to stay up to date with
            everything in the Django community:
          </div>
          <div className="grid md:grid-cols-2">
            <div>
              <div>
                <div className="text-[#93D7B7] mt-10">Using Django</div>
                <div className="mt-3">
                  Get help with Django and follow announcements.
                </div>
              </div>
              <div className="relative mt-3 mb-8 w-[90%]">
                <input
                  type="text"
                  className=" border border-gray-300 bg-gray-100 dark:bg-black  rounded ps-3 pe-10 w-full py-3 text-sm focus:border-[#44B78B] focus:ring-[#44B78B] focus:outline-none"
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
                <span className="text-[#93D7B7] hover:text-[#569075] cursor-pointer">
                  {" "}
                  django-users+subscribe@googlegroups.com
                </span>{" "}
                and following the instructions that will be sent to you.
              </div>
            </div>
            <div>
              <div>
                <div className="text-[#93D7B7] mt-10">
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
                <span className="text-[#93D7B7] hover:text-[#569075] cursor-pointer">
                  Contributing to Django
                </span>
                . Many frequently asked questions are answered there.
              </div>
              <div className="h-[1px] bg-gray-300 dark:bg-white my-3"></div>
              <div className="text-xs w-[80%]">
                You can also subscribe by sending an email to{" "}
                <span className="text-[#93D7B7] hover:text-[#569075] cursor-pointer">
                  django-developers+subscribe@googlegroups.com{" "}
                </span>{" "}
                and following the instructions that will be sent to you.
              </div>
            </div>
          </div>
          <div className="font-custom mt-10 md:mb-[700px] text-lg">
            We have a few other specialized lists (announce, i18n, ...). You can
            find more information about them in our{" "}
            <span className="text-[#93D7B7] hover:text-[#569075] cursor-pointer underline">
              {" "}
              mailing list documentation.
            </span>
          </div>
        </div>
        <div className="dark:bg-[#181d27] bg-[#f1f1f1] dark:text-gray-300 text-[#0C4B33] md:w-[36%] pl-5 md:pl-16 pr-5 md:pr-16 pb-20">
          <button className="mt-10 w-full py-4 bg-[#44B78B] hover:bg-[#4ace9b] text-black font-bold rounded mx-auto">
            Download latest release: 5.0.7
          </button>
          <div className="text-center text-xs text-[#44B78B] mt-3">
            Django Documentation
          </div>
          <div className="mt-8">
            <div>Support Django</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="flex mt-10">
              <div className="w-[30%]">
                <Image alt="" className="h-20 w-20" src={heart} />
              </div>
              <div className="text-[#7fc9ac] text-sm w-[70%] leading-6">
                Egor Poderiagin donated to the Django Software Foundation to
                support Django development. Donate today!
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div>Latest News</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="text-[#7fc9ac] font-medium mt-10 leading-6">
              Django 5.1 release candidate 1 released
            </div>
            <div className=" text-sm mt-5 leading-6">
              Today Django 5.1 release candidate 1, a preview/testing package
              for the upcoming Django 5.1 release, is available.
            </div>
            <div className=" text-sm mt-3 leading-6">
              Posted by Natalia Bidart on July 24, 2024
            </div>
          </div>
          <div className="mt-8">
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="text-[#7fc9ac] font-medium mt-10 leading-6">
              Django security releases issued: 5.0.7 and 4.2.14
            </div>
            <div className=" text-sm mt-5 leading-6">
              Django 5.0.7 and 4.2.14 fix four security issues.
            </div>
            <div className=" text-sm mt-3 leading-6">
              Posted by Natalia Bidart on July 9, 2024
            </div>
            <div className="text-[#7fc9ac] text-xs font-medium mt-8 leading-6">
              More News
            </div>
          </div>
          <div className="mt-10">
            <div>Next to Django</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="text-[#7fc9ac] text-sm  mt-6 leading-6 flex gap-3">
              <Image alt="" className="h-5 w-5 " src={documentImg} />
              <span>Installation Guide</span>
            </div>
            <div className="text-[#7fc9ac] text-sm  mt-3 leading-6 flex gap-3">
              <Image alt="" className="h-5 w-5 " src={documentImg} />
              <span>Writing you first Django app</span>
            </div>
            <div className="text-[#7fc9ac] text-xs font-medium mt-8 leading-6">
              GETTING STARTED WITH DJANGO
            </div>
          </div>
          <div className="mt-10">
            <div>The Power of Django</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="text-[#7fc9ac] text-sm  mt-6 leading-6 flex gap-3">
              <Image alt="" className="h-5 w-5 " src={documentImg} />
              <span>Object-relational mapper</span>
            </div>
            <div className="text-[#7fc9ac] text-sm  mt-3 leading-6 flex gap-3">
              <Image alt="" className="h-5 w-5 " src={documentImg} />
              <span>Automatic admin interface</span>
            </div>
            <div className="text-[#7fc9ac] text-sm  mt-6 leading-6 flex gap-3">
              <Image alt="" className="h-5 w-5 " src={documentImg} />
              <span>Robust template system</span>
            </div>
            <div className="text-[#7fc9ac] text-sm  mt-3 leading-6 flex gap-3">
              <Image alt="" className="h-5 w-5 " src={documentImg} />
              <span>Quick internationalization</span>
            </div>
            <div className="text-[#7fc9ac] text-xs font-medium mt-8 leading-6">
              EXPLORE MORE FEATURES
            </div>
          </div>
          <div className="mt-8">
            <div>Get involved</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="text-[#7fc9ac] text-sm mt-5 leading-6">
              Ticket Syatem
            </div>
            <div className="mt-2 text-sm text-gray-400 font-light">
              Report bugs and make feature requests
            </div>
            <div className="text-[#7fc9ac] text-sm mt-5 leading-6">
              Development Dashboard
            </div>
            <div className="mt-2 text-sm text-gray-400 font-light">
              see what's currently being worked on
            </div>
            <div className="text-[#7fc9ac] text-xs font-medium mt-8 leading-6">
              INSIDE THE DJANGO COMMUNITY
            </div>
          </div>
          <div className="mt-8">
            <div>Get involved</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="text-[#7fc9ac] text-sm mt-5 leading-6">
              #django IRC channel
            </div>
            <div className="mt-2 text-sm text-gray-400 font-light">
              Chat with other Django users
            </div>
            <div className="text-[#7fc9ac] text-sm mt-5 leading-6">
              Django Discord Server
            </div>
            <div className="mt-2 text-sm text-gray-400 font-light">
              Join the Django Discord Community
            </div>
            <div className="text-[#7fc9ac] text-sm mt-5 leading-6">
              Official Django Forum
            </div>
            <div className="mt-2 text-sm text-gray-400 font-light">
              Join the community on the Django Forum.
            </div>
            <div className="text-[#7fc9ac] text-xs font-medium mt-8 leading-6">
              INSIDE THE DJANGO COMMUNITY
            </div>
          </div>
          <div className="mt-8">
            <div>The Django Software Foundation</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="text-[#7fc9ac] text-sm mt-5 leading-6">
              About the Foundation
            </div>
            <div className="mt-2 text-sm text-gray-400 font-light">
              Our non-profit supports the project
            </div>
            <div className="text-[#7fc9ac] text-sm mt-5 leading-6">
              Support Django
            </div>
            <div className="mt-2 text-sm text-gray-400 font-light">
              Your contribution makes Django stronger
            </div>
            <div className="text-[#7fc9ac] text-sm mt-5 leading-6">
              Contact the Django Software Foundation
            </div>
            <div className="text-[#7fc9ac] text-xs font-medium mt-8 leading-6">
              MORE ABOUT THE DSF
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
