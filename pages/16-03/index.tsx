import axios from 'axios'
import { useEffect, useState } from 'react'

export default function RestDogPage() {

    const [dogPhoto, setDogPhoto] = useState("")
    
    useEffect(() => {
        const onClickSync = async () => {
            const result = await axios.get("https://dog.ceo/api/breeds/image/random")
            console.log(result) 
            console.log(result.data)
            console.log(result.data.message)
            setDogPhoto(result.data.message);
        }
        void onClickSync();
    }, [])
    return (
        <div>
        <img src={dogPhoto} />
        </div>
    )


}