import React, { useContext, useState } from 'react'

let userDetailsContext = React.createContext(null);

export default function ContextDemoComponent() {

    const [userDetails, setuserDetails] = useState({
        UserName: '',
        Email: ''
    });

    function HandleUserName(e) {
        setuserDetails({
            UserName: e.target.value,
            Email: userDetails.Email
        })
    }
    function HandleEmail(e) {
        setuserDetails({
            UserName: userDetails.UserName,
            Email: e.target.value
        })
    }
    function HandleLogin() {
        setuserDetails({
            UserName: userDetails.UserName,
            Email: userDetails.Email
        })
    }
    // function HomeClick(e) {
    //     e.target.UserName;
    // }

    return (
        <userDetailsContext.Provider value={userDetails}>
            <div className='container-fluid' style={{ height: '400px', color: 'red' }}>
                <h1>User Login</h1>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type='text' onChange={HandleUserName} /></dd>
                    <dt>Email</dt>
                    <dd><input type='email' onChange={HandleEmail} /></dd>
                    <button className='btn btn-primary' onClick={HandleLogin} >Login</button>
                </dl>
                <h2>
                    Main Components - User: {userDetails.UserName}
                </h2>
                <HomeComponent />
            </div>
        </userDetailsContext.Provider>
    )
}

function HomeComponent(props) {
    // let userdetails = useContext(userDetailsContext);
    const [userDetails, setUserDetails] = useState(userDetailsContext);

    function HandleUpdate() {
        setUserDetails({ UserName: 'Ali', Email:'abdul@gmail.com'});
        alert('Update Clicked')
    }
    return (

        <userDetailsContext.Provider value={userDetails}>
            <div>
                <div>
                    Home Components - {userDetails.UserName}
                </div>
                <button onClick={HandleUpdate}>Update Name</button>

                <NavbarComponent />
            </div>
        </userDetailsContext.Provider>

    )
}

function NavbarComponent() {
    let userdetails = useContext(userDetailsContext)
    return (
        <div className='btn-toolbar bg-dark justify-content-between px-1'>
            <div className='btn-group'>
                <h3>Navbar</h3>
            </div>
            <div className='btn-group'>
                {userdetails.Email}
            </div>
        </div>
    )
}