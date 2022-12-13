import { useCallback, useMemo, useState } from "react";
import ChildPage from "./child";

export default function ParentPage() {
  console.log("부모컴포넌트 렌더링");


  const [countState, setCountState] = useState(0);
  let countLet = useMemo(() => 0, []);
  

    // const onClickCountLet =() => {
    //     console.log(countLet + 1);
    //     countLet += 1;
    // }
    // const onClickCountState = () => {
    //     console.log(countState + 1);
    //     setCountState((prev) => prev + 1);
        
    // }


  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);


  // const onClickCountState = useCallback(() => {
  //   console.log(countState + 1);
  //   setCountState((prev) => prev + 1);
  // }, []);

 
    const onClickCountState2 = useMemo(() => {
      return () => {
          console.log(countState + 1);
          setCountState((prev) => prev + 1);
      }
    }, []);
  return (
    <>
      <h1>부모 컴포넌트</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state) : {countState} </div>
      <button onClick={onClickCountState2}>카운트(state) +1 올리기</button>
      <ChildPage/>
    </>
  );
}
