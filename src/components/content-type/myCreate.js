import React from 'react'
const style={
  color:'yellow',
  text:'hello'
}

const MyContext=React.createContext({style,changeColor:()=>{}})

export {MyContext,style}