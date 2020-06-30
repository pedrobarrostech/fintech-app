import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated as a } from 'react-spring'
import './Item.scss'

const StepItem = ({ number, active, text }) => {
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
    <a.div
      style={ animation }
      className={`step__item 
                  ${active === number ? 'active' : ''} 
                  ${active > number ? 'visited' : ''} `}
    >
      <span
        className="step__item-number"
      >
        { number }
      </span>
      <span className="step__item-text">
        { text }
      </span>
    </a.div>
  )
}
StepItem.propTypes = {
  number: PropTypes.number,
  active: PropTypes.number,
  text: PropTypes.string
}

export default StepItem
