import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from "next/router";
import { CREATE_PRODUCT } from './Product.Write.queries'
import ProductWriteUI from './ProductWrite.presenter';

export default function ProductWrite() {
    
    const [bgc, setBgc] = useState(false)
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
        if(event.target.value && name && detail && price) {
            setBgc(true) 
        }
    }

    const onChangeName = (event) => {
        setName(event.target.value)
        if(seller && event.target.value && detail && price) {
            setBgc(true) 
        }        
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value)
        if(seller && name && event.target.value && price) {
            setBgc(true) 
        }  
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value)
        if(seller && event.target.value && detail && event.target.value) {
            setBgc(true) 
        }  
    }

    //HTML 영역(return 아래)
    return (
       <ProductWriteUI
       onClickGetApi={onClickGetApi}
       onChangeSeller={onChangeSeller}
       onChangeName={onChangeName}
       onChangeDetail={onChangeDetail}
       onChangePrice={onChangePrice}
       bgc={bgc}
       />
    )
}