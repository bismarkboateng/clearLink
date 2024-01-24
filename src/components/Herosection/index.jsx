import { Bot, Avatar, Rating } from "../../assets"
import { imageData, icons } from "../../../utils/data"

export default function index() {
  return (
    <section className="flex flex-row items-center lg:w-[87.5%] mx-auto
      mt-32">
      <section className="w-[50%] mr-auto">
       <h1 className="text-[58px] font-Inter text-gray-800 font-medium
        leading-[60px] w-[100%]">
        Uniting the world,one video call at a time
       </h1>
       <p className="text-gray-500 font-Inter text-base w-[75%] leading-6
       mt-5 mb-7">
       Experience the future of communication with ClearLink – 
       where crystal-clear video conferencing meets unparalleled simplicity.
       </p>
       <div className="flex flex-row items-center gap-5">
        <button className="border bg-blue-700 text-sm py-[8px] px-[20px]
         rounded-full text-gray-900 font-Inter text-white outline-none">
         Start your free trial
        </button>
        <div className="flex flex-row items-center gap-2">
          <img src={Bot} alt="ai bot" className="w-[20px] h-[20px]" />
          <p className="text-blue-700 font-Inter text-sm leading-7">
            Discover AI assistant
          </p>
        </div>
       </div>

       <div className="flex flex-row items-center gap-3 mt-6">
        <div className="w-[156px] h-[44px]">
          <img src={Avatar} alt="avatar group" className="object-cover" />
        </div>
        <div>
          <div className="flex flex-row items-center gap-2">
            <img src={Rating} alt="ratings" />
            <p className="text-base font-Inter text-gray-700">5.0</p>
          </div>
          <p className="text-gray-600 text-base font-Inter">
            from 3,000+ reviews
          </p>
        </div>
       </div>
      </section>

      <section className="bg-blue-50 border border-blue-100 grid grid-cols-3
      gap-x-3 gap-y-3 p-8 rounded w-[40%] shadow-avatar-shadow">
        {imageData.map(image => (
          <img
            src={image.image}
            alt="avatar"
            className="w-[128px] rounded-xl"
          />
        ))}
        <div className="grid grid-cols-6 gap-x-10 ml-20 mt-3">
          {icons.map(icon => (
            <div className="w-[35px] h-[35px] bg-white flex
              justify-center items-center rounded-full border border-blue-100
              " key={icon.id}>
              <img src={icon.image} alt="microphone" className="cursor-pointer" />
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
