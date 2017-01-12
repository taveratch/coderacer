import React, {Component} from 'react'
import {connect} from 'react-redux'

let typingStyle = {
  color: "white",
  backgroundColor: "#4CAF50"
}
let wrongStyle = {
  color: "#F44336"
}
let passedStyle = {
  color: "#616161"
}
let untypedStyle = {
  color: "#E0E0E0"
}

class Character extends Component {
  constructor(props) {
    super(props)
    this.state = {
      row: this.props.row,
      col: this.props.col
    }
  }
  render() {
    let style = untypedStyle;
    if(this.props.character === ' ') return <span>&nbsp;</span> //return spacebar
    if((this.props.currentRow === this.state.row && this.props.currentCol > this.state.col) || this.props.currentRow > this.state.row ) style = passedStyle
    if(this.props.currentRow === this.state.row && this.props.currentCol === this.state.col){
      if(this.props.status === 'wrong') style = wrongStyle
      else style = typingStyle
    }
    return (
      <span style={style}>{this.props.character}</span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentRow: state.codeTyping.currentRow,
    currentCol: state.codeTyping.currentCol,
    status: state.codeTyping.status
  }
}

export default connect(mapStateToProps)(Character)
