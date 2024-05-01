import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Auth, Login, ForgetPassword, MockInterview, NotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<Login />}/>
        <Route path="forget-password" element={<ForgetPassword />} />
      </Route>
      <Route path="/mock-interview" element={<MockInterview/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
