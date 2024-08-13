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
        <div>おやつランキング</div>
        <div>No.１</div>
        <div>No.２</div>
        <div>No.３</div>
        <LinkButton to="/">ホームへ</LinkButton>
      </div>
    </>
  );
};

export default Oyatu;


<div className="image-container">
  
</div>
