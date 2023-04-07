import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    //Bem naming convention
    <div className="App">
      <div className="app_body">
        {/*Sidebar*/}
        <Sidebar />

        {/*Chat*/}
        <Chat />
      </div>
    </div>
  );
}

export default App;
