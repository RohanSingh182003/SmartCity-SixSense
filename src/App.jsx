import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/404/PageNotFound";
import Agent from "./components/agent/Agent";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'*'} element={<PageNotFound/>} />
        <Route exact path={'/'} element={<Login/>} />
        <Route exact path={'/agent'} element={<Agent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
