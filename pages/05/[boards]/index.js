// import { gql, useQuery } from "@apollo/client"
// import { useRouter } from "next/router"


// const FETCH_PRODUCT = gql`
//     query fetchProduct($productId: ID){
//         fetchProduct(productId: $productId){
//             _id
//             seller
//             name
//             detail
//             price
//         }
//     }
//     `
// export default function ProductUpload () {
//    const router = useRouter()
// //    console.log(router.query.boards)
   
// //    return <div></div>

//    const {data} = useQuery(FETCH_PRODUCT, {
//         variables: {
//             productId: router.query.boards
//         }
//    })

//    console.log("==========")
//    console.log(data);
//    console.log("==========")

//    return (
//         <>
//             <div>판매자 : {data && data.fetchProduct.seller}</div>
//             <div>상품명: {data && data.fetchProduct.name}</div>
//             <div>상세정보: {data && data.fetchProduct.detail}</div>
//             <div>가격: {data && data.fetchProduct.price}</div>
//         </>

//     )
// }

// import { gql, useQuery } from "@apollo/client"
// import { useRouter } from "next/router"


// const FETCH_PRODUCT = gql`
//     query fetchProduct($productId: ID){
//         fetchProduct(productId: $productId){
//             _id
//             seller
//             name
//             detail
//             price
//         }
//     }
//     `
// export default function ProductUpload () {
//    const router = useRouter()
// //    console.log(router.query.boards)
   
// //    return <div></div>

//    const {data} = useQuery(FETCH_PRODUCT, {
//         variables: {
//             productId: router.query.boards
//         }
//    })

//    console.log("==========")
//    console.log(data);
//    console.log("==========")

//    return (
//         <>
//             <div>판매자 : {data?.fetchProduct.seller}</div>
//             <div>상품명: {data?.fetchProduct.name}</div>
//             <div>상세정보: {data?.fetchProduct.detail}</div>
//             <div>가격: {data?.fetchProduct.price}</div>
//         </>

//     )
// }

import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"


const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            _id
            seller
            name
            detail
            price
        }
    }
    `
export default function ProductUpload () {
   const router = useRouter()
//    console.log(router.query.boards)
   
//    return <div></div>

   const {data} = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.boards
        }
   })

   console.log("==========")
   console.log(data);
   console.log("==========")

   return (
        <>
            <div>판매자 : {data ? data.fetchProduct.seller : "loading..."}</div>
            <div>상품명: {data ? data.fetchProduct.name : "loading..."}</div>
            <div>상세정보: {data ? data.fetchProduct.detail : "loading..."}</div>
            <div>가격: {data ? data.fetchProduct.price : "loading..."}</div>
        </>

    )
}