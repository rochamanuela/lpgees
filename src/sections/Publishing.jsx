import React from 'react'
import { PublicationCard } from '../components'

export default function Publishing() {
    return (
        <div className="publishing-container" id="publications">
            <h1>O LPGEE já realizou algumas publicações, e pretende continuar</h1>
            <div className="publishing-cards">
                <PublicationCard
                    title="O Plano Nacional de Educação e a Política de Inclusão Escolar"
                    link="https://www.amazon.com.br/Nacional-Educa%C3%A7%C3%A3o-Pol%C3%ADtica-Inclus%C3%A3o-Escolar/dp/6202032219"
                />
                <PublicationCard
                    title="Educação Profissional e Tecnológica e Educação Especial em diferentes contextos"
                    link="https://drive.google.com/file/d/19J9Mocda6zoX2WzXKs1yvaLbDtI88vjh/view?usp=sharing"
                />
                <PublicationCard
                    title="Educação Especial em Manaus: história, políticas e serviços"
                    link="https://drive.google.com/file/d/1hExs9sXdUdV9qsRRSkCs4veI5cEh6JLF/view"
                />
                <PublicationCard
                    title="Pessoas com deficiência egressas da EJA: narrativas sobre a escola, família e transição para o mundo do trabalho"
                    link="https://atenaeditora.com.br/catalogo/ebook/pessoas-com-deficiencia-egressas-da-eja-narrativas-sobre-a-escola-familia-e-transicao-para-o-mundo-do-trabalho"
                />
            </div>
        </div>
    )
}
