import { Routes, Route, NavLink } from "react-router";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import CatalogPage from "./components/CatalogPage";
import ProfilePage from "./components/ProfilePage";
import NotFoundPage from "./components/NotFoundPage";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  const [auth, setAuth] = useState(false);

  const products = [
    { id: 1, name: "Рубашка" },
    { id: 2, name: "Брюки" },
    { id: 3, name: "Туфли" },
    { id: 4, name: "Рыба" },
    { id: 5, name: "Автомобиль" },
  ];
  return (
    <>
      <nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/catalog">Каталог</NavLink>
        <NavLink to="/profile">Личный кабинет</NavLink>
      </nav>
      <button onClick={() => setAuth(prev => !prev)}>
        {auth ? "Выйти" : "Войти"}
      </button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/product/:id"
          element={<ProductPage products={products} />}
        />
        <Route path="/catalog" element={<CatalogPage products={products} />} />
        <Route element={<PrivateRoute auth={auth} />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
