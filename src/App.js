import "./App.css";
import Countdown from "./components/Countdown/Countdown";

function App() {
  return (
    <div className="App">
      <Countdown countdownTimestamp={"2022-09-01"} />{" "}
      {/* date format : YYYY-MM-DD  */}
    </div>
  );
}

export default App;
