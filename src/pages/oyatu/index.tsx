import { useEffect } from "react";
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
        <ul>
          <li>チモシーの極み</li>
        </ul>
        
        <ol>
          <li>
            <a href="#features">Amazon</a>
          </li>
          <li>
            <a href="#lessons">楽天</a>
          </li>
          <li>
            <a href="#history">小岩井ペット</a>
          </li>
        </ol>
        <img src={kiwamiImage} alt="チモシーの極み" />
        <ul>
          <li>ベジドロップ</li>
        </ul>
        
        <ol>
          <li>
            <a href="#features">Amazon</a>
          </li>
          <li>
            <a href="#lessons">楽天</a>
          </li>
          <li>
            <a href="#history">小岩井ペット</a>
          </li>
        </ol>
        <img src={begiImage} alt="ベジドロップ" />

        <LinkButton to="/">ホームへ</LinkButton>
      </div>
    </>
  );
};

export default Oyatu;

<div className="image-container"></div>;
