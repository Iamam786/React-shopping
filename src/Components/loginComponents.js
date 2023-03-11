
import React from "react";

export function LoginComponent() {

    const title = 'User Login';

    return (
        < >
            <div className="d-flex justify-content-center mt-5">
                <div className="border border-5 border-radius p-5">


                    <h2> <span className="bi bi-person"></span>{title}</h2>
                    <dl >
                        <dt>User Name</dt>
                        <dd><input type="text" /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" /></dd>
                    </dl>
                    <button className="btn btn-primary w-100">Login</button>

                </div>
            </div>
        </>

    )
}


