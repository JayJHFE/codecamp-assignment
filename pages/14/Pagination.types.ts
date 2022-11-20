import { MouseEvent } from "react"
import { IQuery } from "../../src/commons/types/generated/types"

export interface IPaginationProps {
    startPage : number
    data? : Pick<IQuery,"fetchBoards">
    refetch : any
    dataBoardsCount : any
    lastPage : number
    onClickPage : (event: MouseEvent<HTMLButtonElement>) => void
    onClickPrevPage : () => void
    onClickNextPage : () => void
    isClick : number
}