import { LikeOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

// prettier-ignore
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) { # 변수의 타입 적는 곳
    createBoard(createBoardInput: $createBoardInput) { # 실제 우리가 전달할 변수 적는 곳
      _id
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

export default function ImageUpLoadPage() {
  const fileref = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // <input tpye+file" multiple /> 일 때, 여러개 드래가 그낭

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  const onClickImage = () => {
    fileref.current?.click();
  };
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [create_board] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await create_board({
      variables: {
        createBoardInput: {
          writer: writer,
          password: password,
          title: title,
          contents: contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter} />
      비밀번호<input type="password" onChange={onChangePassword} />
      제목: <input type="text" onChange={onChangeTitle} />
      내용: <input type="text" onChange={onChangeContents} />
      <LikeOutlined 
        onClick={onClickImage}/>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileref}
        accept="image/jpeg,image/png"
      />
      {imageUrl !== "" && (<img src={`https://storage.googleapis.com/${imageUrl}`} />) }
      <button onClick={onClickSubmit}>저장하기</button>
    </div>
  );
}
