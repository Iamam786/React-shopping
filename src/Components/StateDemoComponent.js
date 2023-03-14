import { render } from "@testing-library/react";
import React from "react";

/*
export default class StateDemoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "product Details",
            product:{
                Name:'Nike Casuals',
                Price:4000,
                Photo:'b5img/ab2.jpg'
            },
            categroies:['Electronic',"Footwear","fashion"]
        }
    }

    render() {
        return (
            <>
            <div className="container-fluid">
                <h2>{this.state.title}</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.product.Price}</dd>
                    <dt>Photo</dt>
                    <dd className=""><img className="bg-dark p-1" alt="preview" width="100" height="100" src={this.state.product.Photo}></img></dd>
                </dl>
            <h2>Select Category</h2>
            <select>
                {
                    this.state.categroies.map(category =>
                        <option>{category}</option>
                        )
                }
            </select>
            </div>
            </>
        )
    }
}
*/

export default class StateDemoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
        }
        this.UpdateName = this.UpdateName.bind(this);
    }
    UpdateName(event) {
        // console.log(`Hello ! ${event.target.value}`);


        this.setState(
            {
                UserName: event.target.value

            }

        )

    }
    render() {
        return (
            <>
                <div className="container-fluid">
                    <h3>Register User</h3>
                    User Name:<input type="text" onKeyUp={this.UpdateName} ></input>
                    <div>
                        <p>Hello ! {this.state.UserName}</p>
                    </div>
                </div>

            </>
        )
    }

}