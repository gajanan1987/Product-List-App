import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Store</h1>
      <Link to="/product-list" className="btn btn-primary">
        Go to Product List
      </Link>
    </div>
  );
};

export default Home;
