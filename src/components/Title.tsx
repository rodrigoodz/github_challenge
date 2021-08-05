import styled from "styled-components";

const H1 = styled.h1`
  padding: 0.2rem 0;
  font-size: 3.5rem;
  color: #f3f3f3;
  letter-spacing: 0.4rem;
  font-family: "Spectral", serif;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Title = ({ text }: { text: string }) => {
  return <H1>{text}</H1>;
};

export default Title;
