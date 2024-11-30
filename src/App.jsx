import Navbar from './sections/Navbar'
import Header from './sections/Header'
import Context from './sections/Context'
import ResearchLines from './sections/ResearchLines'
import Publishing from './sections/Publishing'
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Context />
      <ResearchLines />
      <Publishing />
    </div>
  )
}
