// let-document
// export default function CounterLetDocument() {
    
//     function onClickCountUp() {
//         const count = Number(document.getElementById("count").innerText) + 1;
//         document.getElementById("count").innerText = count;
//     }

//     return (
//         <>
//             <div id="count">0</div>
//             <button onClick={onClickCountUp}>카운트증가</button>
//         </>
//     )

// }

// State
import {useState} from 'react'

export default function CounterState() {
    const [count, setCount] = useState(0) 

    function onClickCountUp() {
        setCount(count + 1)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트증가</button>
        </>
    )

}