import { useState } from "react"

import { Add, Remove } from "../../assets"

export default function index({ item }) {
    const [open, setOpen] = useState(false)

    const onClickHandler = () => {
        setOpen(prevOpen => !prevOpen)
        console.log(open)
    }

    return (
    <section className={`bg-white border-t border-b 
    ${open ? 'bg-gray-200 rounded-md border border-gray-200 pb-5 mt-2' : '' }` }>
      <div className="flex flex-row justify-between items-center
       p-5">
        <p className="text-gray-900 font-Inter text-base font-medium">
         {item.title}
        </p>
        { open ? (
        <img
         src={Remove} 
         alt="add"
         className="w-[24px] h-[24px] cursor-pointer"
         onClick={onClickHandler}
        />
        ) : (
        <img
         src={Add} 
         alt="add"
         className="w-[24px] h-[24px] cursor-pointer"
         onClick={onClickHandler}
        />
        ) }
      </div>
      {open && (
        <p className="font-Inter text-gray-600 text-xs leading-5 pl-5 pr-5
        w-[90%]">
         ClearLink offers flexible meeting options. Depending on your subscription plan,
         you can host meetings with varying numbers of participants. Our plans are designed to
         accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
        </p>
      )}
    </section>
  )
}
