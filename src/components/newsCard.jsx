const NewsCard = ({ data }) => {
  return (
    <div className="mt-12">
      <div className="text-2xl text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] cursor-pointer mt-5 leading-10">
        {data.title}
      </div>
      <div className="flex flex-wrap text-sm font-light text-gray-700 dark:text-gray-300 gap-1 mt-4">
        <span className="inline-block whitespace-nowrap">Posted by</span>
        <span className="inline-block font-semibold whitespace-nowrap">
          {data.postedby}
        </span>
        <span className="inline-block">on</span>
        <span className="inline-block whitespace-nowrap">{data.date}</span>
      </div>
      <div className="font-custom text-gray-700 dark:text-gray-300 mt-5 text-lg">
        {data.detail}
      </div>
      <button className="text-[#4bb78c] dark:text-[#95d5bb] hover:text-[#60c29b] font-semibold text-sm my-10">
        READ MORE
      </button>
      <div className="h-[1px] bg-gray-300 dark:bg-white"></div>
    </div>
  );
};

export default NewsCard;
