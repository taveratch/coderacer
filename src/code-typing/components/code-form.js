import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadCode, typing} from 'code-typing/actions'
import _ from 'lodash'
import Character from './character'
import DummyCharacter from './dummy-character'
import $ from 'jquery'

class CodeForm extends Component {
  componentDidMount() {
    this.props.loadCode()
    $('#code-form').focus() //focus on code-form
    //prevent scrolling from pressing spacebar
    window.addEventListener('keydown', function(e) {
      if(e.keyCode === 32) {
        e.preventDefault();
      }
    });
  }
  handleKeyPress = (e) => {
    if(e.key.length > 1) return //shift, option, delete,.... non character
    this.props.typing(e.key)
  }
  render() {
    return (
      <div tabIndex="0" id="code-form" onKeyDown={this.handleKeyPress}>
        <pre>
          {
            _.map(this.props.code.split('\n'), (line, i) => {
              if(i === this.props.currentRow) {
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
              }else if(i < this.props.currentRow) {
                return (
                  <div key={i}>
                    {
                      _.map(line.split(''), (char, j) => {
                        return <DummyCharacter key={`${i}-${j}`} passed={true} character={char}/>
                      })
                    }
                    <br></br>
                  </div>
                )
              }else {
                return (
                  <div key={i}>
                    {
                      _.map(line.split(''), (char, j) => {
                        return <DummyCharacter key={`${i}-${j}`} passed={false} character={char}/>
                      })
                    }
                    <br></br>
                  </div>
                )
              }
            })
          }
        </pre>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    code: state.codeTyping.code,
    currentRow: state.codeTyping.currentRow
  }
}

export default connect(mapStateToProps,{loadCode, typing})(CodeForm)
