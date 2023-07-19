import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Home } from "./Pages/index";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/register/" element={<Register />} exact />
        <Route path="/login/" element={<Login />} exact />
      </Routes>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default App;
