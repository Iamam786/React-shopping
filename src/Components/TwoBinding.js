
export default function TwoBindingComponents() {
    let username = "AbdeMustafa";
    return (
        <>
            <div className="container-fluid border-5 border-primary m-2">
                <h2>User Details</h2>
                User Name:
                <input type='text' value={username}></input>
                <div>
                    <p>Hello ! {username} </p>
                </div>
            </div>

        </>

    )
}