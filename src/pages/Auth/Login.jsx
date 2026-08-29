// ==HOOKS===
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ==API QUERY===
import { loggedInUser } from "../../../global/globalAPI";

// ==UTILS==
import {
  Code2,
  Users,
  ShieldCheck,
  Mail,
  RectangleEllipsis,
  LogIn,
} from "lucide-react";
import { addUser } from "../../redux/features/userSlice";

const Login = () => {
  //LOGIN DATA STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //ROUTE HOOK
  const navigate = useNavigate();

  //STORE ACTIONS
  const dispatch = useDispatch();
  // const user = useSelector((store) => store.user);

  //HANLDERS
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  //FORM HANDLING
  const handleForm = async () => {
    try {
      //DATA EXTEACT
      const loggedInUserData = {
        email: email,
        password: password,
      };

      //SENDING DATA TO BACKEND
      await loggedInUser(loggedInUserData)
        .then((value) => {
          //DATA EXTRACTION
          const { data } = value.data;

          //EXTRACTIN USER INFO
          const userData = {
            email: data.email,
            firstname: data.firstname,
            photo: data.prfileURL,
          };

          //DISPACHING AN ACTION
          dispatch(addUser(userData));
          navigate("/");
        })
        .catch((err) => console.log(err));
      //NAVIGATE TO HOME
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // LOGIN FORM
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="grid lg:grid-cols-2">
          {/* =====LEFT CARD===== */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-12 text-white">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Code2 size={18} />
                <span className="font-medium">DevMatch</span>
              </div>

              <h1 className="mt-8 text-5xl font-black leading-tight">
                Find Your
                <br />
                Perfect Coding
                <br />
                Partner.
              </h1>

              <p className="mt-6 max-w-md text-lg text-blue-100 leading-8">
                Join thousands of developers building startups, hackathons,
                open-source projects, and lifelong friendships.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Users size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">15,000+ Developers</h3>

                    <p className="text-sm text-blue-100">
                      Active members worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">Secure Authentication</h3>

                    <p className="text-sm text-blue-100">
                      Protected login & verified accounts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====RIGHT CARD===== */}
          <div className="flex items-center justify-center p-12">
            <div className="w-full max-w-md">
              <h2 className="text-4xl font-bold text-gray-900">Welcome Devs</h2>
              <p className="mt-2 text-gray-400 font-medium ">
                Sign in to continue to DevMatch.
              </p>
              {/* ===FORM=== */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-10 space-y-6"
              >
                {/* ====EMAIL FIELD=== */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-00">
                    Email Address
                  </label>
                  <div className="input rounded-xl bg-blue-100 input-bordered w-full h-12 px-5">
                    <Mail />
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="you@example.com"
                      className="w-full h-12 text-black placeholder:text-black pl-2"
                    />
                  </div>
                </div>

                {/* ===PASSWORD FIELD=== */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <div className="input rounded-xl bg-blue-100 input-bordered w-full h-12 px-5">
                    <RectangleEllipsis />
                    <input
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="you@example.com"
                      className="w-full h-12 text-black placeholder:text-black pl-2"
                    />
                  </div>
                </div>
                {/* ====fORGET PASSWORD=== */}
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* ====SIGN-IN BUTTON==== */}
                <div>
                  <button
                    onClick={handleForm}
                    type="Submit"
                    className="btn w-full h-12 rounded-xl border-none bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <LogIn />
                    Sign In
                  </button>
                </div>
              </form>

              <p className="mt-8 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <span className="cursor-pointer font-semibold text-blue-600 hover:text-blue-700">
                  Create Account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
