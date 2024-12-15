import { Link } from "react-router";

const restaurants = [
  {
    name: "Penka",
  },
];

function App() {
  return (
    <div>
      {restaurants.map((r) => (
        <Link key={r.name} to={`/restaurants/${r.name}`}>
          {r.name}
        </Link>
      ))}
    </div>
  );
}

export default App;
