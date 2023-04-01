import React from "react";

export class NetflixRegisterComponent extends React.Component{
    title ='Ready to watch? Enter your email to create or restart your membership.'
    render(){
        return(
        <>
        <div className="d-flex justify-content-center">
            <div>
                <p className="">{this.title}</p>
                <div className="input-group input-group-lg">
                    <input className="p-2 form-control" type='email' placeholder="Enter Your email Address"></input>
                    <button className="form-control w-5 bg-danger text-white p-2">Get Started
                        <span className="bi bi-chevron-right"></span>
                    </button>
                </div>
            </div>
        </div>
        </>
        )
    }
}