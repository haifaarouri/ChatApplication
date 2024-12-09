import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
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
