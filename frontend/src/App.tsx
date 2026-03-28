import { Dashboard } from "./pages/dashboard";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/Signin";
import { LandingPage } from "./pages/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/share/:shareId" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function ErrorPage() {
  return (
    <div>
      <h1> Content Not Found</h1>
    </div>
  );
}
export default App;
