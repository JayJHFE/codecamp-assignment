import axios from 'axios'

export default function RestApiGetPage() {

    const onClickGetApi = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result.data);
    }

    return (
        <>
        <button onClick={onClickGetApi}>REST-API 요청하기</button>
        </>
    )


}