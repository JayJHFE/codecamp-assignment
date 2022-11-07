//                          하드 코딩 영역


// import { gql, useMutation } from "@apollo/client";
//     const CREATE_BOARD = gql`
//     mutation createBoard($writer: String, $title: String, $contents: String) {  
//         createBoard(writer: $writer, title: $title, contents: $contents) {     
//         _id
//         number
//         message
//         }
//     }
//     `

// export default function GraphApiGetPage() {
//     const [createBoard] = useMutation(CREATE_BOARD)

//     const onClickGetApi = async () => {
//         const result = await createBoard({
//             variables: { 
//                 writer: "허균",
//                 title: "홍길동전",
//                 contents: "아버지를 아버지라 부르지 못하고"
//             }            
//         })
//         console.log(result.data)
//         console.log(result.data.createBoard.message)
//     }

//     return (
//         <>
//         <button onClick={onClickGetApi}>Graph-API 요청하기</button>
//         </>
//     )
// }




//                           소프트코딩 영역



// import { gql, useMutation } from "@apollo/client";
// import { useState } from 'react'
//     const CREATE_BOARD = gql`
//     mutation createBoard($writer: String, $title: String, $contents: String) {  
//         createBoard(writer: $writer, title: $title, contents: $contents) {     
//         _id
//         number
//         message
//         }
//     }
//     `

// export default function GraphApiGetPage() {
//     const [createBoard] = useMutation(CREATE_BOARD)
//     const [writer,setWriter] = useState("")
//     const [title, setTitle] = useState("")
//     const [contents,setContents] = useState("")

//     const onClickGetApi = async () => {
//         const result = await createBoard({
//             variables: { 
//                 writer: writer,
//                 title: title,
//                 contents: contents
//             }            
//         })
//         console.log(result.data)
//         console.log(result.data.createBoard.message)
//     }

//     const onChangeWriter = (event) => {
//         setWriter(event.target.value)
//     }

//     const onChangeTitle = (event) => {
//         setTitle(event.target.value)        
//     }

//     const onChangeContents = (event) => {
//         setContents(event.target.value)
//     }


//     return (
//         <>
//         작성자 : <input onChange={onChangeWriter} /> 
//         제목 : <input onChange={onChangeTitle} /> 
//         내용 : <input onChange={onChangeContents} /> 
//         <button onClick={onClickGetApi}>Graph-API 요청하기</button>
//         </>
//     )
// }



//                           프로덕트 소프트 코딩 영역



import { gql, useMutation } from "@apollo/client";
import { useState } from 'react'
    const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {  
        createProduct(seller: $seller, createProductInput: $createProductInput) {     
        _id
        number
         message
        }
    }
    `

export default function GraphApiGetPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [seller,setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail,setDetail] = useState("")
    const [price,setPrice] = useState("")

    const onClickGetApi = async () => {
        const result = await createProduct({
            variables: {
                seller: seller,
                createProductInput: {
                        name: name,
                        detail: detail,
                        price: Number(price)
                }
            }            
        })
        console.log(result.data)
        console.log(result.data.createProduct.message)
    }

    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }

    const onChangeName = (event) => {
        setName(event.target.value)        
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }


    return (
        <>
        판매자 : <input onChange={onChangeSeller} /> 
        상품명 : <input onChange={onChangeName} /> 
        상세정보 : <input onChange={onChangeDetail} /> 
        가격 : <input onChange={onChangePrice} /> 
        <button onClick={onClickGetApi}>Graph-API 요청하기</button>
        </>
    )
}


//                         프로덕트 하드 코딩 영역



// import { gql, useMutation } from "@apollo/client";
//     const CREATE_PRODUCT = gql`
//     mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {  
//         createProduct(seller: $seller, createProductInput: $createProductInput) {     
//         _id
//         number
//          message
//         }
//     }
//     `

// export default function GraphApiGetPage() {
//     const [createProduct] = useMutation(CREATE_PRODUCT)
   
//     const onClickGetApi = async () => {
//         const result = await createProduct({
//             variables: {
//                 seller: "이주현",
//                 createProductInput: {
//                     name: "김밥",
//                     detail: "맛있음",
//                     price: 2000 
//                 }
//             }            
//         })
//         console.log(result.data)
//         console.log(result.data.createProduct.message)
//     }

   

//     return (
//         <>
//         <button onClick={onClickGetApi}>Graph-API 요청하기</button>
//         </>
//     )
// }