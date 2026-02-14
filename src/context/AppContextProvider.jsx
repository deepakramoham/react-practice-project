import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  console.log("appContextProvider rendered");
  const studentData = [
    {
      name: "Mubeena",
      gender: "female",
      skills: ["css, javascript"],
      course: "react",
    },
    {
      name: "Deepa",
      contact: "9900990099",
      gender: "female",
      skills: ["javascript"],
      course: "css",
    },
    {
      name: "Jinshi",
      contact: "9900990022",
      gender: "female",
      skills: ["html,javascript"],
      course: "react",
    },
    {
      name: "Uma",
      contact: "9900990033",
      gender: "female",
      skills: ["css,javascript"],
      course: "javascript",
    },
  ]?.sort((a, b) => a?.name?.localeCompare(b?.name));

  const [students, setStudents] = useState(studentData);
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider value={{ students, setStudents, search, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
