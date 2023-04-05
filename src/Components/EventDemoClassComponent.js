import React from "react";

export default class EventDemoClassComponent extends React.Component {

    // constructor(){
    //     super();
    //     this.state = {
    //         msg = ''
    //     }

    // }
    InsertClick(e){
       
        document.write(`
        Button Id: ${e.target.id} <br>
        X Position:${e.clientX}
        `)
    }
    render() {
        return (
            <div className="container-fluid">
                <h2>Event Demo</h2>
                <button id="BtnInsert" onClick={this.InsertClick}>Insert</button>
            </div>
        )
    }
}