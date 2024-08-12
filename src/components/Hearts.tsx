import Heart from "./Heart";

const Hearts = () => {
  const hearts = [
    { top: 100, left: 100 },
    { top: 150, left: 300 },
    { top: 400, left: 200 },
    { top: 150, left: 500 },
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
