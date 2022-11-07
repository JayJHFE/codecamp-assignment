import { ColorBox } from "./Product.Fetch.styles";



export default function ProductFetchUI(props) {

    const data = props.data
           
    return(
        <>
            <ColorBox>판매자 : {data ? data.fetchProduct.seller : "loading..."}</ColorBox>
            <ColorBox>상품명: {data ? data.fetchProduct.name : "loading..."}</ColorBox>
            <ColorBox>상세정보: {data ? data.fetchProduct.detail : "loading..."}</ColorBox>
            <ColorBox>가격: {data ? data.fetchProduct.price : "loading..."}</ColorBox>    
        </>
    )

}