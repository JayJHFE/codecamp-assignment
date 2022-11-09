import { ColorBox } from "./Product.Fetch.styles";



export default function ProductFetchUI(props) {

    
           
    return(
        <>
            <ColorBox>판매자 : {props.data?.fetchProduct?.seller}</ColorBox>
            <ColorBox>상품명: {props.data?.fetchProduct?.name}</ColorBox>
            <ColorBox>상세정보: {props.data?.fetchProduct?.detail}</ColorBox>
            <ColorBox>가격: {props.data?.fetchProduct?.price}</ColorBox> 
            <button onClick={props.onClickMoveToEdit}>수정하러 이동하기</button>   
        </>
    )

}