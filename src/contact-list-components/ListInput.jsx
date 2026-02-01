import { useState, useRef, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import { AppContext } from "../context/AppContextProvider";
import { useContext } from "react";



const ListInput = () => {
  console.log("listInput rendered")
  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const { students, setStudents, search, setSearch } = useContext(AppContext);
  const [name, setName] = useState("");
const { dispatch } = useContext(AppContext);
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  /*const addStudent = (newStudent) => {
    setStudents(
      [newStudent, ...students]?.sort((a, b) => a?.name?.localeCompare(b?.name))
    );
  };*/
  const addStudent = (newStudent) => {
  dispatch({ type: "SET_STUDENTS", payload: newStudent });
};


  const handleSubmit = () => {
    const contact = contactRef.current.value;
    const newStudent = {
      id: crypto.randomUUID(),
      name,
      contact,
    };

    if (contact && newStudent) {
      addStudent(newStudent);
      setName("");
      contactRef.current.value = "";
      nameRef.current.focus();
    }
    console.log("HANDLE SUBMIT")
  };

  return (
    <>
      <div className="list-input-section">
        <div className="list-input-container">
          <div className="list-input">
            <input
              ref={nameRef}
              className="my-input"
              value={name}
              placeholder="Enter your name"
              onChange={handleInputChange}
            />

            <input
              ref={contactRef}
              defaultValue={""}
              placeholder="Contact Number . . ."
            />
          </div>

          <div className="list-add-button">
            <button onClick={handleSubmit}>
              <IoAdd />
            </button>
          </div>
        </div>

        <div className="list-search">
          <input
            placeholder="Search . . . "
            type="text"
            value={search}
            //onChange={(e) => setSearch(e.target.value)}
            onChange={(e) =>dispatch({ type: "SET_SEARCH", payload: e.target.value })}
          />
        </div>
      </div>
    </>
  );
};

export default ListInput;
