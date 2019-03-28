import React, { Component,Fragment ,PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'

export default class CommentList extends PureComponent {
  constructor(props){
    super(props)
    console.log('constructor')
    this.state={
      title:''
    }
    this.changeTitle=this.changeTitle.bind(this)
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  // shouldComponentUpdate(nextProps,nextStates){
  //   return nextStates.title===this.state.title ? false : true
  // }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  render() {//渲染dom树  父组件的render不调用，子组件所有的都不调用
    console.log('render')
    return (
      <div>
        <Fragment>
        <CommentItem title={this.state.title}></CommentItem>
        <button onClick={this.changeTitle}>更新title</button>
        </Fragment>
      </div>
    )
  }
  changeTitle(){
    this.setState({
      title:'hello children'
    })
  }
  componentWillMount(){
    // console.log(this)
    console.log('componentWillMount')
  }
  componentDidMount(){
    //ajax调用
    console.log('componentDidMount')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
}
