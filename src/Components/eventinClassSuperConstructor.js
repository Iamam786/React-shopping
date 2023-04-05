import React from "react";

export default class EventDemoClassConstructorComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            msg: 'Please Click Insert Button'
        }
        this.InsertClick = this.InsertClick.bind(this);
    }
    InsertClick(e){
       
       this.setState({
        msg:'Record Inserted'
       })
    }
    render() {
        return (
            <div className="container-fluid">
                <h2>Event Demo</h2>
                <button  onClick={this.InsertClick}>Insert</button>
              <p>{this.state.msg}</p>
            </div>
        )
    }
}