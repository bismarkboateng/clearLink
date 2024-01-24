
import { CheckIcon, CommImage } from "../../assets"


export default function index() {
  const listItemWrapperStyles = `flex flex-row items-center gap-2`
  const listItemTextStyles = `text-gray-600 font-normal text-base`
  
  return (
    <section className="mt-32 ml-[6.5%] flex flex-row items-center
      gap-8">
      <section className="">
       <h3 className="text-gray-900 font-Inter text-[40px]
         leading-[40px] font-semibold">
        Ready to clear the path to perfect communication?
       </h3>

       <ul className="flex flex-col gap-3 mt-5 mb-7">
        <li className={listItemWrapperStyles}>
          <img src={CheckIcon} alt="check icon" className="w-[25px] h-[25px]" />
          <p className={listItemTextStyles}>30 days free trial</p>
        </li>
        <li className={listItemWrapperStyles}>
          <img src={CheckIcon} alt="check icon" className="w-[25px] h-[25px]" />
          <p className={listItemTextStyles}>Cancel at any time</p>
        </li>
        <li className={listItemWrapperStyles}>
          <img src={CheckIcon} alt="check icon" className="w-[25px] h-[25px]" />
          <p className={listItemTextStyles}>Access to all features</p>
        </li>
        <li className={listItemWrapperStyles}>
          <img src={CheckIcon} alt="check icon" className="w-[25px] h-[25px]" />
          <p className={listItemTextStyles}>Personalized onboarding</p>
        </li>
       </ul>

       <section>
         <button className="border border-gray-400 text-sm bg-white py-[7px] px-[20px]
          rounded-full text-gray-900 font-Inter mr-3">
          Talk to sales
        </button>
        <button className="border bg-blue-700 text-sm py-[7px] px-[20px]
          rounded-full text-gray-900 font-Inter text-white">
          Start your free trial
        </button>
      </section>
      </section>

      <section className="">
        <img
          src={CommImage}
          alt="communication image"
          className=""
        />
      </section>
    </section>
  )
}
