// `http://numbersapi.com/random?min=1&max=200` 
// `https://koreanjson.com/posts/${num}` 
// `https://koreanjson.com/posts?userId=${userId}`

import axios from "axios";
import { useState } from "react";



export default function CallBackPage() {
    const [zzz, setZzz] = useState();
    const [promise, setPromise] = useState();
    const [qqq, setQqq] = useState();
    const myCallback = () => {
        const aa = new XMLHttpRequest();
        aa.open("get", `http://numbersapi.com/random?min=1&max=200`);
        aa.send();
        aa.addEventListener("load", (res) => {
            // API 요청 결과
            const num = res.target.response.split("")[0]; // 171 (랜덤 숫자)

            const bb = new XMLHttpRequest();
            bb.open("get", `https://koreanjson.com/posts/${num}`);
            bb.send();
            bb.addEventListener("load", (res) => {
                // API 요청 결과
                const userId = JSON.parse(res.target.response).UserId;

                const cc = new XMLHttpRequest();
                cc.open(
                    "get",
                    `https://koreanjson.com/posts?userId=${userId}`
                );
                cc.send();
                cc.addEventListener("load", (res) => {
                   
                    const fff = JSON.parse(res.target.response);
                  
                    setZzz(fff);
                    
                    
                    
                     
                });
            });
        });
    };


    const myPromise = () => {
        axios
            .get(`http://numbersapi.com/random?min=1&max=200`)
            .then((res) => {
                const num = res.data.split("")[0]
                return axios.get(`https://koreanjson.com/posts/${num}`); 
            })
            .then((res) => {
                console.log(res)
                const userId = res.data.UserId
                console.log(userId)
                return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
            })
            .then((res) => {
                // console.log(res);
                setPromise(res);
                // console.log(promise);
            });
        console.log("======끝========")
    };

    const myAsyncAwait = async() => {
        console.log("맘마미아")
        const result1 = await axios.get(`http://numbersapi.com/random?min=1&max=200`);
        // console.log(result1);
        const num = result1.data.split("")[0]
        // console.log(num);
        const result2 = await axios.get(`https://koreanjson.com/posts/${num}`);
        // console.log(result2)
        const userId = result2.data.UserId
        const result3 = await axios.get(`https://koreanjson.com/posts?userId=${userId}`);
        // console.log(result3);
        setQqq(result3);
    
    };
    return(
        <>
        결과: <button onClick={myCallback}>Callback</button>
        결과: <button onClick={myPromise}>Promise</button>
        결과: <button onClick={myAsyncAwait}>Async/Await</button>
        {zzz?.map ((el) => (
             <div key = {el.id}>{el.title}</div>
        ))}
        {promise?.data?.map ((el) => (
            <div key = {el.id}>{el.title}</div>
        ))}
        {qqq?.data?.map ((el) => (
             <div key = {el.id}>{el.title}</div>
        ))}
        </>
    )
}

