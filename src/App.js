import { Route, Routes } from "react-router-dom";
import "./App.css";
import DatePage from "./pages/DatePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DatePage />} />
        <Route path="/:date" element={<DatePage />} />
      </Routes>
    </div>
  );
}

export default App;
