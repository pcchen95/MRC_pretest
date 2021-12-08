import styled from "styled-components";

const GoTopBtn = styled.div`
  position: fixed;
  bottom: 50px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px black solid;
  border-radius: 5px;
  cursor: pointer;

  &:before {
    content: "";
    border-top: 20px transparent solid;
    border-right: 20px transparent solid;
    border-bottom: 20px black solid;
    border-left: 20px transparent solid;
    transform: translate(0, -25%);
  }
`;

function GoTop() {
  return (
    <GoTopBtn
      onClick={() =>
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    />
  );
}

export default GoTop;
