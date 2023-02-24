import {Routes,Route} from "react-router-dom";
import Productview from "./Page/Productview";
import Dashboard from "./Page/Dashboard";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={   <Dashboard /> }></Route>
          <Route path="/product/:id" element={<Productview />} />
        </Routes>
    </>
  );
}

export default App;