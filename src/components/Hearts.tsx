import Heart from "./Heart";

const Hearts = () => {
  const hearts = [
    { top: 40, left: 80 },
    { top: 50, left: 70 },
    { top: 10, left: 7 },
    { top: 15, left: 10
     },
  ];

  return (
    <div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
      {hearts.map((heart, index) => (
        <Heart key={index} top={heart.top} left={heart.left} />
      ))}
    </div>
  );
};

export default Hearts;
