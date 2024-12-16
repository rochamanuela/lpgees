import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { 
    AnaBarros,
    BrunoFreitas,
    CleberNogueira,
    DaianeTomazetti,
    EulaliaMachado,
    GracilianaLeite,
    GrazielaRamos,
    MaravaniaSouza,
    MicheleBarion,
    RogerioLopes,
    SamuelVinente,
    VagnerMachado,
    ValdeciSantos,
    WaldisiaLima,
    Undefined,
    GabrielaSilva
 } from '../assets/images';

const researchers = [
    { id: 1, lattes: 'http://lattes.cnpq.br/9897424792722413', name: 'Samuel Vinente', role: 'Líder de pesquisa', image: SamuelVinente },
    { id: 2, lattes: 'http://lattes.cnpq.br/4899507078393026', name: 'Waldisia Lima', role: 'Líder de pesquisa', image: WaldisiaLima },
    { id: 3, lattes: 'http://lattes.cnpq.br/4191252261770638', name: 'Ana Paula Barros', role: 'Pesquisador', image: AnaBarros },
    { id: 4, lattes: 'http://lattes.cnpq.br/8624648555654769', name: 'Bruno Freitas', role: 'Pesquisador', image: BrunoFreitas },
    { id: 5, lattes: 'http://lattes.cnpq.br/5544165876951680', name: 'Cleber Nogueira', role: 'Pesquisador', image: CleberNogueira },
    { id: 6, lattes: 'http://lattes.cnpq.br/7702885820296754', name: 'Daiane Tomazeti', role: 'Pesquisador', image: DaianeTomazetti },
    { id: 7, lattes: 'http://lattes.cnpq.br/6529537651767294', name: 'Eulalia Machado', role: 'Pesquisador', image: EulaliaMachado },
    { id: 8, lattes: 'http://lattes.cnpq.br/1237687385928663', name: 'Gabriela Silva', role: 'Pesquisador', image: GabrielaSilva },
    { id: 9, lattes: 'http://lattes.cnpq.br/8318458556808830', name: 'Graciliana Leite', role: 'Pesquisador', image: GracilianaLeite },
    { id: 10, lattes: 'http://lattes.cnpq.br/6275768851911237', name: 'Graziela Ramos', role: 'Pesquisador', image: GrazielaRamos },
    { id: 11, lattes: '', name: 'Luzimar da Silva', role: 'Pesquisador', image: Undefined },
    { id: 12, lattes: 'http://lattes.cnpq.br/1360201030673202', name: 'Maravania Souza', role: 'Pesquisador', image: MaravaniaSouza },
    { id: 13, lattes: 'http://lattes.cnpq.br/6182218641173907', name: 'Michele Barion', role: 'Pesquisador', image: MicheleBarion },
    { id: 14, lattes: 'http://lattes.cnpq.br/4537914171363345', name: 'Rogério Lopes', role: 'Pesquisador', image: RogerioLopes },
    { id: 15, lattes: '', name: 'Vagner do Nascimento ', role: 'Pesquisador', image: VagnerMachado },
    { id: 16, lattes: 'http://lattes.cnpq.br/1251135151588042', name: 'Valdeci Guedes', role: 'Pesquisador', image: ValdeciSantos },
];

export default function Researchers() {
    return (
        <div className="carousel-container" id="researchers">
            <div className="carousel-container-title">
                <h2>Pesquisadores</h2>
                <p>Quem são os pesquisadores envolvidos? Conheça um pouco mais sobre cada um clicando abaixo.</p>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={7}
                breakpoints={{
                    100: { slidesPerView: 1 },
                    420: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 5 },
                    1440: { slidesPerView: 6 },
                }}
            >
                {researchers.map((researcher) => (
                    <SwiperSlide key={researcher.id}>
                        <a href={`${researcher.lattes}`}>
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