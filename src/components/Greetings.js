import React from 'react'
import PropTypes from 'prop-types'

const Greetings = ({ firstName, lastName }) => {
  return (
    <div>
          Hey you! {firstName} {lastName}!
    </div>
  )
}

Greetings.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
}

export default Greetings
