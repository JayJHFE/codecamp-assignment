import {useQuery, gql, useMutation} from "@apollo/client"
import styled from '@emotion/styled'

const FETCH_PRODUCTS = gql`
    query fetchProducts($page: Int){
        fetchProducts(page: $page){
            _id
            seller
            name
            detail
            price
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID) {
        deleteProduct(productId: $productId){
            message
            _id
        }
    }
`
const Row =  styled. div`
    display: flex;
`

const Column = styled.div`
    width: 25%;
`

export default function TestPage(){
    
    const [deleteProduct] = useMutation(DELETE_PRODUCT)
    
    const {data} = useQuery(FETCH_PRODUCTS)

    
    const onClickDelete = async (event) => {
        await deleteProduct({
            variables: {
                productId: event.target.id
            },
            refetchQueries: [{query: FETCH_PRODUCTS}]
        })
    }
    
    console.log(deleteProduct.message);
    console.log(deleteProduct._id);
    
    return (
        <>
            {data?.fetchProducts.map(el => (
                <Row key={el._id}>
                    <Column><input type="checkbox" /></Column> 
                    <Column>{el.seller}</Column>
                    <Column>{el.name}</Column>
                    <Column>{el.detail}</Column>
                    <Column>{el.price}</Column>
                    <Column>
                        <button id={el._id} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>
                
            ))}
        </> 
    )
}

