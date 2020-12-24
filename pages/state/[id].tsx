import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/Button";

export default function State() {
  const router = useRouter();

  function goHome() {
    router.push("/");
  }

  return (
    <header>
      <Button text="<= Back" onClick={goHome} className="button" />
      <h1>{router.query.id}</h1>
      <style jsx>{`
        header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        h1 {
          margin: 0 auto;
        }
      `}</style>
    </header>
  );
}
