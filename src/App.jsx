import ListData from "./contact-list-components/ListData";
import ListInput from "./contact-list-components/ListInput";


function App() {
  console.log("app rendered");
  return (
    <>
      <div className="container">
        <div className="outer-container">
          <div className="contact-collector">
            <ListInput />
          </div>
          <div className="contacts">
            <ListData />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
