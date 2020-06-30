import React from 'react'
import HeaderItem from './Item/index'
import './Header.scss'

const Header = () => (
  <section className="header" data-testid="header">
    <div className="header__items">
      <HeaderItem prefix="Me chamo:" text="Paul Irish" suffix="CPF: " suffixValue={'762.888.176-92'} className="header__item--first" />
      <HeaderItem prefix="Preciso de:" text="R$ 2.000" />
      <HeaderItem prefix="Quero pagar em" text="12 vezes" />
      <HeaderItem prefix="Para:" text="Comprar uma bike" className="header__item--last" />
    </div>
  </section>
)

export default Header
