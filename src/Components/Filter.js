import styled from "styled-components";
import { getProducts } from "../WebApi/productApi";

const Wrapper = styled.div`
  width: 180px;
  margin-top: 10px;
  margin-right: 20px;
  padding: 0 10px;
`;

const CategoryBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: white;
  border: black 1px solid;
  border-radius: 8px;
  margin-bottom: 5px;
  cursor: pointer;
`;

function Category({ name, setProducts }) {
  return (
    <CategoryBtn
      onClick={() => {
        const param = name === "All" ? "" : { game: name };
        getProducts(param).then((res) => setProducts(res.streams));
      }}
    >
      {name}
    </CategoryBtn>
  );
}

function Filter({ setProducts }) {
  return (
    <Wrapper>
      <Category name={"All"} setProducts={setProducts} />
      <Category name={"Just Chatting"} setProducts={setProducts} />
      <Category name={"Sports"} setProducts={setProducts} />
      <Category name={"Grand Theft Auto V"} setProducts={setProducts} />
      <Category name={"League of Legends"} setProducts={setProducts} />
    </Wrapper>
  );
}

export default Filter;
