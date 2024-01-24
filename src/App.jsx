import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa"


import { 
  Navbar, Herosection, Companies,
  Choose, Shopify, FAQ, Communication, Footer
} from "./components"

export default function App() {
  return (
    <main>
     <section className="bg-bg-pattern">
      <Navbar />
      <Herosection />
     </section>
     <Companies />
     <Choose />
     <Shopify />
     <FAQ />
     <Communication />
     <Footer />
     <section className="bg-gray-50 py-12">
      <section className="lg:w-[87.5%] mx-auto flex flex-row justify-between">
        <p className="text-gray-500 font-Inter text-sm">
         © 2023 ClearLink. All rights reserved.
        </p>

        <div className="flex flex-row items-center gap-5">
         <FaLinkedin fontSize={22} className="text-gray-400"/>
         <FaTwitter  fontSize={22} className="text-gray-400"/>
         <FaFacebook  fontSize={22} className="text-gray-400"/>
         <FaInstagram  fontSize={22} className="text-gray-400"/>
         <FaGithub fontSize={22} className="text-gray-400" />
         <FaYoutube  fontSize={22} className="text-gray-400"/>
        </div>
      </section>
    </section>
    </main>
  )
}
