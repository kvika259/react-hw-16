import { useNavigate } from "react-router";

function CatalogPage({ products }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Каталог</h2>
      <ol>
        {products.map(i => (
          <li key={i.id}>
            {i.name}
            <button onClick={() => navigate(`/product/${i.id}`)}>
              Перейти к товару
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CatalogPage;
