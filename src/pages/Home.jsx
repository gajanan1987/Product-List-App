import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Store</h1>
      <Link to="/product-list" className="btn btn-primary">
        Go to Product List
      </Link>
    </div>
  );
}
