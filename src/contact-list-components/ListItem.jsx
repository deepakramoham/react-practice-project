function ListItem({ student, deleteStudent }) {
  console.log("list item is running");


  return (
    <div className="list-item">
      <span>{student?.name}</span>
      <button onClick={() => deleteStudent(student?.id)}>Delete</button>
    </div>
  );
}

export default ListItem;
