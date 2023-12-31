import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/cart/CartContext/CartContext";
import CheckOut from "./components/CheckOut/CheckOut";
import Voucher from "./components/Voucher/Voucher";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route exact path="/cart" element={<Cart />}/>
          <Route exact path="/checkout" element={<CheckOut />}/>
          <Route exact path="/voucher/:idOrder" element={<Voucher />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
