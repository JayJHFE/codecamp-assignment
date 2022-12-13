import { memo } from "react";

function ChildPage() {
  console.log("자식컴포넌트 렌더링");
  return (
    <>
      <div>===========================</div>
      <h1>자식컴포넌트</h1>
    </>
  );
}

export default memo(ChildPage);
