//==HOOKS IMPORT===
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//==Utils==
import { Code2, Earth } from "lucide-react";
import { useState } from "react";
import { removeUser } from "../../redux/features/userSlice";

//==Global API==
import { logoutUser } from "../../../global/globalAPI";

const Navbar = () => {
  //STATE
  const [profileDropdown, setProfileDropdown] = useState(false);

  //STORE HOOK
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //HANDLERS
  const handleProfile = () => {
    setProfileDropdown(!profileDropdown);
  };

  const logouthandler = async () => {
    try {
      //CALL TO  BACKEND
      await logoutUser();

      //DISPATCH ACTION TO REMCVE USER
      dispatch(removeUser());

      //NAVIGATE TO LOGIN PAGE
      navigate("/login");

      setProfileDropdown(!profileDropdown);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Code2 className="text-white" size={22} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight">DevMatch</h1>

            <p className="text-xs text-gray-500 -mt-1">
              Connect. Collaborate. Code.
            </p>
          </div>
        </Link>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Login */}
          {!user && (
            <Link to="/login">
              <button className="rounded-full p-2 px-6  text-gray-7 00 font-extrabold hover:bg-gray-800 hover:p-2 hover:px-6 hover:text-gray-200 transition">
                Login
              </button>
            </Link>
          )}

          {user && (
            <div className="flex items-center gap-5">
              {/* Discover devs */}
              <Link to="/discoverfeed">
                <button className="btn rounded-full bg-blue-600 hover:bg-blue-700 border-none text-white px-7">
                  <div className=" flex gap-2 justify-center items-center">
                    <Earth size={15} />
                    Discover Devs
                  </div>
                </button>
              </Link>

              {/* Profile */}
              <div className="flex items-center gap-2">
                <p className="font-bold">Welcome, {user.firstname}</p>

                <div className="relative">
                  <img
                    onClick={handleProfile}
                    className="w-10 h-10 rounded-full border-2 border-blue-400 cursor-pointer"
                    src={user.photo}
                    alt=""
                  />

                  {profileDropdown && (
                    <div className="absolute top-14 right-0 w-40 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-blue-900/20 backdrop-blur-md z-50">
                      {/* Menu */}
                      <ul className="py-1">
                        <Link to="/profile">
                          <li
                            onClick={() => setProfileDropdown(!profileDropdown)}
                            className="flex items-center gap-3 px-5 py-2 text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200"
                          >
                            Profile
                          </li>
                        </Link>

                        <Link to="/connections">
                          <li
                            onClick={() => setProfileDropdown(!profileDropdown)}
                            className="flex items-center gap-3 px-5 py-2 text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200"
                          >
                            Connections
                          </li>
                        </Link>

                        <Link to="/requestfeed">
                          <li
                            onClick={() => setProfileDropdown(!profileDropdown)}
                            className="flex items-center gap-3 px-5 py-2 text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200"
                          >
                            Request
                          </li>
                        </Link>

                        <div className=" border-t border-slate-700"></div>

                        <li
                          onClick={logouthandler}
                          className="flex items-center gap-3 px-5 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 cursor-pointer transition-all duration-200"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
