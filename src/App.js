import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Auth, Login, ForgetPassword, MockInterview, NotFound } from "./pages";
import {MainMenu, CustomInterview, SelectedInterview} from "./sections";

function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />
      
      {/* Auth routes */}
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<Login />}/>
        <Route path="forget-password" element={<ForgetPassword />} />
      </Route>

      {/* Mock interview routes */}
      <Route path="/mock-interview" element={<MockInterview/>}>
        <Route index element={<MainMenu />} />
        <Route path="custom" element={<CustomInterview/>} />
        <Route path=":id" element={<SelectedInterview/>} />
      </Route>
      
      {/* Page Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
