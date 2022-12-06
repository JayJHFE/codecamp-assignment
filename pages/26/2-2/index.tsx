import { gql, useMutation, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types";
import { useForm } from "react-hook-form";
import * as S from "../2-2/Quiz.styles"


interface IFormData {
    writer: string;
    title: string;
    contents: string;
    password: string;
  }

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const { register, handleSubmit } = useForm<IFormData>({
    mode: "onChange",
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => () => {
    void deleteBoard({
      variables: { boardId },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard; // 삭제된ID
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId // el._id가 안되므로, readField를 사용해서 꺼내오기
              );
              return [...filteredPrev]; // 삭제된ID를 제외한 나머지 9개만 리턴
            },
          },
        });
      },
    });
  };
  const onClickCreate = (data:IFormData) => {
    void createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
    <S.FormWrapper onSubmit={handleSubmit(onClickCreate)}>
            작성자: <S.InputBox type="text" {...register("writer")} />
            <br/> 
            비밀번호: <S.InputBox type="password" {...register("password")} />
            <br/> 
            제목: <S.InputBox type="text" {...register("title")} />
            <br/> 
            내용: <S.InputBox type="text" {...register("contents")} />
            <br/>
            <S.Btn>등록하기</S.Btn>
    </S.FormWrapper>
    <S.ListBox>
        <S.TitleRow>
          <S.TitleColumn>번호</S.TitleColumn>
          <S.TitleColumn>제목</S.TitleColumn>
          <S.TitleColumn>작성자</S.TitleColumn>
          <S.TitleColumn>내용</S.TitleColumn>
        </S.TitleRow>
       {data?.fetchBoards.map((el,idx) => (
          <S.Row key={el._id}>
            <S.Column>
              {idx + 1}
            </S.Column>
            <S.Column>
              {el.title}
            </S.Column>
            <S.Column>
              {el.writer}
            </S.Column>
            <S.Column>{el.contents}</S.Column>
            <S.BtnD onClick={onClickDelete(el._id)}>X</S.BtnD>
          </S.Row>
        ))}
      </S.ListBox>









    {/* <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>X</button>
        </div>
      ))}
    </div> */}
    </>
  );
}

