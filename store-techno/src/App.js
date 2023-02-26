import { Routes, Route } from "react-router-dom";
import Productview from "./Page/Productview";
import Dashboard from "./Page/Dashboard";
import CheckBag from "./Page/CheckBag";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/product/:id" element={<Productview />} />
        <Route path="/CheckItem" element={<CheckBag />} />
      </Routes>
    </>
  );
}

export default App;