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
        <div className="card"></div>
        
      </div>
    </>
  );
}

export default App;
