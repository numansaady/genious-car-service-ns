import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Experts from "./Pages/HomePage/Experts/Experts";
import Home from "./Pages/HomePage/Home/Home";
import ServiceDetail from "./Pages/HomePage/Services/ServiceDetail/ServiceDetail";
import Services from "./Pages/HomePage/Services/Services";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Experts />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
