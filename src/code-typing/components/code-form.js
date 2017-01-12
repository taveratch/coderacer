import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadCode} from 'code-typing/actions'
import _ from 'lodash'

class CodeForm extends Component {
  componentDidMount() {
    this.props.loadCode()
  }
  render() {
    return (
      <div>
        Code form
        {
          _.map(this.props.code.split('\n'), (line) => {
            return (
              <div>
                {
                  _.map(line.split(''), (char) => {
                    if(char === ' '){ return <span>&nbsp;</span>}
                    else { return <span>{char}</span>}
                  })
                }
                <br></br>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {code: state.codeTyping.code}
}

export default connect(mapStateToProps,{loadCode})(CodeForm)
