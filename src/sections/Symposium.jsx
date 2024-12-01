import React from 'react'

import {
    AnaDaltros,
    AntonioAntonio,
    AtaxerxesModesto,
    BrunoSantos,
    CarolineJango,
    CeliaRodrigues,
    DanielFerreira,
    DelfinaBenjamin,
    GustavoPiccolo,
    KatiaPetelin,
    LuizAlmeida,
    MarcosFreitas,
    MariaCosta,
    MarianaLopes,
    MarilyBarbosa,
    MonicaSantos,
    RejaneCorreia,
    RenataFlores,
    SamuelVinente,
    ValdeciSantos,
    WaldisiaLima,
} from '../assets/images';

export default function Symposium() {
    const people = [
        { id: 1, image: AnaDaltros, name: "Ana Daltros" },
        { id: 2, image: AntonioAntonio, name: "Antonio Antonio" },
        { id: 3, image: AtaxerxesModesto, name: "Ataxerxes Modesto" },
        { id: 4, image: BrunoSantos, name: "Bruno Santos" },
        { id: 5, image: CarolineJango, name: "Caroline Jango" },
        { id: 6, image: CeliaRodrigues, name: "Celia Rodrigues" },
        { id: 7, image: DanielFerreira, name: "Daniel Ferreira" },
        { id: 8, image: DelfinaBenjamin, name: "Delfina Benjamin" },
        { id: 9, image: GustavoPiccolo, name: "Gustavo Piccolo" },
        { id: 10, image: KatiaPetelin, name: "Katia Petelin" },
        { id: 11, image: LuizAlmeida, name: "Luiz Almeida" },
        { id: 12, image: MarcosFreitas, name: "Marcos Freitas" },
        { id: 13, image: MariaCosta, name: "Maria Costa" },
        { id: 14, image: MarianaLopes, name: "Mariana Lopes" },
        { id: 15, image: MarilyBarbosa, name: "Marily Barbosa" },
        { id: 16, image: MonicaSantos, name: "Monica Santos" },
        { id: 17, image: RejaneCorreia, name: "Rejane Correia" },
        { id: 18, image: RenataFlores, name: "Renata Flores" },
        { id: 19, image: SamuelVinente, name: "Samuel Vinente" },
        { id: 20, image: ValdeciSantos, name: "Valdeci Santos" },
        { id: 21, image: WaldisiaLima, name: "Waldisia Lima" },
    ]

    return (
        <div className="symposium-container" id="symposium">
            <h1>Simpósios</h1>
            <p>Você sabe o que é um simpósio? Simpósio é um evento
                acadêmico, científico ou profissional onde especialistas,
                pesquisadores, estudantes e outros interessados se reúnem
                para discutir, apresentar e debater temas específicos de
                uma área de conhecimento ou um tema central. O objetivo
                principal é promover o compartilhamento de informações,
                experiências e descobertas, além de fomentar debates e
                a construção de conhecimento coletivo.</p>

            <h2>Simpósio - Edição 2024</h2>
            <p className="link"><a href="https://forms.gle/K8ctZphbXCV3cjwf8">Clique aqui</a> para participar</p>

            <h3>Conheça os simposistas já confirmados</h3>
            <div className="people">
                {people.map((item) => (
                    <div className="item" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>

            <h2>Simpósio - Edição 2023</h2>
            <div className="videos">
                <iframe src="https://www.youtube.com/embed/v1M7_M44wY8?si=MpE_wvAQ3Kdja_UD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/mY_JNWU7IUA?si=nd_cKfJI-b6lkEkG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/RUwrBSQ_yC8?si=QmYV1TPaZEg3d3Ol" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/4i_6T8HOixA?si=3K_5iACw9dOBiyId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}
