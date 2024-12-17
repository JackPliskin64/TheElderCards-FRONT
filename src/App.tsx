import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
