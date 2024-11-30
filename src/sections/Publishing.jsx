import React from 'react'
import { PublicationCard } from '../components'

export default function Publishing() {
    return (
        <div className="publishing-container">
            <h1>O LPGEE já realizou algumas publicações, e pretende continuar</h1>
            <div className="publishing-cards">
                <PublicationCard
                    title="O Plano Nacional de Educação e a Política de Inclusão Escolar"
                    link="https://music.youtube.com/watch?v=-NqnPNV-llk&list=RDATiYvcULQhvuq1Zc"
                />
                <PublicationCard
                    title="O Plano Nacional de Educação e a Política de Inclusão Escolar"
                    link="https://music.youtube.com/watch?v=-NqnPNV-llk&list=RDATiYvcULQhvuq1Zc"
                />
                <PublicationCard
                    title="O Plano Nacional de Educação e a Política de Inclusão Escolar"
                    link="https://music.youtube.com/watch?v=-NqnPNV-llk&list=RDATiYvcULQhvuq1Zc"
                />
            </div>
        </div>
    )
}
