import Header from "../Header/Header";
import "./App.css";
import { BreakpointProvider } from "react-socks";

function App() {
  return (
    <BreakpointProvider>
      <div className="App">
        <Header />
      </div>
    </BreakpointProvider>
  );
}

export default App;
