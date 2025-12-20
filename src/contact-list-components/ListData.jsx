import ListItem from "./ListItem";

function ListData({ students, deleteStudent }) {
  console.log("list data is running");

  console.log(students, "list data");
  return students?.map((student) => (
    <ListItem
      key={student?.id}
      student={student}
      deleteStudent={deleteStudent}
    />
  ));
}

export default ListData;
