import React, { Component } from 'react'

import {MyContext} from './myContext'

export class CreateButton extends Component {
  static contextType=MyContext
  render() {
    return (
      <div>
        <button onClick={this.context.changeColor.bind(this,"red")} style={{color:this.context.state.color}}>{this.props.children}</button>
      </div>
    )
  }
}

export default CreateButton

