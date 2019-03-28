import React from 'react'

const stickProps=(Component) => {
  class TempClass extends React.PureComponent{
    render() {
      return (
        <React.Fragment>
        <Component title="hello" id={3}></Component>
      </React.Fragment>
      )
    }
  }
  
  return TempClass
}

export default stickProps
