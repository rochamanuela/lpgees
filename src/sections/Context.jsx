import React from 'react'
import Hand from '../assets/vectors/context-image.svg'
import Hands from '../assets/vectors/hands.svg'
import Person from '../assets/vectors/icon-person.svg'
import Work from '../assets/vectors/icon-work.svg'
import Alvo from '../assets/vectors/icon-alvo.svg'

export default function Context() {
    return (
        <div className="container-context" id="context">
            <section>
                <div className="child">
                    <h1 className="title">Contextualizando</h1>
                    <p className="text">A produção científica em Educação Especial tem grande destaque nas universidades paulistas. Entretanto, no Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP), o número de grupos de pesquisa nessa área ainda é limitado. Linhas de pesquisa existem, mas são raros os grupos que focam em temas como história, política e gestão dessa modalidade de ensino.</p>
                </div>
                <img src={Hand} alt="" />
            </section>
            <section className="middle">
                <div className="child">
                    <h1 className="title">O Papel do LPGEES</h1>
                    <p className="text">O Laboratório de Política e Gestão da Educação Especial (LPGEEs) surge como resposta a essa lacuna, com uma abordagem interdisciplinar.<br /><br />
                        Assim, o LPGEEs possui algumas prioridades, sendo elas: Captação de recursos para fomentar pesquisas e inovações, estudos aprofundados sobre História, Política e Gestão da Educação Especial (Educação Básica e Ensino Superior) e formação continuada de profissionais que atuam com o público-alvo da Educação Especial.</p>
                </div>
                <div className="child">
                    <div className="highlights">
                        <img src={Person} alt="" />
                        <div className="description">
                            <p><b>Público alvo</b></p>
                            <p>Profissionais do Núcleo de Atendimento às Pessoas com Necessidades Educacionais Específicas (NAPNE) e demais membros da comunidade acadêmica</p>
                        </div>
                    </div><br />
                    <div className="highlights">
                        <img src={Work} alt="" />
                        <div className="description">
                            <p><b>Campus envolvidos</b></p>
                            <p>Hortolândia, Cubatão e Araraquara.</p>
                        </div>
                    </div><br />
                    <div className="highlights">
                        <img src={Alvo} alt="" />
                        <div className="description">
                            <p><b>Objetivos principais do LPGEEs</b></p>
                            <p>1. Institucionalizar ações de ensino, pesquisa e extensão. <br />
                                2. Atender à crescente demanda por formação continuada em Educação Especial.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <img src={Hands} alt="" />
                <div className="child">
                    <h1 className="title">Acessibilidade em Foco</h1>
                    <p className="text">O laboratório dedica-se à pesquisa e ao desenvolvimento de soluções inclusivas e inovadoras para superar barreiras que comprometem a acessibilidade, como as arquitetônicas, atitudinais, tecnológicas e comunicacionais. Seu objetivo é fomentar um ambiente mais acessível e equitativo para todos. <br /><br />
                        <b>Objetivo:</b> Promover um ambiente educacional inclusivo e acessível, alinhado às necessidades de uma sociedade diversa.</p>
                </div>
            </section>
        </div>
    )
}
