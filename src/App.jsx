import Navbar from './sections/Navbar'
import Header from './sections/Header'
import Context from './sections/Context'
import ResearchLines from './sections/ResearchLines'
import Publishing from './sections/Publishing'
import Symposium from './sections/Symposium'

import { Carousel } from './components'
import './App.css'

export default function App() {
  const items = [
    {
      title: "Formação de Professores e Oferta de Serviços de Atendimento Educacional Especializado em um município paulista de médio porte.",
      category: "Projeto de Pesquisa",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Outro Projeto Interessante",
      category: "Pesquisa Avançada",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Formação de Professores e Oferta de Serviços de Atendimento Educacional Especializado em um município paulista de médio porte.",
      category: "Projeto de Pesquisa",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Outro Projeto Interessante",
      category: "Pesquisa Avançada",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Formação de Professores e Oferta de Serviços de Atendimento Educacional Especializado em um município paulista de médio porte.",
      category: "Projeto de Pesquisa",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Outro Projeto Interessante",
      category: "Pesquisa Avançada",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header />
      <Context />
      <ResearchLines />

      {/* ainda será separado */}
      <Carousel items={items} />
      <Publishing />
      <Symposium />
    </div>
  )
}
