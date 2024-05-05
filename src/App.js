import "./App.css";
import { Routes, Route } from "react-router-dom";
import { IntercomSupport } from "./components";
import { Home, Auth, Login, ForgetPassword, MockInterview, InterviewInfo, InterviewDisplay, InterviewComplete, NotFound } from "./pages";

function App() {
  return (
    <div>
      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>
        <Route path="/mock-interview" element={<MockInterview />} />
        <Route path="/mock-interview/interview-info" element={<InterviewInfo />} />
        <Route path="/mock-interview/interview" element={<InterviewDisplay />} />
        <Route path="/mock-interview/interview/complete" element={<InterviewComplete />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Intercom Support */}
      <IntercomSupport />
    </div>
  );
}

export default App;
