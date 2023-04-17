import React, { useContext, useState } from 'react'

let userDetailsContext = React.createContext(null);

export default function ContextDemoComponent() {
  
    const [userDetails] = useState({
        UserName:'abdul',
        Email:'abdul@gmail.com'
    });

    return (
    <userDetailsContext.Provider value={userDetails}>
      <div className='container-fluid' style={{height:'400px',color:'red'}}>
        <h2>
            Main Components - User: {userDetails.UserName}
        </h2>
        <HomeComponent/>
      </div>
    </userDetailsContext.Provider>
  )
}

function HomeComponent() {
    let userdetails = useContext(userDetailsContext);
    return(
        <div>
            Home Components - {userdetails.UserName}
            <NavbarComponent/>
        </div>
        
    )
}

function NavbarComponent() {
    let userdetails = useContext(userDetailsContext)
    return(
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