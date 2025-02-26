import { Link } from "react-router";

const restaurants = [
  {
    name: "Penka",
    id: "01953ED6728D7BB0BDCB5EC4BE782FBE",
  },
];

function App() {
  return (
    <div>
      {restaurants.map((r) => (
        <Link key={r.id} to={`/restaurants/${r.id}`}>
          {r.name}
        </Link>
      ))}
    </div>
  );
}

export default App;
