import React, { Component } from 'react'

import stickProps from './HigherOrderComponent'

class MyComponent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this)
    return (
      <div>
        h1
      </div>
    )
  }
}

export default stickProps(MyComponent)
