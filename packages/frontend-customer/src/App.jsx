import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SharedLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
