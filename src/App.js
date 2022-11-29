// import logo from "./logo.svg";
import {store} from "./redux";
import { Provider } from "react-redux";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Product from "./Product/Product";
import Page404 from "./Page404";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/costumes/" element={<Content />} />
        <Route path="/costumes/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
