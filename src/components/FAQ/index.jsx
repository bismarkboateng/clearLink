
import { FaqDropDown } from ".."
import { dropDown } from "../../../utils/data"

export default function index() {
  return (
    <section className="lg:w-[87.5%] mx-auto flex flex-row gap-10 mt-20">

     <section className="w-[50%]">
      <p className="text-blue-700 font-Inter tex-[13px] font-semibold">
        Support
      </p>
      <h1 className="text-gray-800 font-Inter font-semibold
      text-[40px] leading-[50px] mb-3 mt-3">
        FAQs
      </h1>
      <p className="font-Inter text-gray-500 text-base">
      Everything you need to know about the product and billing.
      Can’t find the answer you’re looking for? Please chat to our friendly team.
      </p>
     </section>

     <section className="w-[50%]">
      {dropDown.map(item => (<FaqDropDown key={item.id} item={item} />))}
     </section>
    </section>
  )
}
