import React, {Component} from 'react'
import {connect} from 'react-redux'

class CodeTyping extends Component {
  render() {
    return <p>Code Typing</p>
  }
}

const mapStateToProps = (state) => {
  return {code: state.codeTyping.code}
}

export default connect(mapStateToProps)(CodeTyping)
