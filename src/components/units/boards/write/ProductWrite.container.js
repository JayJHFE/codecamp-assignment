import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from "next/router";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './Product.Write.queries'
import ProductWriteUI from './ProductWrite.presenter';

export default function ProductWrite(props) {
    
    const [bgc, setBgc] = useState(false)
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [seller,setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail,setDetail] = useState("")
    const [price,setPrice] = useState("")
    const [updateProduct] = useMutation(UPDATE_PRODUCT)
    
    const router = useRouter()

    const onClickGetApi = async () => {
        
           

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
            router.push(`/08/${result.data.createProduct._id}`)

        } catch(error) {
            console.log(error.message)
            alert(error.message)
        }
    }

    const onClickUpdate = async (event) => {
        
        const result = await updateProduct({
            variables: {
                productId: router.query.products,
                updateProductInput: {
                        name,
                        detail,
                        price: Number(price),
                }
            }            
        })
            console.log("오나라오나라")
            console.log(event.target)                
            console.log(result.data)
            console.log(result.data.updateProduct._id) 
            router.push(`/08/${result.data.updateProduct._id}`)

        
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
       onClickUpdate={onClickUpdate}
       onChangeSeller={onChangeSeller}
       onChangeName={onChangeName}
       onChangeDetail={onChangeDetail}
       onChangePrice={onChangePrice}
       bgc={bgc}
       isEdit = {props.isEdit}
       />
    )
}