import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


// teste - ajustar antes de entregar a versão final
import imageteste from '../assets/images/teste.png'

const researchers = [
    { id: 1, lattes: '', name: 'Samuel Vinente', role: 'Líder de pesquisa', image: imageteste },
    { id: 2, lattes: '', name: 'Waldisia Lima', role: 'Líder de pesquisa', image: imageteste },
    { id: 3, lattes: '', name: 'Ana Paula Barros', role: 'Pesquisador', image: imageteste },
    { id: 4, lattes: '', name: 'Bruno Freitas', role: 'Pesquisador', image: imageteste },
    { id: 5, lattes: '', name: 'Cleber Nogueira', role: 'Pesquisador', image: imageteste },
    { id: 6, lattes: '', name: 'Daiane Tomazeti', role: 'Pesquisador', image: imageteste },
    { id: 7, lattes: '', name: 'Eulalia Machado', role: 'Pesquisador', image: imageteste },
    { id: 8, lattes: '', name: 'Gabriela Silva', role: 'Pesquisador', image: imageteste },
    { id: 9, lattes: '', name: 'Graciliana Leite', role: 'Pesquisador', image: imageteste },
    { id: 10, lattes: '', name: 'Graziela Ramos', role: 'Pesquisador', image: imageteste },
    { id: 11, lattes: '', name: 'Luzimar da Silva', role: 'Pesquisador', image: imageteste },
    { id: 12, lattes: '', name: 'Maravania Souza', role: 'Pesquisador', image: imageteste },
    { id: 13, lattes: '', name: 'Michele Barion', role: 'Pesquisador', image: imageteste },
    { id: 14, lattes: '', name: 'Rogério Lopes', role: 'Pesquisador', image: imageteste },
    { id: 15, lattes: '', name: 'Vagner do Nascimento ', role: 'Pesquisador', image: imageteste },
    { id: 16, lattes: '', name: 'Valdeci Guedes', role: 'Pesquisador', image: imageteste },
];

export default function Researchers() {
    return (
        <div className="carousel-container">
            <div className="carousel-container-title">
                <h2>Pesquisadores</h2>
                <p>Quem são os pesquisadores envolvidos? Conheça um pouco mais sobre cada um clicando abaixo.</p>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={6}
                breakpoints={{
                    420: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 5 },
                }}
            >
                {researchers.map((researcher) => (
                    <SwiperSlide key={researcher.id}>
                        <a href="">
                            <div className="card">
                                <img src={researcher.image} alt={researcher.name} />
                                <div className="legend">
                                    <h3>{researcher.name}</h3>
                                    <p>{researcher.role}</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};