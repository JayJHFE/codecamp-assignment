import Layout from "../../13-01/layout"
import { Global } from "@emotion/react"
import { globalStyles } from "../../styles/globalStyles"


export default function PageOne () {
    
    return (<>
    <Global styles={globalStyles} />
    <Layout/> 
    </>)
}