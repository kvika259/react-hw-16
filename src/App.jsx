import { Routes, Route, NavLink } from "react-router";
import HomePage from "./components/HomePage";
import { lazy, Suspense, useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

const CatalogPage = lazy(() => import("./components/CatalogPage"));
const ProfilePage = lazy(() => import("./components/ProfilePage"));
const ProductPage = lazy(() => import("./components/ProductPage"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));

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

      <Suspense
        fallback={
          <div style={{ padding: "20px", textAlign: "center" }}>
            Загрузка страницы...
          </div>
        }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/product/:id"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/catalog"
            element={<CatalogPage products={products} />}
          />
          <Route element={<PrivateRoute auth={auth} />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
