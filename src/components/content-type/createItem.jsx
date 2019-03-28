import React, { Component ,Fragment} from 'react'

import {MyContext} from './myContext'

import CreateButton from './createButton'

export class CreateItem extends Component {
  static contextType = MyContext

  render() {
    console.log(this)
    return (
      <Fragment>
        <div>{this.context.state.text}</div>
        <CreateButton>delete</CreateButton>
      </Fragment>
    )
  }
}

export default CreateItem
