import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const ErrorIcon = styled.svg`
  margin-right: 1rem;
`;

const ErrorText = styled.p`
  color: #e74c3c;
  font-weight: bold;
  font-family: "Karla", sans-serif;
  font-size: 1.3rem;
`;

const Error = ({ errorMsg }: { errorMsg: string }) => {
  return (
    <ErrorWrapper>
      <Fade>
        <ErrorIcon
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          color="#e74c3c"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </ErrorIcon>
        <ErrorText>{errorMsg}</ErrorText>
      </Fade>
    </ErrorWrapper>
  );
};

export default Error;
