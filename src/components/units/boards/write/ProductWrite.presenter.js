import {  EmotionButton, EmotionInput } from "./Product.Write.styles";

export default function ProductWriteUI(props){

    //자바스크립트 영역

    //HTML 영역(return 아래)
    return (
        <>
        판매자 : <EmotionInput onChange={props.onChangeSeller} /> <br />
        상품명 : <EmotionInput onChange={props.onChangeName} />  <br />
        상세정보 : <EmotionInput onChange={props.onChangeDetail} /> <br />
        가격 : <EmotionInput onChange={props.onChangePrice} />  <br />
        <EmotionButton 
            fz= "25px" 
            fc= "Red" 
            bgc={props.bgc} 
            onClick={props.isEdit ? props.onClickUpdate : props.onClickGetApi}
            >
                {props.isEdit ? "수정하기" : "등록하기"}
            </EmotionButton>
        </>
    )

}