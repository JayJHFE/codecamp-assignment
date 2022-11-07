import { useRouter } from "next/router"
import ProductFetchUI from "./ProductFetch.presenter";
import { FETCH_PRODUCT } from "./Product.Fetch.queries";
import { useQuery } from "@apollo/client"

export default function ProductFetch() {

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

    return(
        <ProductFetchUI
            data = {data}
        />
    )
}