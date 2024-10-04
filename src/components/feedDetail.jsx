const FeedDetail = ({ data }) => {
    return (
      <div className="text-gray-300 my-6">
        {data.map((info, index) => (
          <div key={index} className="my-8">
            <div className="text-[#98e1c5] font-light">{info.heading}</div>
            <div className="text-sm font-light">{info.datetime}</div>
          </div>
        ))}
        <div className="text-xs text-[#98e1c5]">View more or Add your feed</div>
      </div>
    );
  };
  
  export default FeedDetail;
  