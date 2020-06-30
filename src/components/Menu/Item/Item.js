import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated as a } from 'react-spring'
import './Item.scss'

const MenuItem = ({ href, label }) => {
  const animation = useSpring({
    from: {
      opacity: 0,
      marginLeft: -100
    },
    to: {
      opacity: 1,
      marginLeft: 0
    },
    delay: 300
  })

  return (
    <a.li
      style={ animation }
      className="menu__item"
    >
      <a
        className="menu__item__link"
        href={ href }>
        { label }
      </a>
    </a.li>
  )
}


MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default MenuItem
