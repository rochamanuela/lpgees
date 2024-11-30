import React from 'react'
import { LineCard } from '../components'

import IconGroup from '../assets/vectors/icon-group.svg'
import IconSchool from '../assets/vectors/icon-school.svg'
import IconBook from '../assets/vectors/icon-book.svg'
import IconHourGlass from '../assets/vectors/icon-hour-glass.svg'

export default function ResearchLines() {
  return (
    <div className="research-lines-container">
      <p className="title">Linhas de Pesquisa</p>
      <div className="cards">
        <LineCard
          icon={IconGroup}
          text="Políticas Públicas, História e Gestão da Educação Especial"
          backgroundColor="#D8DFF5"
        />
        <LineCard
          icon={IconSchool}
          text="Formação continuada de professores e demais profissionais em Educação Especial"
          backgroundColor="#FCE6D5"
        />
        <LineCard
          icon={IconBook}
          text="Inovação em Educação Especial e construção/adaptação de materiais didáticos acessíveis"
          backgroundColor="#D8DFF5"
        />
        <LineCard
          icon={IconHourGlass}
          text="Histórias de vida, Educação e Trabalho de estudantes público-alvo da Educação Especial"
          backgroundColor="#FCF5D9"
        />
      </div>
    </div>
  )
}
