import React, { Component } from 'react'

class SuccessComponent extends React.Component{
    componentWillMount(){
        console.log('Success Component Requested.| will Mounte.')
    }

    componentDidMount(){
        console.log('Success Component Mounted | DidMount.')
    }
    componentWillUnmount(){
        console.log('Success Disposed..')
    }

    render(){
        return(
            <h2>Login Success</h2>
        )
    }
}
class ErrorComponent extends React.Component{
    componentWillMount(){
        console.log('Error Component Requested.| will Mounte.')
    }

    componentDidMount(){
        console.log('Error Component Mounted | DidMount.')
    }
    componentWillUnmount(){
        console.log('Error Disposed..')
    }

    render(){
        return(
            <h2>Invalid Password</h2>
        )
    }
}


export default class ProductComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg: ''
        }
        this.SuccessClick = this.SuccessClick.bind(this);
        this.ErrorClick = this.ErrorClick.bind(this);
    }
    SuccessClick(){
        this.setState({
            msg: <SuccessComponent/>
        })
    }
    ErrorClick(){
        this.setState({
            msg: <ErrorComponent/>
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.SuccessClick}>Success</button>
        <button onClick={this.ErrorClick}>Error</button>
        <div>
            <p>{this.state.msg}</p>
        </div>
      </div>
    )
  }
}
