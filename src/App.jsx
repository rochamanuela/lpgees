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

import Project1 from './assets/projectsImages/project-1.jpg' // <a href="https://br.freepik.com/fotos-gratis/todos-estao-sorrindo-e-ouvindo-grupo-de-pessoas-em-conferencia-de-negocios-em-sala-de-aula-moderna-durante-o-dia_9694503.htm#fromView=search&page=1&position=10&uuid=b5f1b093-31b4-45b1-a0d6-53980dfaee56">Imagem de standret no Freepik</a>
import Project2 from './assets/projectsImages/project-2.jpg' // <a href="https://br.freepik.com/fotos-gratis/menina-ajudando-um-colega-em-cadeira-de-rodas-a-escolher-um-livro-para-um-projeto_12296571.htm#fromView=search&page=1&position=6&uuid=d1098b3d-2e6f-48cd-a37d-0bcf45bec441">Imagem de freepik</a>
import Project3 from './assets/projectsImages/project-3.jpg' // <a href="https://br.freepik.com/fotos-gratis/proposta-de-negocios-maos-segurando-dinheiro_17229629.htm#fromView=search&page=1&position=19&uuid=9fab44a0-4d65-4657-b2e8-691c588a178a">Imagem de rawpixel.com no Freepik</a>
import Project4 from './assets/projectsImages/project-4.jpg' // <a href="https://br.freepik.com/fotos-gratis/homem-tocando-uma-tela-virtual-futurista-remix-de-tecnologia-digital_15667670.htm#fromView=search&page=1&position=20&uuid=a656faab-2097-4d04-8eea-d48458a17476">Imagem de rawpixel.com no Freepik</a>
import Project5 from './assets/projectsImages/project-5.jpg' // <a href="https://br.freepik.com/fotos-gratis/pessoas-em-tiro-medio-protestando-com-mascaras_14370978.htm#fromView=search&page=1&position=42&uuid=25841709-532e-4788-a69d-8f047560c207">Imagem de freepik</a>
import Project6 from './assets/projectsImages/project-6.jpg' // <a href="https://br.freepik.com/fotos-gratis/grupo-de-jovens-sentados-na-conferencia-enquanto-levantam-as-maos-para-fazer-uma-pergunta-conceito-de-treinamento-de-seminario-reuniao-de-equipe-de-negocios_10928846.htm#fromView=search&page=1&position=48&uuid=c746c3ab-1d6e-49bc-af01-4f08898183ed">Imagem de mego-studio no Freepik</a>
import Project7 from './assets/projectsImages/project-7.jpg' // <a href="https://br.freepik.com/fotos-gratis/grupo-de-jovens-sentados-juntos-na-conferencia_9341662.htm#fromView=search&page=1&position=28&uuid=042433c7-7157-4cb9-916d-c700b907deab">Imagem de mego-studio no Freepik</a>
import Project8 from './assets/projectsImages/project-8.jpg' // <a href="https://br.freepik.com/fotos-gratis/amigos-de-escola-felizes-segurando-um-globo-terrestre_11236683.htm#fromView=search&page=1&position=36&uuid=acf09601-9c56-4207-ab04-f97b8cb1349b">Imagem de freepik</a>
import Project9 from './assets/projectsImages/project-9.jpg' // <a href="https://br.freepik.com/fotos-gratis/jovem-equipe-de-colegas-de-trabalho-trabalhando-no-projeto_10421270.htm#fromView=search&page=1&position=4&uuid=17b806de-0c10-4abc-8280-ad14651ef10f">Imagem de wayhomestudio no Freepik</a>
import Project10 from './assets/projectsImages/project-10.jpg' // <a href="https://br.freepik.com/fotos-gratis/vista-frontal-de-cartas-em-cubos-com-sessao-de-tutoria-desfocada-nas-costas_7871279.htm#fromView=search&page=1&position=2&uuid=c8f485c9-a914-4e4f-acc6-5555d386c6f8">Imagem de freepik</a>
// import Project11 from './assets/projectsImages/project-11.jpg' //
import Project12 from './assets/projectsImages/project-12.jpg' //<a href="https://br.freepik.com/fotos-gratis/ampulheta-vintage-no-fundo-desfocado-da-mulher-o-conceito-de-gerenciamento-de-tempo_20250217.htm#fromView=search&page=1&position=11&uuid=12eeccb1-aa6c-4897-8ed8-98706d56f36f">Imagem de pvproductions no Freepik</a>


export default function App() {
  const items = [
    {
      title: "Formação de Professores e Oferta de Serviços de Atendimento Educacional Especializado em um município paulista de médio porte",
      category: "Projeto de Pesquisa",
      image: Project1
    },
    {
      title: "História e Política da Educação Especial em Hortolândia / SP: análise documental dos marcos normativos publicados entre 1991 e 2021",
      category: "Projeto de Pesquisa",
      image: Project2
    },
    {
      title: "Educação Especial e Políticas Públicas de Financiamento da Educação Profissional Técnica e Tecnológica",
      category: "Projeto de Pesquisa",
      image: Project3
    },
    {
      title: "A Educação Especial e a matrícula de estudantes da Educação Profissional Técnica e Tecnológica no IFSP",
      category: "Projeto de Pesquisa",
      image: Project4
    },
    {
      title: "II Semana de Direitos Humanos e Educação Inclusiva",
      category: "Evento de Extensão",
      image: Project5
    },
    {
      title: "I Simpósio de Política e Gestão da Educação Especial(SPGEEs)",
      category: "Evento de Extensão",
      image: Project6
    },
    {
      title: "II Simpósio de Política e Gestão da Educação Especial(SPGEE)",
      category: "Evento de Extensão",
      image: Project7
    },
    {
      title: "Educação em Direitos Humanos",
      category: "Curso de Extensão",
      image: Project8
    },
    {
      title: "Elaboração de Projeto de Pesquisa",
      category: "Curso de Extensão",
      image: Project9
    },
    {
      title: "Educação Especial na Perspectiva Inclusiva: da Educação Básica ao Ensino Superior",
      category: "Curso de Extensão",
      image: Project10
    },
    {
      title: "Direitos Humanos para Crianças Pequenas",
      category: "Edital Futuro de Extensão",
      image: Project12
    },
    {
      title: "Laboratório de Política e Gestão da Educação Especial: Eixo Extensão",
      category: "Edital Futuro de Extensão",
      image: Project12
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
