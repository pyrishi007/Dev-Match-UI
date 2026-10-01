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
import Terms from "./pages/Legal/Terms";
import Privacy from "./pages/Legal/Privacy";
import Refund from "./pages/Legal/Refund";
import Contact from "./pages/Legal/Contact";
import ScrollToTop from "./components/ScrollToTop";
//ALL COMPONENT ROUTES
function App() {
  return (
    <>
  <>
  {/* PROVIDING BROWSER ROUTER CONTEXT TO APP */}
  <BrowserRouter>

   <ScrollToTop />
    {/* ROUTES TO NAVIGATE THE URL */}
    <Routes>

      {/* PARENT ROUTE */}
      <Route element={<AppLayout />}>

        {/* CHILDREN ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/requestfeed" element={<RequestFeed />} />
        <Route path="/discoverfeed" element={<DiscoverFeed />} />

        {/* LEGAL PAGES */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/contact" element={<Contact />} />

      </Route>

    </Routes>
  </BrowserRouter>
</>
    </>
  );
}

export default App;
