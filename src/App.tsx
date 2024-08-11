import backgroundImage from "./assets/img/toto_eat.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >

        
        <div className="app"></div>
        <h1 style={{ color: "pink", backgroundColor: "white" }}>
          デグメディア
        </h1>
        <div className="card"></div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
