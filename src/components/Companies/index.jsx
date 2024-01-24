import {
  Shopify, Coinbase, Dropbox,
  Intercom, Marvel, Automattic
} from "../../assets"


export default function index() {
  return (
    <section className="lg:w-[87.5%] mx-auto mt-24 flex flex-col
     items-center">
     <p className="text-gray-600 text-sm font-Inter mb-7">
      Join 1,500+ companies already video conferencing the ClearLink way
     </p>
     <div className="flex flex-row items-center gap-20">
      <img src={Shopify} alt="shopify logo" className="w-[130px]" />
      <img src={Coinbase} alt="coinbase logo" className="w-[130px]" />
      <img src={Dropbox} alt="drop box logo" className="w-[130px]" />
      <img src={Intercom} alt="intercom logo" className="w-[130px]" />
      <img src={Marvel} alt="marvel logo" className="w-[100px]" />
      <img src={Automattic} alt="automattic logo" className="w-[160px]" />
     </div>
    </section>
  )
}
