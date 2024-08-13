import React, { useEffect } from "react";
import LinkButton from "../../components/LinkButton";
import "./Oyatu.module.css";
import kiwamiImage from "../../assets/img/kiwami.jpg";
import begiImage from "../../assets/img/begi.jpg";

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
        <img src={kiwamiImage} alt="チモシーの極み" />
        <div>⚫︎ベジドロップ</div>
        <img src={begiImage} alt="ベジドロップ" />
        
        <LinkButton to="/">ホームへ</LinkButton>
      </div>
    </>
  );
};

export default Oyatu;

<div className="image-container"></div>;
