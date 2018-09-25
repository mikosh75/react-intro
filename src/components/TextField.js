import React from 'react'
import style from './style'
import PropTypes from 'prop-types'

const TextField = ({ name, onChange, onBlur, error, label }) => (
  <div style={style.inputGroup}>
    <label>
      {label}
      <input
        style={style.input}
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div style={style.error}>{error}</div>}
    </label>
  </div>
)

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default TextField
