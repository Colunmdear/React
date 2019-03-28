import React, { Component } from 'react'

import {MyContext} from './myContext'

export class ConmentFrom extends Component {
  static contextType=MyContext
  render() {
    return (
      <div>
        <button style={{color:this.context.state.color}} onClick={this.context.changeColor.bind(this,'green')}>change color</button>
      </div>
    )
  }
}

export default ConmentFrom
