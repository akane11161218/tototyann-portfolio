import backgroundImage from "../assets/img/toto_eat.jpg";
import Hearts from "../components/Hearts";
import LinkButton from "../components/LinkButton";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "pink", backgroundColor: "white" }}>
          デグメディア
        </h1>

        <h2
          style={{ color: "pink", backgroundColor: "white" }}
          className="fade-in"
        >
          〜おばあちゃんデグーの長生き方法〜
        </h2>

        <p style={{ color: "black", backgroundColor: "white", padding: "20px", borderRadius: "50px",marginTop: "260px" }}>

  このサイトでは <br />
  デグーを飼っている方々へ向けて<br />
  快適なデグ生を送ってもらうための
  <br />情報をお届けします<br />
</p>




        <LinkButton to="/oyatu">おすすめのおやつ</LinkButton>
        
        <div style={{ marginTop: "-100px" }}> {/* 位置調整用の div */}
          <LinkButton to="/asobu">遊ばせかた</LinkButton>
        </div>


        <Hearts />
        <div className="card"></div>
      </div>
    </>
  );
};

export default Home;
