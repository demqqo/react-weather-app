
import './App.css'
import List from "./list"
import Search from "./search"
import Main from "./main"
import Otherdays from "./otherdays"
import Git from "./git"

function App() {
  return (
    <div className="App">
      <List />
      <Search />
      <Main />
      <Otherdays />
      <Git />
    </div>
  );
}

export default App;
