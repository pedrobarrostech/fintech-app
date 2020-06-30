import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated as a } from 'react-spring'
import './Item.scss'

const renderSpanText = (style, text, value) => {
  if (text) {
    return (
      <span className={ style }>
        { text }
        <span className="header__item__value">{ value }</span>
      </span>
    )
  }
}

const HeaderItem = ({ className = '', prefix, suffix, suffixValue, text }) => {
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
    <a.div style={ animation } className={`${className} header__item`}>
      { renderSpanText('header__item__prefix', prefix) }
      { text }
      { renderSpanText('header__item__suffix', suffix, suffixValue) }
    </a.div>
  )
}

HeaderItem.propTypes = {
  className: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  suffixValue: PropTypes.string,
  text: PropTypes.string
}

export default HeaderItem
