
import {
    Shopify, Rating, AvatarIcon,
    LeftArrow, RightArrow, ShopifyImage
} from "../../assets"

export default function index() {
  return (
    <section className="bg-gray-50 py-24 mt-24">
    <section className="flex flex-row items-center jusify-between
     lg:w-[87.5%] mx-auto gap-10">

      <section className="w-[50%]">
        <img
          src={Shopify}
          alt="shopify image"
          className="w-[110px] mb-9"
        />
        <img
          src={Rating}
          alt="ratings"
          className="mb-10"
        />
        <p className="text-gray-900 font-Inter font-medium leading-10
         text-3xl w-[100%]">
          ClearLink has upgraded our remote meetings. High-quality video, screen sharing,
          and top-notch security make it essential for our team.
        </p>

        <div className="flex flex-row items-center justify-between gap-3">
            <div className="flex flex-row items-center gap-2
             mt-10">
             <img src={AvatarIcon} alt="avatar icon" />
             <div>
                <p className="text-gray-900 font-Inter text-[17px]
                font-semibold leading-7">
                Sarah Thompson</p>
                <p className="text-gray-600 font-Inter text-[14px] leading-7">
                Project Manager</p>
             </div>
            </div>

            <div className="flex flex-row items-center gap-2 mt-10">
             <img src={LeftArrow} alt="left arrow" className="w-[40px] cursor-pointer" />
             <img src={RightArrow} alt="right arrow" className="w-[40px] cursor-pointer" />
            </div>
        </div>
      </section>

      <section className="w-[50%] h-[400px]">
        <img src={ShopifyImage} alt="shopify image" className="w-full h-full object-cover" />
      </section>
    </section>

    </section>
  )
}
