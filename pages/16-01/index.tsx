
import Router, { useRouter } from 'next/router'
import {useEffect, useState} from 'react'

export default function ClassClassCounterPage() {
    const [isChange,setIsChange] = useState(false)
    const router = useRouter
    useEffect(() => {
        alert("Rendered!")
    }, [])

    useEffect(() => {
        alert("Changed!!")
        console.log({isChange})
    }, [isChange]) 
    
    useEffect(() => {
        
        return() => {
        alert("Bye!!");
        }
    }, []); 

    const onClickChange = () => {
        setIsChange(prev => !prev)
        };
    

    const onClickMove = () => {
        void Router.push("/")
    }
        return (
            <>
            <button onClick={onClickChange}>변경</button>
            <button onClick={onClickMove}>이동</button>
            </>
        )

    
}