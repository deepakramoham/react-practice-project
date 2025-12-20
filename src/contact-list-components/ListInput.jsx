import { useState } from "react";

function ListInput({ addStudent }) {
  const [name, setName] = useState("");

  console.log("list input running");
  console.log(name);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    const newStudent = {
      id: crypto.randomUUID(),
      name,
    };
    addStudent(newStudent);
  };

  return (
    <>
      <input
        value={name}
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}

export default ListInput;
