import React, { useState } from 'react'
import StepItem from './Item'
import './Steps.scss'

const Steps = () => {
  const [stepActive] = useState(2)

  return (
    <section className="step" data-testid="step">
      <div className="step__items">
        <StepItem number={1} text="Simule" active={stepActive} />
        <StepItem number={2} text="Preencha o cadastro" active={stepActive} />
        <StepItem number={3} text="Revise seu pedido" active={stepActive} />
        <StepItem number={4} text="Finalize seu pedido" active={stepActive} />
      </div>
    </section>
  )
}

export default Steps
