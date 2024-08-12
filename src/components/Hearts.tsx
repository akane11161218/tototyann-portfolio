import Heart from "./Heart";

const Hearts = () => {
  const hearts = [
    { top: 0, left: 50 },
    { top: 200, left: 130 },
    { top: -300, left: 500 },
    { top: 0, left: 500 },
  ];

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {hearts.map((heart, index) => (
        <Heart key={index} top={heart.top} left={heart.left} />
      ))}
    </div>
  );
};


export default Hearts;
