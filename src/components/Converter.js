import React from 'react'

class Converter extends React.Component {
    constructor(props) {
      super(props)
      this.state = { currency: '€' }
    }
  
    handleChangeCurrency = (event) => {
      this.setState({ currency: this.state.currency === '€' ? '$' : '€' })
    }
  
    render() {
      return (
        <div>
          <Display currency={this.state.currency} />
          <CurrencySwitcher
            currency={this.state.currency}
            handleChangeCurrency={this.handleChangeCurrency} />
        </div>
      )
    }
  }
  
  const CurrencySwitcher = (props) => {
    return (
      <button onClick={props.handleChangeCurrency}>
        Current currency is {props.currency}. Change it!
      </button>
    )
  }
  
  const Display = (props) => {
    return (
      <p>Current currency is {props.currency}.</p>
    )
  }

  export default Converter