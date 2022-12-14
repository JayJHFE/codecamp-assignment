import { useRouter } from "next/router";
import { useEffect } from "react";
import { preloadImage } from "../../../../../src/commons/libraries/preloadimage";

const PRELOAD_IMAGES = [
  "https://p4.wallpaperbetter.com/wallpaper/424/586/377/sky-4k-hd-high-definition-wallpaper-preview.jpg",
];

export default function PreloadPage() {
  const router = useRouter();

  useEffect(() => {
    preloadImage(PRELOAD_IMAGES);
  }, []);

  const onClickMove = () => {
    void router.push("/32/02/02/preload-moved");
  };

  return <button onClick={onClickMove}>페이지 이동하기</button>;
}
