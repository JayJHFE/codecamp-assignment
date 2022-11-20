import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../src/commons/types/generated/types";
import PaginationUI from "./Pagination.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Pagination.queries";

export default function PaginationCT() {

    const [startPage, setStartPage] = useState(1);
    const [isClick, setIsClick] = useState(1);

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const { data: dataBoardsCount } = useQuery<
        Pick<IQuery, "fetchBoardsCount">,
        IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);

    const lastPage =
        dataBoardsCount != null
        ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
        : 1;
    


  console.log("==========");
  console.log(data?.fetchBoards);
  console.log("==========");

  // const mystyles = {
  //     margin: "10px"
  // }

  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    setIsClick(Number(event.currentTarget.id))
    void refetch({ page: Number(event.currentTarget.id) });
    // if(event.currentTarget.id)
  };


  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setIsClick(isClick - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setIsClick(isClick + 10);
      void refetch({ page: startPage + 10 });
    }
  };

    return (
        <PaginationUI
        startPage = {startPage}
        isClick = {isClick}
        data = {data}
        refetch = {refetch}
        dataBoardsCount = {dataBoardsCount}
        lastPage = {lastPage}
        onClickPage = {onClickPage}
        onClickPrevPage = {onClickPrevPage}
        onClickNextPage = {onClickNextPage}
        />
    )
}