import React from 'react'

const state={
  text:'item',
  color:'red'
}

const MyContext=React.createContext({
  state,
  changeColor:function(){}//noop
})

export {MyContext,state}