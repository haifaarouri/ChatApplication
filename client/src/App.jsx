import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <Routes>
      <Route index element={<SignUp />} />
      <Route path="home" element={<Home />} />
      {/* <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route> */}
    </Routes>
  );
}

export default App;
