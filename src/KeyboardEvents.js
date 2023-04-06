import { useState } from "react"


export default function KeyboardDemoComponents() {

    const [users] = useState([{ UserName: 'abdul' }, { UserName: "Asif" }, { UserName: 'Khalid' }]);
    const [userMessage, setUserMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [showWarnign, setShowWarning] = useState(false);
    const [pwdMsg,setPwdMsg]= useState('');
    const [regExp] = useState(/(?=.*[A-Z])\w{4,10}/)

    function VerifyUserName(event) {
        for (let user of users) {
            if (user.UserName == event.target.value) {
                setUserMessage('User Name Taken - Try another');
                setIsValid(false)
                break; // ye jaroori hai
            } else {
                setUserMessage('User Name Available');
                setIsValid(true)
            }
        }
    }
    function NameBlur(){
        setUserMessage('')
    };

    function VerifyPassword(event) {
        if ((event.which >= 65 && event.which <= 90)|| (event.keyCode>=65 && event.keyCode<=90)) {
            setShowWarning(true)
        } else {
            setShowWarning(false)
        }
    }

    function CheckPasswordStrength(event){
        if (event.target.value.match(regExp)) {
            setPwdMsg('Strong Password')
        }else{
            if (event.target.value.length<4) {
                setPwdMsg('Poor Password')
            } else {
                setPwdMsg('Weak Password')
            }
        }
    }

    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={VerifyUserName} onBlur={NameBlur} /></dd>
                <dd className={(isValid == true ? 'text-primary' : 'text-danger')}>{userMessage}</dd>

                <dt>Password</dt>
                <dd><input type="password" onKeyPress={VerifyPassword} onKeyUp={CheckPasswordStrength} /></dd>
                <dd className={(showWarnign == true ? "d-block" : "d-none")}> <span className="bi bi-exclamation-triangle"></span>Caps ON</dd>
                <dd>{pwdMsg}</dd>
            </dl>
        </div>
    )
}