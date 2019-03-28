import React, { Component } from 'react'

import {MyContext,state} from './myContext'

import CreateItem from './createItem'

import ConmentFrom from './ConmentFrom' 

export class CreateList extends Component {
  constructor(props){
    super(props)

    this.changeColor=(color)=>{
      this.setState({
        state:{
          text:'new title 3',
          color:color
        }
      })
    }

    this.state={
      state,
      changeColor:this.changeColor
    }
    
  }
  
  render() {
    return (
      <MyContext.Provider value={this.state}>
        <CreateItem></CreateItem >
        <ConmentFrom></ConmentFrom>
      </MyContext.Provider>
    )
  }
}

export default CreateList


