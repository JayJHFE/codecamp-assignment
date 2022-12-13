import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { IMutation, IMutationLoginUserExampleArgs } from "../../../src/commons/types/generated/types";
import { accessTokenState } from "../../../src/commons/stores";
// import {
//   IMutation,
//   IMutationLoginUserArgs,
// } from "../../../src/commons/types";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  // 1. 뮤테이션
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);
  // 2. 글로벌스테이트
  const [, setAccessToken] = useRecoilState(accessTokenState);
  // 3. 페이지이동
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(1111111111111);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
    // console.log("aaaaaaaaa");
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
    // console.log("bbbbbbbb");
  };

  const onClickLogin = async () => {
    try {
      // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
      const result = await loginUserExample({
        variables: { email, password },
      });
      console.log(result);
      const accessToken = result.data?.loginUserExample.accessToken;
      console.log(result);
      //2. 받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다" });
        console.log(4444444);
        return;
      }
      setAccessToken(accessToken);
      console.log(555555);

      //3. 로그인 성공페이지로 이동하기
      void router.push("/30/success");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
