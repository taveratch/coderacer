import React, {Component} from 'react'
let untypedStyle = {
  color: "#E0E0E0"
}
let passedStyle = {
  color: "#616161"
}
class DummyCharacter extends Component {
  render() {
    let style;
    if(this.props.passed) style = passedStyle
    else style = untypedStyle
    return (
      <span style={style}>{this.props.character}</span>
    )
  }
}

export default DummyCharacter
