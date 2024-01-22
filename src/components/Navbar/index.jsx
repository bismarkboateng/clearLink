import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { Logo } from "../../assets"

export default function index() {
  return (
    <nav className="py-[8px] px-[15px] px-8 xl:w-[90%] mx-auto mt-8
    flex flex-row items-center bg-gray-100 rounded-full border">
     <div className="flex flex-row items-center gap-2 mr-auto">
      <div className="w-[26px] h-[28px]">
        <img
          src={Logo}
          alt="clear link logo"
          className="object-cover"
        />
      </div>
      <p className="text-[19px] font-Inter 
      font-semibold leading-[29.05px]">ClearLink<span className="text-[#528BFF]">.</span></p>
     </div>

     <ul className="flex flex-row items-center gap-8 mr-auto">
      <li className="flex flex-row items-center gap-1 cursor-pointer
       font-Inter text-gray-500">
        <p className="text-[15px] font-semibold leading-7">Products</p>
        <i>
          <MdOutlineKeyboardArrowDown fontSize={20} />
        </i>
      </li>

      <li className="flex flex-row items-center gap-1 cursor-pointer
       font-Inter text-gray-500">
        <p className="text-[15px] font-semibold leading-7">Solutions</p>
        <i>
          <MdOutlineKeyboardArrowDown fontSize={20} />
        </i>
      </li>

      <li className="flex flex-row items-center gap-1 cursor-pointer
       font-Inter text-gray-500">
        <p className="text-[15px] font-semibold leading-7">Resources</p>
        <i>
          <MdOutlineKeyboardArrowDown fontSize={20} />
        </i>
      </li>

      <li className="flex flex-row items-center gap-1 cursor-pointer
       font-Inter text-gray-500">
        <p className="text-[15px] font-semibold leading-7">Pricing</p>
      </li>
     </ul>

     <section>
      <button className="border border-gray-400 text-sm bg-white py-[5px] px-[20px]
      rounded-full text-gray-900 font-Inter mr-3">
        Talk to sales
      </button>
      <button className="border bg-blue-700 text-sm py-[5px] px-[20px]
      rounded-full text-gray-900 font-Inter text-white">
        Sign up for free
      </button>
     </section>
    </nav>
  )
}