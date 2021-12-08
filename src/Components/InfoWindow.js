import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #80808085;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Card = styled.div`
  position: relative;
  width: 500px;
  background: white;
  border: 1px black solid;
  padding: 10px;
  margin-bottom: 10px;
`;

const Preview = styled.div`
  width: 100%;
  height: 300px;

  ${(props) => `
    background: url('${props.img}') no-repeat center/cover
  `}
`;

const Name = styled.span`
  font-size: 16px;
  color: #141497;
`;

const Status = styled.div`
  font-size: 16px;
  color: black;
`;

const Game = styled.span`
  font-size: 14px;
  color: #141497;
`;

const Viewers = styled.div`
  font-size: 14px;
  color: #141497;
`;

const CloseButton = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  transform: translate(50%, -50%);
  width: 30px;
  height: 30px;
  border: 1px black solid;
  border-radius: 50%;
  background: white;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 50%;
    width: 15px;
    height: 3px;
    border-radius: 5px;
    background: black;
    transform: translate(50%, -50%) rotate(45deg);
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 50%;
    width: 15px;
    height: 3px;
    border-radius: 5px;
    background: black;
    transform: translate(50%, -50%) rotate(-45deg);
  }
`;

function Info({ productInfo, setProductInfo }) {
  return (
    <Card>
      <CloseButton onClick={() => setProductInfo()} />
      <Preview img={productInfo.preview.large} />
      <Status>{productInfo.channel.status}</Status>
      <Name>{productInfo.channel.display_name}</Name>・
      <Game>{productInfo.game}</Game>
      <Viewers>viewers: {productInfo.viewers}</Viewers>
    </Card>
  );
}

function IndoWindow({ productInfo, setProductInfo }) {
  return (
    <Wrapper>
      <Info productInfo={productInfo} setProductInfo={setProductInfo} />
    </Wrapper>
  );
}

export default IndoWindow;
