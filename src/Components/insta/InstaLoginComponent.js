
import "./insta.css"

export default function InstaLoginComponent() {

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center mt-3 flex-column gap-3">
                <form className="w-50 border border-2 px-5">
                    <div className="text-center mt-5">
                      <img className="img" />
                    </div>
                    <div className="mt-3">
                        <input type="text" className="form-control" placeholder="Phone number, username or email address" />
                    </div>
                    <div className="mt-3">
                        <input type="Password" className="form-control py-1 px-4" placeholder="Password" />
                    </div>
                    <div className="mt-3 d-grid">
                        <button className="btn btn-primary">login</button>
                    </div>
                    <div className="mt-3 d-flex">
                        <hr />
                        <span className="mx-3">OR</span>
                        <hr />
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <span className="bi bi-facebook" />
                        <span className="ms-2 text-primary">Login in with Facebook</span>
                    </div>
                    <div className="my-3 text-center">
                        <a style={{ fontSize: 13 }}>Forqotten your password?</a>
                    </div>
                </form>
                <div className="w-50 border border-2 text-center p-3">
                    Don't have an account? <a className="text-primary" id="sign">Sign up</a>
                </div>
                <p>Get the app.</p>
                <div>

                </div>
            </div>
        </div>
    )
}