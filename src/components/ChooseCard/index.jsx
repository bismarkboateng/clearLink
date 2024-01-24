
export default function index({ item }) {
  return (
    <section className="">
      <img src={item.icon} alt="video icon" className="w-[40px] mb-3" />
      <h3 className="font-Inter text-gray-900 text-base font-medium
       leading-8 mb-2">
        {item.title}
      </h3>
      <p className="text-gray-600 font-Inter text-sm leading-[19px]
        ">
        {item.desc}
      </p>
    </section>
  )
}
