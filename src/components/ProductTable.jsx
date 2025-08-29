export default function ProductTable({ products }) {
  return (
    <div className="table-reponsive">
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <img src={p.image} alt={p.title} width={50} />
              </td>
              <td>{p.title}</td>
              <td>${p.price}</td>
              <td>⭐ {p.rating?.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
