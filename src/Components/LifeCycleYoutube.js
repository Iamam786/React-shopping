import React, { Component } from 'react'
import LifeCycleDemoComponent from './LifeCycleDemoComponent';

export default class LifeCycleYoutube extends Component {
  
    constructor(){
        super();
        this.state = {color:'blue',deletUser:true}
        console.log('Constructor');
        alert('Constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log("GetDerivedfromProps");
        // return{color:props.color};
        return{}
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
   getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate', prevProps);
    return {};
   }
//    componentDidUpdate(){
//     console.log('compoent did update');
//    }
    componentDidMount(){
        this.setState({color:'green'});
        console.log('Component did Mount');
        alert('Component did Mount');
    }
    render() {
        console.log('render',this.state.color); // Previous Value ke this.state.color 
        alert('render',this.state.color); // Previous Value ke this.state.color 
    return (
      <div>
        LifeCycleYoutube: {this.state.color}
        {/* {this.state.deletUser && <LifeCycleDemoComponent/>} */}
      {/* <button onClick={()=>{
        this.setState({deletUser:false})
      }}>delete</button> */}
      </div>
    )
  }
}
