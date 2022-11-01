import {ErrorBox} from '../../styles/emotion'
import {useState} from 'react'

export default function SignupStatePage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    function onChangePasswordCheck(event){
        setPasswordCheck(event.target.value)
    }

    function onClickSignup(){
        if(email.includes("@") === false){
           setEmailError("이메일이 올바르지 않습니다. @가 없습니다")
        } if(password !== passwordCheck){
           setPasswordError("비밀번호가 일치하지 않습니다.")
        } if(email.includes("@") === true && password === passwordCheck) {
            setEmailError("")
            setPasswordError("")
            alert("회원가입을 축하합니다!!")
        }
    }

    return (
        <>
            이메일: <input type="text" onChange={onChangeEmail} />
            <ErrorBox>{emailError}</ErrorBox>
            비밀번호: <input type= "password" onChange={onChangePassword} />
            <ErrorBox>{passwordError}</ErrorBox>
            비밀번호 확인: <input type= "password" onChange={onChangePasswordCheck} />
            <ErrorBox>{passwordError}</ErrorBox>
            <button onClick={onClickSignup}>회원가입</button>
        </>
    )
}