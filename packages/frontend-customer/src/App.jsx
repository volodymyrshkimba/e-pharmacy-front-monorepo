import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage login />} />
        <Route path="/" element={<SharedLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
