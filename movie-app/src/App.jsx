import { use, useEffect, useState, useTransition } from "react";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div
      className="card"
      onClick={() => setCount((prevState) => prevState + 1)}
    >
      <h2>
        {title} <br /> {count}
      </h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card
        title="starwars"
        rating={5}
        isCool={true}
        actors={[{ name: "actors" }]}
      />
      <Card title="Avatar" />
      <Card title="Lion king" />
    </div>
  );
};

export default App;
