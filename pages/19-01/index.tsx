import { useEffect, useRef } from "react";

export default function useRefPage() {
  const pwRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    pwRef.current?.focus();
  });

  return <input type="password" ref={pwRef}></input>;
}