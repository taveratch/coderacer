import React, { Component } from 'react'
import $ from 'jquery'
import _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {data : ''}
  }
  readFile = () => {
    let self = this
    $.ajax({
      url: 'http://localhost:8000/code',
      success: (res => {
        console.log(res.split('\n')[5]);
        self.setState({data: res})
      })
    })
  }
  componentDidMount() {
    // this.readFile()
  }

  render() {
    return (
      <div>
        Navbar
        <br></br>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default App;
