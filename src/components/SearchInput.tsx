import React, { useState } from "react";
import styled from "styled-components";
import getUsers from "../helpers/getUsers";
import Error from "./Error";

const Form = styled.form`
  display: flex;
  border: 2px solid #8b8989;
  border-radius: 0.5rem;
  width: 30%;
  height: 2rem;
  padding: 0rem 1rem;
  margin: 1rem 0;
  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.02);
  }
`;

const Input = styled.input`
  color: #fff;
  background-color: transparent;
  border: none;
  text-align: center;
  width: 90%;
  outline: none;
  font-weight: lighter;
  font-size: 1.3rem;
  font-family: "Spectral", serif;

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Icon = styled.button`
  border: none;
  width: 10%;
  background-color: transparent;
`;

const SearchInput = ({ onUsersChange }: { onUsersChange: any }) => {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim().length > 3) {
      setError("");
      onUsersChange([]);
      const listOfUsers = await getUsers(username);
      if (listOfUsers.length > 0) {
        onUsersChange(listOfUsers);
      } else {
        setError("No hay ningun usuario con ese nombre");
      }
    } else {
      onUsersChange([]);
      setError("Ingresar un nombre mayor a 3 caracteres");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={username} onChange={handleInput} />
        <Icon type="submit">
          <svg
            fill="none"
            width="20"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Icon>
      </Form>
      {error ? <Error errorMsg={error} /> : null}
    </>
  );
};

export default SearchInput;
