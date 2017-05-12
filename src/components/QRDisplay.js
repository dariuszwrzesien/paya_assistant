import React, {Component} from 'react'
import PropTypes from 'prop-types'
const QRCode = require('qrcode.react')

class QRDisplay extends Component {
  render () {
    return (
      <QRCode value={this.props.value} />
    )
  }
}

QRDisplay.propTypes = {
  value: PropTypes.string.isRequired
}

export default QRDisplay
