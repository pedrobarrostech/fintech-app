import React from 'react'
import MenuItem from './Item'
import './Menu.scss'

const Menu = () => {
  function menuAction () {
    var x = document.getElementById('menu')
    if (x.className === 'menu') {
      x.className += ' responsive'
    } else {
      x.className = 'menu'
    }
  }

  return (
    <nav className='menu' id='menu' data-testid='menu'>
      <div className='menu__button'>
        <button className='menu__button__icon' onClick={ () => menuAction() }>
          <i className='fa fa-bars'></i>
        </button>
      </div>
      <ul className='menu__items'>
        <MenuItem label='Dados Pessoais' href='/' />
        <MenuItem label='Lista' href='/list' />
        <MenuItem label='Como funciona' href='#' />
        <MenuItem label='Privacidade' href='#' />
        <MenuItem label='Ajuda' href='#' />
      </ul>
    </nav>
  )
}

export default Menu
