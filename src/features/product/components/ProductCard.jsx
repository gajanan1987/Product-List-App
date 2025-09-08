export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="card-banner">
        <img src={product.image} alt={product.title} />
        <h4 className="title">{product.title}</h4>
      </div>
      <div className="card-details">
        <p className="price">$ {product.price}</p>
        <p className="rating">⭐ {product.rating?.rate}</p>
      </div>
    </div>
  );
}
