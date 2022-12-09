import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/404/PageNotFound";
import SupervisorDashboard from "./components/supervisor/pages/SupervisorDashboard";
import SupervisorDevices from "./components/supervisor/pages/SupervisorDevices";
import SupervisorAgents from "./components/supervisor/pages/SupervisorAgents";
import SupervisorSendRequests from "./components/supervisor/pages/SupervisorSendRequests";
import SupervisorPendingRequests from "./components/supervisor/pages/SupervisorPendingRequests";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'*'} element={<PageNotFound/>} />
        <Route exact path={'/'} element={<Login/>} />
        <Route exact path={'/supervisor/dashboard'} element={<SupervisorDashboard/>} />
        <Route exact path={'/supervisor/devices'} element={<SupervisorDevices/>} />
        <Route exact path={'/supervisor/agents'} element={<SupervisorAgents/>} />
        <Route exact path={'/supervisor/sendRequests'} element={<SupervisorSendRequests/>} />
        <Route exact path={'/supervisor/pendingRequests'} element={<SupervisorPendingRequests/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
