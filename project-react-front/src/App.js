import React, {useState } from "react";
import "./index.css";
import { ShopFilter } from "./components/shop/ShopFilter";
import ProductList from "./components/productList/ProductList";
import Cart from "./components/cart/Cart";
import Img from "./img/image1.jpeg";
import Img2 from "./img/image2.jpeg";
import Img3 from "./img/image3.jpeg";
import Img4 from "./img/image4.jpeg";
import Img5 from "./img/images.png";
import { Main } from "./styled";

const products = [
  {
    id: 1,
    name: "Camisa nave",
    price: 100.0,
    image: Img,
    description: "Descrição do Produto 1",
  },
  {
    id: 2,
    name: "Camisa planetas",
    price: 200.0,
    image: Img2,
    description: "Descrição do Produto 2",
  },
  {
    id: 3,
    name: "Camisa perdido",
    price: 150.0,
    image: Img3,
    description: "Descrição do Produto 3",
  },
  {
    id: 4,
    name: "Camisa espaço",
    price: 125.0,
    image: Img4,
    description: "Descrição do Produto 4",
  },
  {
    id: 5,
    name: "Camisa preta",
    price: 129.0,
    image: Img5,
    description: "Descrição do Produto 5",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");



  function handleMinPriceChange(event) {
    setMinPrice(event.target.value);
  }

  function handleMaxPriceChange(event) {
    setMaxPrice(event.target.value);
  }

  function handleCheckout() {
    alert("Compra finalizada!");
    setCartItems([]);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSortOrderChange(event) {
    setSortOrder(event.target.value);
  }

  function handleAddToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function addItemFromCart(product) {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id && item.quantity >= 1? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  function removeItemFromCart(product) {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id && item.quantity >= 2? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  function handleRemoveFromCart(product) {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (minPrice === "" || product.price >= parseFloat(minPrice)) &&
      (maxPrice === "" || product.price <= parseFloat(maxPrice))
  );
  const sortedProducts =
    sortOrder === "asc"
      ? filteredProducts.sort((a, b) => a.price - b.price)
      : sortOrder === "desc"
      ? filteredProducts.sort((a, b) => b.price - a.price)
      : filteredProducts;

  return (
    <div>
      <ShopFilter
        minPrice={minPrice}
        handleMinPriceChange={handleMinPriceChange}
        maxPrice={maxPrice}
        handleMaxPriceChange={handleMaxPriceChange}
        search={search}
        handleSearchChange={handleSearchChange}
        sortOrder={sortOrder}
        handleSortOrderChange={handleSortOrderChange}
        cartItems={cartItems}
      />
      <Main>
        <ProductList products={sortedProducts} onAddToCart={handleAddToCart} />
        <Cart
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          handleCheckout={handleCheckout}
          removeItemFromCart={removeItemFromCart}
          addItemFromCart={addItemFromCart}
        />
      </Main>
    </div>
  );
}

export default App;
