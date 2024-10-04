import Image from "next/image";
import bolt from "../../../../public/bolt.webp";
import briefcase from "../../../../public/briefcase.webp";
import setting from "../../../../public/setting.webp";
import meter from "../../../../public/speedmeter.webp";
import lock from "../../../../public/lock.webp";

const OverView = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-gray-300 text-[#0C4B33]">
      <div className="bg-[#1b8059] text-xl md:text-3xl px-3 md:px-16 font-extralight py-5">
        Django was invented to meet fast-moving newsroom deadlines, while
        satisfying the tough requirements of experienced web developers.
      </div>
      <div className="md:w-[740px] mx-auto px-3 md:px-0">
        <div className="space-y-10 mt-16">
          <div className="text-3xl font-light">Why Django?</div>
          <div className="font-custom text-lg">
            With Django, you can take web applications from concept to launch in
            a matter of hours. Django takes care of much of the hassle of web
            development, so you can focus on writing your app without needing to
            reinvent the wheel. It’s free and open source.
          </div>
          <div className="h-[1px] bg-gray-300 dark:bg-white"></div>
        </div>
        <div className="space-y-10 mt-5 md:mt-16 ">
          <div className="flex">
            <div className="w-[35%] hidden md:block">
              <Image alt="" className="h-[220px] w-[240px]" src={bolt} />
            </div>
            <div className="md:w-[65%] space-y-4 md:space-y-8">
              <div className="text-2xl font-light flex items-center gap-3">
                <div className="block md:hidden ">
                <Image alt="" className="h-[40px] w-[44px] " src={bolt} />
                </div>
                <div>Ridiciously fast</div>
              </div>
              <div className="font-custom text-lg">
                Django was designed to help developers take applications from
                concept to completion as quickly as possible.
              </div>
              <div className="text-sm font-semibold text-[#42a676] dark:text-[#8cd1b0] hover:text-[#55cf94] cursor-pointer">
                SEE HOW FAST YOU CAN START BUILDING
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-gray-300 dark:bg-white"></div>
        </div>
        <div className="space-y-10 mt-5 md:mt-16 ">
          <div className="flex">
            <div className="md:w-[65%] space-y-4 md:space-y-8">
              <div className="text-2xl font-light flex items-center gap-3">
                <div className="block md:hidden ">
                <Image alt="" className="h-[40px] w-[44px] " src={briefcase} />
                </div>
                <div>Fully loaded.</div>
              </div>
              <div className="font-custom text-lg">
              Django includes dozens of extras you can use to handle common web development tasks. Django takes care of user authentication, content administration, site maps, RSS feeds, and many more tasks — right out of the box.
              </div>
              <div className="text-sm font-semibold text-[#42a676] dark:text-[#8cd1b0]  hover:text-[#55cf94] cursor-pointer">
              SEE WHAT’S INCLUDED
              </div>
            </div>
            <div className="w-[35%] hidden md:block">
              <Image alt="" className="h-[220px] w-[230px]" src={briefcase} />
            </div>
          </div>
          <div className="h-[1px] bg-gray-300 dark:bg-white"></div>
        </div>
        <div className="space-y-10 mt-5 md:mt-16 ">
          <div className="flex">
            <div className="w-[35%] hidden md:block">
              <Image alt="" className="h-[220px] w-[230px]" src={lock} />
            </div>
            <div className="md:w-[65%] space-y-4 md:space-y-8">
              <div className="text-2xl font-light flex items-center gap-3">
                <div className="block md:hidden ">
                <Image alt="" className="h-[40px] w-[44px] " src={lock} />
                </div>
                <div>Reassuringly secure.</div>
              </div>
              <div className="font-custom text-lg">
              Django takes security seriously and helps developers avoid many common security mistakes, such as SQL injection, cross-site scripting, cross-site request forgery and clickjacking. Its user authentication system provides a secure way to manage user accounts and passwords.
              </div>
              <div className="text-sm font-semibold text-[#42a676] dark:text-[#8cd1b0]  hover:text-[#55cf94] cursor-pointer">
              READ OUR SECURITY OVERVIEW
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-gray-300 dark:bg-white"></div>
        </div>
        <div className="space-y-10 mt-5 md:mt-16 ">
          <div className="flex">
            <div className="md:w-[65%] space-y-4 md:space-y-8">
              <div className="text-2xl font-light flex items-center gap-3">
                <div className="block md:hidden ">
                <Image alt="" className="h-[40px] w-[40px] " src={meter} />
                </div>
                <div>Exceedingly scalable.</div>
              </div>
              <div className="font-custom text-lg">
              Some of the busiest sites on the planet use Django’s ability to quickly and flexibly scale to meet the heaviest traffic demands.
              </div>
              <div className="text-sm font-semibold text-[#42a676] dark:text-[#8cd1b0]  hover:text-[#55cf94] cursor-pointer">
              LEARN MORE ABOUT SCALING DJANGO APPLICATIONS
              </div>
            </div>
            <div className="w-[35%] hidden md:block">
              <Image alt="" className="h-[220px] w-[220px]" src={meter} />
            </div>
          </div>
          <div className="h-[1px] bg-gray-300 dark:bg-white"></div>
        </div>
        <div className="space-y-10 mt-5 md:mt-16 flex">
            <div className="w-[35%] hidden md:block">
              <Image alt="" className="h-[220px] w-[220px]" src={setting} />
            </div>
            <div className="md:w-[65%] space-y-4 md:space-y-8">
              <div className="text-2xl font-light flex items-center gap-3">
                <div className="block md:hidden ">
                <Image alt="" className="h-[40px] w-[40px] " src={setting} />
                </div>
                <div>Incredibly versatile.</div>
              </div>
              <div className="font-custom text-lg">
              Companies, organizations and governments have used Django to build all sorts of things — from content management systems to social networks to scientific computing platforms.
              </div>
            </div>
        </div>
        <div className="flex justify-center my-20">
          <button className="w-[450px] py-4 bg-[#44B78B] hover:bg-[#4ace9b] text-black font-bold rounded mx-auto">
            Get Started with Django
          </button>
        </div>
      </div>
      <div className="mt-32 mb-16 px-3 md:px-16">
        <div className="text-2xl">Sites Using Django</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 dark:text-[#abdbc4] text-[#58b88a] mt-12">
          <div className="space-y-3">
            <div>Disqus</div>
            <div>MacAurther Foundation</div>
            <div>Open Knowlege Foundation</div>
          </div>
          <div className="space-y-3">
            <div>Instagram</div>
            <div>Mozilla</div>
            <div>Pinterest</div>
          </div>
          <div className="space-y-3">
            <div>Knight Foundation</div>
            <div>National Geography</div>
            <div>Open Stack</div>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#181d27] bg-[#f1f1f1] h-40"></div>
    </div>
  );
};

export default OverView;
