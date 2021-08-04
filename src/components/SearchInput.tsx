import React, { useState } from "react";
import getUsers from "../helpers/getUsers";

const SearchInput = ({ onUsersChange }: { onUsersChange: any }) => {
  const [username, setUsername] = useState<string>("aaaa");
  const [error, setError] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClick = async () => {
    if (username.trim().length > 3) {
      setError("");
      const listOfUsers = await getUsers(username);
      onUsersChange(listOfUsers);
    } else {
      setError("Ingresar un nombre mayor a 3 caracteres");
    }
  };

  return (
    <>
      <div>
        <input type="text" value={username} onChange={handleInput} />
        <button type="button" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
          </svg>
        </button>
      </div>
      {error}
    </>
  );
};

export default SearchInput;
