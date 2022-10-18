import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import DatePage from "./pages/DatePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DatePage />} />
          <Route path="/:date" element={<DatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
