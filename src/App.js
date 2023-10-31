
import UserCard from "./components/UserCard";
import UsersDetails from "./components/UsersDetails";




function App() {

  return (
    <div className="App">
      <header className="App-header">
<h1>Run for data: npx json-server -p 1000  -w ./src/db/database.json</h1>
        <UserCard />

        <UsersDetails />

      </header>
    </div >
  );
}

export default App;
