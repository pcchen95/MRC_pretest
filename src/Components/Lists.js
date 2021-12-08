import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  align-items: flex-start;
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  flex-flow: wrap;
`;

const Card = styled.div`
  width: 200px;
  height: 180px;
  background: white;
  border: 1px black solid;
  padding: 10px;
  margin: 0 10px 10px 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    transform: scale(1.03);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 120px;

  ${(props) => `
    background: url('${props.img}') no-repeat center/cover
  `}
`;

const Name = styled.div`
  width: 100%;
  font-size: 16px;
  color: black;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Game = styled.div`
  width: 100%;
  font-size: 14px;
  color: #141497;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

function Item({ image, name, game, handleEvent }) {
  return (
    <Card onClick={handleEvent}>
      <Image img={image} />
      <Name>{name}</Name>
      <Game>{game}</Game>
    </Card>
  );
}

function Lists({ products, setProductInfo }) {
  return (
    <Wrapper>
      {products &&
        products.map((product) => (
          <Item
            key={product._id}
            image={product.preview.medium}
            name={product.channel.display_name}
            game={product.game}
            id={product._id}
            handleEvent={() => setProductInfo(product)}
          />
        ))}
    </Wrapper>
  );
}

export default Lists;
