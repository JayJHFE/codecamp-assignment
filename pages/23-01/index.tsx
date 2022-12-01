export default function Test() {

    const onClickButton = (event) => (qqq) => {
       return function () {
        console.log(qqq)
       }      
    }

    return(
        <>
            <button onClick={onClickButton()(123)}>임의의</button>
        </>
    ) 
}