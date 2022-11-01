// let-document
// export default function CertificationNumber() {
    
//     function onClickNumberGeneration() {
//         const certnum = document.getElementById("number").innerText = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
        
//         document.getElementById("number").innerText = certnum;
//     }

//     return (
//         <>
//             <div id="number">000000</div>
//             <button onClick={onClickNumberGeneration}>인증번호전송</button>
//         </>
//     )

// }

// State
import {useState} from 'react'

export default function CertificationNumber() {
    const [certnum, setCertnum] = useState(String("000000")) 

    function onClickNumberGeneration() {
        setCertnum(String(Math.floor(Math.random() * 1000000)).padStart(6,"0"))
    }

    return (
        <>
            <div>{certnum}</div>
            <button onClick={onClickNumberGeneration}>인증번호전송</button>
        </>
    )

}