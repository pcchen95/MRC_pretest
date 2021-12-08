import styled from "styled-components";
import { useState, useRef } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`;

const Picture = styled.div`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.image &&
    `
      background: url("${props.image}") no-repeat center/cover;
    `}
`;

const PrevButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #9898a1a8;
  font-size: 24px;
  cursor: pointer;
`;

const NextButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #9898a1a8;
  font-size: 24px;
  cursor: pointer;
`;

const PageButtonMain = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  right: 0;
  left: 0;
  height: 20px;
  transform: translate(0, -50%);
`;

const ButtonToPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  border: 1px gray solid;
  cursor: pointer;

  & + div {
    margin-left: 5px;
  }

  ${(props) =>
    props.page === props.index &&
    `
    background: grey;
    border: 1px white solid;
    color: white;
  `}
`;

function Background({ picture }) {
  return <Picture image={picture} />;
}

function Next({ handleEvent }) {
  return <NextButton onClick={handleEvent}>{">"}</NextButton>;
}

function Prev({ handleEvent }) {
  return <PrevButton onClick={handleEvent}>{"<"}</PrevButton>;
}

function PageButton({ page, setPage }) {
  return (
    <PageButtonMain>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
        <ButtonToPage
          key={n}
          page={page}
          index={n}
          onClick={() => {
            setPage(n);
          }}
        >
          {n}
        </ButtonToPage>
      ))}
    </PageButtonMain>
  );
}

function Carousel() {
  const pictures = useRef({
    1: "img1.jpg",
    2: "img2.jpg",
    3: "img3.jpg",
    4: "img4.jpg",
    5: "img1.jpg",
    6: "img2.jpg",
    7: "img3.jpg",
    8: "img4.jpg",
    9: "img1.jpg",
    10: "img2.jpg",
  });
  const [page, setPage] = useState(1);

  return (
    <Wrapper>
      <Background picture={pictures.current[page]} />
      <Next handleEvent={() => setPage(page < 10 ? page + 1 : 1)} />
      <Prev handleEvent={() => setPage(page > 1 ? page - 1 : 10)} />
      <PageButton page={page} setPage={setPage} />
    </Wrapper>
  );
}

export default Carousel;
