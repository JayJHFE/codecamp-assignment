import { ContentsBox, PageBtn, PNBtn, Title, Contents } from  "./Pagination.styles"
import { IPaginationProps } from "./Pagination.types";


export default function PaginationUI (props : IPaginationProps) {
    console.log(props.isClick, props.startPage);
    return(
      <>
        {props.data?.fetchBoards?.map((el) => (
          <ContentsBox key={el._id}>
            <Title>{el.title}</Title>
            <Contents>{el.contents}</Contents>
          </ContentsBox>
        ))}
        <PNBtn onClick={props.onClickPrevPage} disabled={props.startPage === 1}>이전페이지</PNBtn>
        {new Array(10).fill("철수").map(
          (_, index) => {
            return index + props.startPage <= props.lastPage && (
              <PageBtn
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
                style={{ margin: "10px" }}
                isActive = {props.isClick === index + props.startPage ? true : false }
              >
                {index + props.startPage}
              </PageBtn>
            ) 
          })}
        <PNBtn onClick={props.onClickNextPage} disabled={ props.startPage + 10 > props.lastPage}>다음페이지</PNBtn>
      </>
    );
}