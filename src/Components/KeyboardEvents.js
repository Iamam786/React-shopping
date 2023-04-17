
import { useState } from "react";


export default function KeyDemoComponent()
{
    const [users] = useState([{UserName:'john'},{UserName:'john12'},{UserName:'john_nit'}, {UserName:'david'}]);
    const [userMessage, setUserMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [pwdMessage, setPwdMessage] = useState('');
    const [regExp] = useState(/(?=.*[A-Z])\w{4,10}/);
    const [offer, setOffer] = useState('');


    function VerifyUserName(event){
        for(var user of users)
        {
             if(user.UserName==event.target.value)
             {
                 setUserMessage('User Name Taken - Try Another');
                 setIsValid(false);
                 break;
             } else {
                 setUserMessage('User Name Available');
                 setIsValid(true);
             }
        }
    }
    function NameBlur(){
        setUserMessage('');
    }


    function VerifyPassword(event){
         if((event.which>=65 && event.which<=90)||(event.keyCode>=65 && event.keyCode<=90)) {
             setShowWarning(true);
         } else {
             setShowWarning(false);
         }
    }


    function CheckPasswordStrength(event){
         if(event.target.value.match(regExp)) {
              setPwdMessage('Strong Password');
         } else {
             if(event.target.value.length<4){
                 setPwdMessage('Poor Password');
             } else {
                 setPwdMessage('Weak Password');
             }
         }
    }


    function GetImageId(event){
        switch(event.target.id){
            case 'mobile': 
            setOffer('50% OFF on all smart phones');
            break;
            case 'boat': 
            setOffer('20% OFF on boAt headbands');
            break;
            case 'laptop': 
            setOffer('60% OFF on Gaming Laptops');
            break;
        }
    }


    return(
        <div className="container-fluid">
            <h2>Products</h2>
            <img id="mobile" onTouchStart={GetImageId} alt="pic" src={'b5img/p1.jpg'} width="100" height="100" />
            <img id="boat" onTouchStart={GetImageId} alt="pic" src={'b5img/p2.jpg'} width="100" height="100" />
            <img id="laptop" onTouchStart={GetImageId} alt="pic" src={'b5img/p3.jpg'} width="100" height="100" />
            <h1>{offer}</h1>
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={VerifyUserName} onBlur={NameBlur} /></dd>
                <dd className={(isValid==true)?'text-success':'text-danger'}>{userMessage}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyUp={CheckPasswordStrength} onKeyPress={VerifyPassword} /></dd>
                <dd className={(showWarning==true)?'d-block':'d-none'}>
                    <span className="bi bi-exclamation-triangle-fill"></span> 
                    Caps ON
                </dd>
                <dd>{pwdMessage}</dd>
            </dl>
        </div>
    )
}




