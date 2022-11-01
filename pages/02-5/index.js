import {ErrorBox1, ErrorBox2, Wrapper02, LocationIcon, GrayBox, LocationBox, UpperWrapper, AppName, UserInput, LoginButton, Login, UserMenubar, Menu1, Menu2, Menu3, BottomLogin, KakaoLogin, Logo, Xclick} from '../../styles/emotion'
import {useState} from 'react'

export default function SignupStatePage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

   

    function onClickSignup(){
        if(email.includes("@") === false){
           setEmailError("이메일 주소를 다시 확인해주세요.")
        } 
        if(password.length < 8){
           setPasswordError("8~16자의 영문,숫자,특수 문자만 사용 가능합니다.")
        } 
        if(email.includes("@") === true && password.length >= 8) {
            setEmailError("")
            setPasswordError("")
            alert("회원가입을 축하합니다!!")
        }
    }

    return (
        <>
            <Wrapper02>
                <UpperWrapper>
                    <LocationBox>
                        <LocationIcon src="/BigLocation.png" />
                        <GrayBox></GrayBox>
                    </LocationBox>
                    <AppName>잇츠로드</AppName>
                </UpperWrapper>
                <UserInput type="text" onChange={onChangeEmail} />
                <Xclick src="/X.png" />
                <ErrorBox1>{emailError}</ErrorBox1>
                <UserInput type= "password" onChange={onChangePassword} />
                <Xclick src="/X.png" />
                <ErrorBox2>{passwordError}</ErrorBox2>
                <LoginButton onClick={onClickSignup}><Login>로그인</Login></LoginButton>
                <UserMenubar>
                    <Menu1>이메일 찾기</Menu1>
                    <Menu2>비밀번호 찾기</Menu2>
                    <Menu3>회원가입</Menu3>
                </UserMenubar>
                <BottomLogin>
                    <Logo src="/Kakao.png" />
                    <KakaoLogin>카카오톡으로 로그인</KakaoLogin>
                </BottomLogin>
            </Wrapper02>
        </>
    )
}