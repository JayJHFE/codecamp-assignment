import { useRouter } from "next/router";

export default function KakaoMapRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/26/map1");
  };

  return (
    <>
      <button onClick={onClickMove}>카카오맵 이동하기</button>
    </>
  );
}
