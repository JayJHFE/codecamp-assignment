import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File[]>([]);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async () => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
}
const onChangePassword = (event) => {
  setPassword(event.target.value)
}
const onChangeTitle = (event) => {
  setTitle(event.target.value)
}
const onChangeContents = (event) => {
  setContents(event.target.value)
}

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
      if (file === undefined) return;
      console.log(file);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유: event.target은 태그만을 가르키지 않음
          setImageUrl(event.target?.result);
          setFile(file);
        }
      };
    };

  return (
    <>
      <div style={{width: "500", height: "500"}}>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <input type="file" onChange={onChangeFile(0)} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>저장하기</button>
      </div>
    </>
  );
}
