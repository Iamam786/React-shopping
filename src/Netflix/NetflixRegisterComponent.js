
export default function NetflixRegisterComponent() {

    return (
        <div>
            <p>Ready to watch? Enter Your email to create or restart to you membership.</p>
            <div className="input-group input-group-lg " >
                <input className="form-control" type='email' placeholder="Your email address"></input>
                <button className="btn btn-danger">

                Get Started
                <span className="bi bi-chevron-right"/>
                </button>
            </div>
        </div>
    )
}