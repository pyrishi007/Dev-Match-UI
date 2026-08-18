//==LIBRARY UTILS IMPORTS==
import { Outlet, useLocation, useNavigate } from "react-router-dom";

//==HOOKS==
import { useDispatch } from "react-redux";

//==COMPONENTS IMPORTS==
import Footer from "./components/LayoutUI/Footer";
import Navbar from "./components/LayoutUI/Navbar";

// ==APIS==
import { getUser } from "../global/globalAPI";
import { useEffect } from "react";
import { addUser } from "./redux/features/userSlice";

const AppLayout = () => {
  //==REDUX HOOKS==
  const location = useLocation();
  const dispatch = useDispatch();

  //==ROUTER DOM==
  const navigate = useNavigate();

  //CALL TO BACKEND
  const user = async () => {
    try {
      //CALL TO BACKEND
      const { data } = await getUser();

      //UPDATE THE STORE
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
        }),
      );
    } catch (err) {
      if (err.response.status === 401) {
        return navigate("/login");
      }
    }
  };

  //CALL USER AFTER 1st LOAD
  useEffect(() => {
    user();
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* All matching pages render here */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
