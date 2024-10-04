import Image from "next/image"
import loadinggif from '../../public/loadingfootball.gif'

const Loading = () => {
  return (
    <>
    <div className="h-screen w-full flex justify-center items-center">
      <Image src={loadinggif} height={150} width={150} alt="" />
    </div>
  </>
  )
}

export default Loading