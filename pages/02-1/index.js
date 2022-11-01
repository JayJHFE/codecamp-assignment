// let-document
// export default function ChangeButtonName() {
    
//     function onClickChangeName() {
//         const name = document.getElementById("Hello").innerText = "반갑습니다"
//         document.getElementById("Hello").innerText = name;
//     }    

//     return (
//         <>
//             <button id="Hello" onClick={onClickChangeName}>안녕하세요</button>
//         </>
//     )

// }

// State
import {useState} from 'react'
export default function ChangeButtonName() {
    const [change,setChange] = useState("안녕하세요")
    
    function onClickChangeName() {        
        setChange("반갑습니다")
    }


    return(
        <>
            <button onClick={onClickChangeName}>{change}</button>
        </>
    )
}
