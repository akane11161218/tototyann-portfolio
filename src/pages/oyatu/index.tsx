import React, { useEffect } from "react";
import LinkButton from "../../components/LinkButton";
import "./Oyatu.module.css";

const Oyatu = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#E0FFFF";
    return () => {
      document.body.style.backgroundColor = ""; // クリーンアップ
    };
  }, []);

  return (
    <>
      <div>
        <div>おやつ解説</div>
        <div>⚫︎チモシーの極み</div>
        <div>⚫︎ベジドロップ</div>

        <LinkButton to="/">ホームへ</LinkButton>
      </div>
    </>
  );
};

export default Oyatu;

<div className="image-container"></div>;
