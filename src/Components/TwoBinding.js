import { useState } from "react";

export default function TwoBindingComponents() {
    // let username = "AbdeMustafa";
const [username,setUserName] = useState();

function UpdateName(){
    alert("Hello ! Ali");
}
function UpdateNameEvent(event){
   setUserName(event. target.value);
}
    return (
        <>
            <div className="container-fluid border-5 border-primary m-2">
                <h2>User Details</h2>
                User Name:
                <input type='text'  onKeyUp={UpdateName} ></input>
                <input type='text' name="username"  onKeyUp={UpdateNameEvent} ></input>
                <div>
                    <p>Hello ! {username} </p>
                </div>
            </div>
           

        </>

    )
}