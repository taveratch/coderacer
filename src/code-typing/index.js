import React, {Component} from 'react'
import {connect} from 'react-redux'
import CodeForm from './components/code-form'

class CodeTyping extends Component {
  render() {
    return (
      <CodeForm />
    )
  }
}

export default connect()(CodeTyping)
