import styled from "styled-components";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background: gray;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-top: 10px;
`;

function Countdown() {
  const countdownTime = 60 * 60 * 2;
  const [remainTime, setRemainTime] = useState(countdownTime);
  useEffect(() => {
    const startTime = Date.now();
    setInterval(() => {
      setRemainTime(() => {
        const remain = countdownTime - (Date.now() - startTime) / 1000;
        return remain >= 0 ? remain : 0;
      });
    }, 1000);
  }, [countdownTime]);

  return (
    <Wrapper>
      倒數計時 {new Date(remainTime * 1000).toISOString().substr(11, 8)}
    </Wrapper>
  );
}

export default Countdown;
