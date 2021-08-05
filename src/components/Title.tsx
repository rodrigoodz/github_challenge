import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

const H1 = styled.h1`
  padding: 0.2rem 0;
  font-size: 3rem;
  color: #f3f3f3;
  letter-spacing: 0.4rem;
  font-family: "Spectral", serif;
`;

const Title = ({ text }: { text: string }) => {
  return (
    <Fade triggerOnce>
      <H1>{text}</H1>
    </Fade>
  );
};

export default Title;
