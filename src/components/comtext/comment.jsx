import React, { Component } from 'react'
import PropTypes from 'prop-types'
import commentlist from './commentlist'
import commentitem from './commentitem'
export class comment extends Component {
  static propTypes = {

  }
  getChildContext(){
    return {
      text:'new item'
    }
   
  }
  render() {
    return (
      <div>
        <commentlist>
          <commentitem></commentitem>
        </commentlist>
      </div>
    )
  }
}

export default comment
