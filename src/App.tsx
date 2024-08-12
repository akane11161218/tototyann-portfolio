import backgroundImage from "./assets/img/toto_eat.jpg";
import "./App.css";

function App() {
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

        <h2 style={{ color: "pink", backgroundColor: "white" }}
        className="fade-in"
        >
          〜おばあちゃんデグーの長生き方法〜
        </h2>

        <div class="heart"></div>

        

        <div className="card"></div>
      </div>


    </>
  );
}

export default App;
