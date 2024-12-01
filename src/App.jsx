import Navbar from './sections/Navbar'
import Header from './sections/Header'
import Context from './sections/Context'
import Researchers from './sections/Researchers'
import ResearchLines from './sections/ResearchLines'
import Publishing from './sections/Publishing'
import Symposium from './sections/Symposium'
import Footer from './sections/Footer'

import { Carousel } from './components'
import './App.css'

export default function App() {
  const items = [
    {
      title: "Formação de Professores e Oferta de Serviços de Atendimento Educacional Especializado em um município paulista de médio porte",
      category: "Projeto de Pesquisa",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "História e Política da Educação Especial em Hortolândia / SP: análise documental dos marcos normativos publicados entre 1991 e 2021",
      category: "Projeto de Pesquisa",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Educação Especial e Políticas Públicas de Financiamento da Educação Profissional Técnica e Tecnológica",
      category: "Projeto de Pesquisa",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "A Educação Especial e a matrícula de estudantes da Educação Profissional Técnica e Tecnológica no IFSP",
      category: "Projeto de Pesquisa",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "II Semana de Direitos Humanos e Educação Inclusiva",
      category: "Evento de Extensão",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "I Simpósio de Política e Gestão da Educação Especial(SPGEEs)",
      category: "Evento de Extensão",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "II Simpósio de Política e Gestão da Educação Especial(SPGEE)",
      category: "Evento de Extensão",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Educação em Direitos Humanos",
      category: "Curso de Extensão",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Elaboração de Projeto de Pesquisa",
      category: "Curso de Extensão",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Educação Especial na Perspectiva Inclusiva: da Educação Básica ao Ensino Superior",
      category: "Curso de Extensão",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Direitos Humanos para Crianças Pequenas",
      category: "Edital Futuro de Extensão",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Laboratório de Política e Gestão da Educação Especial: Eixo Extensão",
      category: "Edital Futuro de Extensão",
      image: "https://via.placeholder.com/300x200"
    },
  ];

  return (
    <div>
      <Navbar />
      <Header />
      <Context />
      <Researchers />
      <ResearchLines />
      <Carousel items={items} />
      <Publishing />
      <Symposium />
      <Footer />
    </div>
  )
}
