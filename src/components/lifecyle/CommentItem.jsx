import React, { Component ,PureComponent} from 'react'
import PropTypes from 'prop-types'

//PureComponent  //一层扁平的判断数据this.props和nextProps是否相同
//如果相同不会render
export default class CommentItem extends PureComponent {
  state={
    x:0
  }
  constructor(props){
    super(props)
    console.log('child constructor')
  }
  // componentWillMount(){
  //   console.log('child componentWillMount')
  // }
  // componentWillUpdate(){
  //   console.log('child componentWillUpdate')
  // }
 
  //在props发生变化的时候触发,mounting阶段不会触发
  // componentWillReceiveProps(nextProps){
  //   console.log('child componentWillReceiveProps')
  //   // console.log(nextProps)
  // }
  static getDerivedStateFromProps(nextProps, prevState){//初始化会调用一次  根据变化返回一个新的状态，会merge当前组件的state
    console.log('child getDerivdStateFromProps')
    console.log(nextProps, prevState)
    return null
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('child shouldComponentUpdate')
  //   console.log(this.props,nextProps)
  //   return this.props.title===nextProps.title ? false : true//控制是否向下继续渲染更新的数据   性能优化
  // }
  render() {
    console.log('child render')
    return (
      <div>
        CommentItem
      </div>
    )
  }
  getSnapshotBeforeUpdate(props,state){
    console.log(props,state)
    console.log('child getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('child componentDidUpdate')
  }
  componentDidMount(){
    console.log('child componentDidMount')
  }
}
