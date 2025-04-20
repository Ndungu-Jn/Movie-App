const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Function</h2>
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
