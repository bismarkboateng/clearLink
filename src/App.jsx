
import { 
  Navbar, Herosection, Companies,
  Choose
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
    </main>
  )
}
