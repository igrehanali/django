
const Footer = () => {
  return (
    <div className="w-screen">
      <div className=" bg-[#1b8059] py-5 md:py-8 px-5 md:px-16 min-w-screen grid">
        <div className='grid sm:grid-cols-2 md:grid-cols-5 w-full md:justify-center'>
          <div>
          <div className="h-[1px] bg-white block sm:hidden mb-10"></div>
            <div className='font-semibold'>Learn More</div>
            <div className='text-xs grid mt-6 gap-3'>
              <span>About Django</span>
              <span>Getting Started with Django</span>
              <span>Team Organization</span>
              <span>Django Software Foundation</span>
              <span>Code of Conduct</span>
              <span>Diversity Statement</span>
            </div>
            <div className="h-[1px] bg-white block sm:hidden mt-10"></div>
          </div>
          <div>
            <div className='font-semibold mt-10 sm:mt-0'>Get Invonvled</div>
            <div className='text-xs grid mt-6 gap-3'>
              <span>About Django</span>
              <span>Getting Started with Django</span>
              <span>Team Organization</span>
              <span>Django Software Foundation</span>
            </div>
            <div className="h-[1px] bg-white block sm:hidden mt-10"></div>
          </div>
          <div>
            <div className='font-semibold mt-10 sm:mt-0'>Get Help</div>
            <div className='text-xs grid mt-6 gap-3'>
              <span>About Django</span>
              <span>Getting Started with Django</span>
              <span>Team Organization</span>
              <span>Django Software Foundation</span>
            </div>
            <div className="h-[1px] bg-white block sm:hidden mt-10"></div>
          </div>
          <div>
            <div className='font-semibold mt-10 sm:mt-0'>Follow Us</div>
            <div className='text-xs grid mt-6 gap-3'>
              <span>About Django</span>
              <span>Getting Started with Django</span>
              <span>Team Organization</span>
              <span>Django Software Foundation</span>
              <span>Code of Conduct</span>
            </div>
            <div className="h-[1px] bg-white block sm:hidden mt-10"></div>
          </div>
          <div>
            <div className='font-semibold mt-10 sm:mt-0'>Support Us</div>
            <div className='text-xs grid mt-6 gap-3'>
              <span>About Django</span>
              <span>Getting Started with Django</span>
              <span>Team Organization</span>
              <span>Django Software Foundation</span>
            </div>
            <div className="h-[1px] block sm:hidden mt-10"></div>
          </div>
        </div>
      </div>
      <div className=" bg-[#0C4B33] w-full">
        <div className="py-6 px-5 md:px-16 md:flex">
          <div className="w-[33%] text-2xl md:text-4xl font-bold font-secondary">django</div>
          <div className="w-[33%] text-[#93D7B7] mt-10 md:mt-0">
            <div className="text-xs">Hosted by</div>
            <div className="text-lg whitespace-nowrap">In-kind donors</div>
          </div>
          <div className="w-[33%] text-[#93D7B7] mt-10 md:mt-0">
            <div className="text-xs">Designed by</div>
            <div className="flex text-lg gap-2">
              <div>threespot.</div>
              <div>&</div>
              <div>andrew</div>
            </div>
          </div>
        </div>
        <div className="mt-5 px-5 md:px-16 pb-10 text-xs text-[#93D7B7]">
          © 2005-2024 Django Software Foundation and individual contributions. Django is a registered trademark of the Django Software Foundation.
        </div>
      </div>
    </div>
  );
};

export default Footer;
