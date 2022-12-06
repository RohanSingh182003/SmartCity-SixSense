import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/404/PageNotFound";
import Login from "./components/login/Login";
import Organization from "./components/organization/Organization";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'*'} element={<PageNotFound/>} />
        <Route exact path={'/'} element={<Login/>} />
        <Route exact path={'/organization'} element={<Organization/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
