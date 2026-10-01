// == LIBRARY UTILS IMPORTS ==
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// == HOOKS ==
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// == COMPONENTS ==
import Footer from "./components/LayoutUI/Footer";
import Navbar from "./components/LayoutUI/Navbar";

// == API ==
import { getUser } from "../global/globalAPI";

// == REDUX ==
import { addUser } from "./redux/features/userSlice";

const AppLayout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = async () => {
    try {
      const { data } = await getUser();

      dispatch(
        addUser({
          email: data.email,
          photo: data.profileURL,
          firstname: data.firstname,
          lastname: data.lastname,
          skills: data.skills,
          gender: data.gender,
          about: data.about,
          age: data.age,
        })
      );
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  // == PUBLIC ROUTES ==
  const publicPaths = [
    "/login",
    "/terms",
    "/privacy",
    "/refund",
    "/contact",
  ];

  useEffect(() => {
    if (!publicPaths.includes(location.pathname)) {
      user();
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;