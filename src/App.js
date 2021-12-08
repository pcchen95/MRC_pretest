import { useState, useEffect } from "react";
import { getProducts } from "./WebApi/productApi";
import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Countdown from "./Components/Countdown";
import Filter from "./Components/Filter";
import Lists from "./Components/Lists";
import IndoWindow from "./Components/InfoWindow";
import GoTop from "./Components/GoTop";
import "./App.css";

const Main = styled.div`
  position: relative;
  width: 1080px;
`;

const ListArea = styled.div`
  width: 100%;
  display: flex;
`;

function App() {
  const [products, setProducts] = useState();
  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    getProducts().then((res) => setProducts(res.streams));
  }, []);

  return (
    <>
      <Main>
        <Navbar products={products} setProducts={setProducts} />
        <Carousel />
        <Countdown />
        <ListArea>
          <Filter setProducts={setProducts} />
          <Lists products={products} setProductInfo={setProductInfo} />
        </ListArea>
        <GoTop />
      </Main>
      {productInfo && (
        <IndoWindow productInfo={productInfo} setProductInfo={setProductInfo} />
      )}
    </>
  );
}

export default App;
