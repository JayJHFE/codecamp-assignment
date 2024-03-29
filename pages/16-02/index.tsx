import Router from "next/router";
import { useEffect, useState } from "react";

export default function ClassMyComponent() {
  const [ count, setCount] = useState(0)
  useEffect(()=>{
    console.log("컴포넌트가 마운트 됐습니다~")
  }, [])
  useEffect(()=>{
    console.log("컴포넌트가 변경됐습니다~")
  }, [count])
  useEffect(()=>{
    return() => {
    alert("컴포넌트가 제거됩니다~")     
    }
  }, [])

  const onClickButton = () => {
    setCount((prev)=> prev + 1)
  }

  const onClickMove = () => {
    Router.push("/")
  }
    return (
      <>
        <div>카운트: {count}</div>
				<button onClick={onClickButton}>카운트(+1)</button>
        <button onClick={onClickMove}>이동하기</button>
      </>
    );
}