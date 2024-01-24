
import { ChooseCard } from ".."
import { chooseData } from "../../../utils/data"
import { ImageGrid, Vector } from "../../assets"

export default function index() {
  return (
    <section className="relative mt-32 lg:w-[87.5%] mx-auto">
     <p className="text-blue-700 font-Inter leading-6 text-[13px] font-semibold">
      The ClearLink Advantage
     </p>
     <h1 className="text-gray-800 font-Inter text-[40px] font-semibold">
      Why choose ClearLink?
     </h1>
     <p className="text-gray-500 font-Inter text-[17px] leading-6
       w-[45%]">
      In a world where connection is everything,
      ClearLink takes the lead. Our cutting-edge video conferencing app offers:
     </p>

     <img
      src={Vector}
      alt="vector line"
      className="absolute top-0 right-[20%]"
    />

     <section className="w-[100%] mt-14 flex flex-row justify-between
      gap-24">
      <div className="grid grid-cols-2 gap-x-10 gap-y-4
        w-[55%]">
        {chooseData.map(item => (
            <ChooseCard item={item} key={item.id} />
        ))}
      </div>
      <div className="w-[45%]">
        <img src={ImageGrid} alt="" className="" />
      </div>
     </section>

    </section>
  )
}
