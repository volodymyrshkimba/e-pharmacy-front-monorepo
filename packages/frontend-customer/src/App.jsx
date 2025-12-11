import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePageLayout from "./components/HomePageLayout/HomePageLayout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import MedicineStorePage from "./pages/MedicineStorePage/MedicineStorePage";
import MedicinePage from "./pages/MedicinePage/MedicinePage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<HomePageLayout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="/" element={<SharedLayout />}>
          <Route path="medicine-store" element={<MedicineStorePage />} />
          <Route path="medicine" element={<MedicinePage />} />
          <Route path="medicine/product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
