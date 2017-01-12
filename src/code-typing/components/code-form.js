import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadCode, typing} from 'code-typing/actions'
import _ from 'lodash'
import Character from './character'

class CodeForm extends Component {
  componentDidMount() {
    this.props.loadCode()
  }
  handleKeyPress = (e) => {
    if(e.key.length > 1) return
    console.log(e.key);
    this.props.typing(e.key)
  }
  render() {
    return (
      <div tabIndex="0" onKeyDown={this.handleKeyPress}>
        <pre>
          {
            _.map(this.props.code.split('\n'), (line, i) => {
              return (
                <div key={i}>
                  {
                    _.map(line.split(''), (char, j) => {
                      return <Character key={`${i}-${j}`} row={i} col={j} character={char}/>
                    })
                  }
                  <br></br>
                </div>
              )
            })
          }
        </pre>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {code: state.codeTyping.code}
}

export default connect(mapStateToProps,{loadCode, typing})(CodeForm)
