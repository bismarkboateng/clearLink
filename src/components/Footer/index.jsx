
import { AppStore, GooglePlay, Logo } from "../../assets"
import { company, legal, products, resources } from "../../../utils/data"

export default function index() {

  const linkStyles = `text-gray-600 font-medium font-Inter
   cursor-pointer mb-2 cursor-pointer`
  return (
    <footer className="mt-24 flex flex-row
    lg:w-[87.5%] mx-auto">
     <div className="w-[30%] mr-24">
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
      <p className="text-gray-600 font-Inter text-base font-normal
         mt-5 w-full">
       ClearLink is your gateway to effortless, high-quality video conferencing.
       Join us in shaping the future of communication!
      </p>
     </div>

     <ul className="mr-24">
      <p className="text-base font-Inter text-gray-500 mb-3">Product</p>
      {products.map(product => (
        <li key={product.id} className={linkStyles}>{product.title}</li>
      ))}
     </ul>
    
     <ul className="mr-24">
      <p className="text-base font-Inter text-gray-500 mb-3">Company</p>
      {company.map(item => (
        <li key={item.id} className={linkStyles}>{item.title}</li>
      ))}
     </ul>

     <ul className="mr-24">
      <p className="text-base font-Inter text-gray-500 mb-3">Resources</p>
      {resources.map(item => (
        <li key={item.id} className={linkStyles}>{item.title}</li>
      ))}
     </ul>

     <ul className="mr-24">
      <p className="text-base font-Inter text-gray-500 mb-3">Legal</p>
      {legal.map(item => (
        <li key={item.id} className={linkStyles}>{item.title}</li>
      ))}
     </ul>

     <div className="">
      <p className="text-sm font-Inter text-[#004EEB]
      w-[100%] mb-3">Get the app</p>
      <img
        src={GooglePlay}
        alt="google play"
        className="mb-4 w-[136px]"
      />
      <img
        src={AppStore}
        alt="google play"
      />
     </div>
     
    </footer>
  )
}
