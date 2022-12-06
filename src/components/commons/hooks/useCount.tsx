import { useState } from "react";

export default function useCountPage() {
    // const result = useState(0);
    const [count,setCount] = useState(0);
  
    const onClickCountUp = () => {
    //   result[1](result[0] + 1);
    //   console.log("aaaaaa")
    setCount(count + 1);
    };

    return{
        count,
        onClickCountUp
    };
}
  