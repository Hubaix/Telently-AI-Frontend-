import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Auth, Login, ForgetPassword, NotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<Login />}/>
        <Route path="forget-password" element={<ForgetPassword />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
