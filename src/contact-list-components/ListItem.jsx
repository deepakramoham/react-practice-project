import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

function ListItem({ student }) {
  console.log("listItem rendered")
  const { setStudents } = useContext(AppContext);
const { dispatch } = useContext(AppContext);
  const deleteStudent = (studentId) => {
  dispatch({ type: "DELETE_STUDENT", payload: studentId });
};


  return (
    <div className="list-item">
      <div>
        <p className="name-para">{student?.name}</p>

        <p className="phone-number">{student?.contact}</p>
      </div>
      <div className="delete-button-div">
        <button
          className="delete-button"
          onClick={() => deleteStudent(student?.id)}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
