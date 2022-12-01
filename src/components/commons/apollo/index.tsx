import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  
  const uploadLink = createUploadLink({
    uri: "http://backend10.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 모두 임시로 저장해 놓기 => 나중에 알아보기
  });

  // prettier-ignore
  return (
    <>
        <div>안녕하세요 영희입니다</div>
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
        <div>안녕하세요 훈이입니다</div>
    </>
  );
}