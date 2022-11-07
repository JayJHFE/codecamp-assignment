import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from "next/router";
import { CREATE_PRODUCT } from './Product.Write.queries'
import ProductWriteUI from './ProductWrite.presenter';

export default function ProductWrite() {
    
    //자바스크립트 영역
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [seller,setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail,setDetail] = useState("")
    const [price,setPrice] = useState("")
    
    const router = useRouter()

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
        
               
    

        try {const result = await createProduct({
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
            console.log(result.data.createProduct._id) 
            router.push(`/05/${result.data.createProduct._id}`)

        } catch(error) {
            console.log(error.message)
            alert(error.message)
        }
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

    //HTML 영역(return 아래)
    return (
       <ProductWriteUI
       onClickGetApi={onClickGetApi}
       onChangeSeller={onChangeSeller}
       onChangeName={onChangeName}
       onChangeDetail={onChangeDetail}
       onChangePrice={onChangePrice}
       />
    )
}