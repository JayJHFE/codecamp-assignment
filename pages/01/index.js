import {Wrapper, Header, Menubar, Name, Photo, Profile, Glass, Arrow,SmallMenu, SmallMenuRed, BodyWrapper,Question, QuestionNumber, BottomArrow, BottomMenu, Icon, UserMenu, UserMenuRed} from '../../styles/emotion'

export default function EmotionPage() {

    // 여기는 자바스크립트 쓰는곳

    return (
    <div>
        <Wrapper>
            <Glass src='/Group.png' />
            <Header>
                마이
                <Profile>
                <Photo src='/Photo.png' />
                <Name>임정아</Name>
                <Arrow src='/arrow.png' />
                </Profile>
            </Header>
            <Menubar>
                <SmallMenu>공지사항</SmallMenu>
                <SmallMenu>이벤트</SmallMenu>
                <SmallMenuRed>FAQ</SmallMenuRed>
                <SmallMenu>Q&A</SmallMenu>
            </Menubar>
            <BodyWrapper>
                <QuestionNumber>Q. 01</QuestionNumber>
                <Question>리뷰 작성은 어떻게 하나요? <BottomArrow src='/BottomArrow.png' /></Question>
                <QuestionNumber>Q. 02</QuestionNumber>
                <Question>리뷰 수정/삭제는 어떻게 하나요? <BottomArrow src='/BottomArrow.png' /></Question>
                <QuestionNumber>Q. 03</QuestionNumber>
                <Question>아이디/비밀번호를 잊어버렸어요 <BottomArrow src='/BottomArrow.png' /></Question>
                <QuestionNumber>Q. 04</QuestionNumber>
                <Question>회원탈퇴를 하고싶어요. <BottomArrow src='/BottomArrow.png' /></Question>
                <QuestionNumber>Q. 05</QuestionNumber>
                <Question>출발지 설정은 어떻게 하나요? <BottomArrow src='/BottomArrow.png' /></Question>
                <QuestionNumber>Q. 06</QuestionNumber>
                <Question>비밀번호를 변경하고 싶어요 <BottomArrow src='/BottomArrow.png' /></Question>
            </BodyWrapper>
            <BottomMenu>
                <UserMenu><Icon src='/home.png' />홈</UserMenu>
                <UserMenu><Icon src='/location.png' />잇츠로드</UserMenu>
                <UserMenu><Icon src='/heart.png' />마이찜</UserMenu>
                <UserMenuRed><Icon src='/person.png' />마이</UserMenuRed>    
            </BottomMenu> 
        </Wrapper>
    </div>
    )

}