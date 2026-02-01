import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

function ListItem({ student }) {
  console.log("listItem rendered");
  const { setStudents } = useContext(AppContext);

  const deleteStudent = (studentId) => {
    setStudents((prev) => prev.filter((std) => std.id !== studentId));
  };

  return (
    <div className="list-item">
      <div>
        <p className="name-para">{student?.name}</p>

        <p className="phone-number">{student?.contact}</p>
      </div>
      <div className="delete-button-div">
        <button
          className="btn btn-danger"
          onClick={() => deleteStudent(student?.id)}
        >
          <RiDeleteBin6Line style={{ fontSize: "2em" }} />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
