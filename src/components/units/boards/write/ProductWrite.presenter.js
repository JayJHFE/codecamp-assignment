import { BlueButton, RedInput } from "./Product.Write.styles";

export default function ProductWriteUI(props){

    //자바스크립트 영역

    //HTML 영역(return 아래)
    return (
        <>
        판매자 : <RedInput onChange={props.onChangeSeller} /> <br />
        상품명 : <RedInput onChange={props.onChangeName} />  <br />
        상세정보 : <RedInput onChange={props.onChangeDetail} /> <br />
        가격 : <RedInput onChange={props.onChangePrice} />  <br />
        <BlueButton onClick={props.onClickGetApi}>상품 등록하기</BlueButton>
        </>
    )

}