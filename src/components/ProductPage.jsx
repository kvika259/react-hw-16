import { useNavigate, useParams } from "react-router";

function ProductPage({ products }) {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <h3>{products.find(i => i.id == id).name}</h3>
      <h4>Характеристики</h4>
      <p>пупупу</p>
      <button onClick={() => navigate("/catalog")}>Назад в каталог</button>
    </div>
  );
}

export default ProductPage;
