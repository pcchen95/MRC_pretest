import styled from "styled-components";
import { useState } from "react";
import { getProducts } from "../WebApi/productApi";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  background: gray;
  display: flex;
  padding: 10px 0 10px 20px;
  z-index: 1;
`;

const SearchBox = styled.div`
  position: relative;
  width: 500px;
  height: 30px;
  background: white;
  border: 1px gray solid;
`;

const InputBox = styled.input`
  height: 100%;
  width: 100%;
  border: 0px;
  padding-left: 10px;
`;

const ClearIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 40px;
  height: 30px;
  transform: translate(0, -50%);
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 20px;
    height: 3px;
    border-radius: 5px;
    background: grey;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 20px;
    height: 3px;
    border-radius: 5px;
    background: grey;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

function Search({ value, setValue, handleEvent, setProducts }) {
  return (
    <SearchBox>
      <InputBox
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleEvent}
      />

      <ClearIcon
        onClick={() => {
          setValue("");
          getProducts().then((res) => setProducts(res.streams));
        }}
      />
    </SearchBox>
  );
}

function Navbar({ products, setProducts }) {
  const [value, setValue] = useState("");

  return (
    <Wrapper>
      <Search
        value={value}
        setValue={setValue}
        setProducts={setProducts}
        handleEvent={(e) => {
          if (e.key === "Enter") {
            const newProducts = [];
            products.forEach((product) => {
              const inputValue = value.toLowerCase();
              const searchString = product.channel.display_name.toLowerCase();
              if (searchString.indexOf(inputValue) >= 0) {
                newProducts.push(product);
              }
            });
            setProducts(newProducts);
          }
        }}
      />
    </Wrapper>
  );
}

export default Navbar;
