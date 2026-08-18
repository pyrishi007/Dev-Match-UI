// ==LIBRARY UTILS IMPORTS==
import { BrowserRouter, Route, Routes } from "react-router-dom";

//==COMPONENTS IMPORTS==
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Connections from "./pages/Connections";
import RequestFeed from "./pages/RequestFeed";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile";
import DiscoverFeed from "./pages/DiscoverFeed";

//ALL COMPONENT ROUTES
function App() {
  return (
    <>
      {/*PROVING BROSERROUTER CONTEX TO APP*/}
      <BrowserRouter>
        {/*ROUTES TO NAVIAGTE THE URL*/}
        <Routes>
          {/*PARENT ROUTE*/}
          <Route element={<AppLayout />}>
            {/* CHILDREN ROUTES*/}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requestfeed" element={<RequestFeed />} />
            <Route path="/discoverfeed" element={<DiscoverFeed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
