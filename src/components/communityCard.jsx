import Image from "next/image";

const CommunityCard = ({ data }) => {
  return (
    <div className="bg-[#0C4B33] grid justify-center items-center pb-10 rounded-2xl h-[300px] w-[300px]">
      <Image className="h-40 w-40 mx-auto" src={data.img} alt=""/>
      <button className="text-white font-semibold text-lg underline">
        {data.text}
      </button>
    </div>
  );
};

export default CommunityCard;
