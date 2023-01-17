import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const OnInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={OnSubmit}>
      <input
        type="text"
        placeholder="Search new gif"
        value={inputValue}
        onChange={OnInputChange}
      />
    </form>
  );
};
