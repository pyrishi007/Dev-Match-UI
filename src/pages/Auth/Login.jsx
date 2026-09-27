// ==HOOKS===
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ==API QUERY===
import { loggedInUser, signUp } from "../../../global/globalAPI";

// ==UTILS==
import {
  Code2,
  Users,
  ShieldCheck,
  Mail,
  RectangleEllipsis,
  LogIn,
  User,
  UserPlus,
} from "lucide-react";

import { addUser } from "../../redux/features/userSlice";

const Login = () => {
  // AUTH MODE
  const [isSignUp, setIsSignUp] = useState(false);

  // FORM DATA STATE
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ROUTE HOOK
  const navigate = useNavigate();

  // STORE ACTIONS
  const dispatch = useDispatch();

  // =========================
  // HANDLERS
  // =========================

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // =========================
  // LOGIN
  // =========================

  const handleLogin = async () => {
    try {
      const loggedInUserData = {
        email: email,
        password: password,
      };

      await loggedInUser(loggedInUserData)
        .then((value) => {
          const { data } = value.data;

          const userData = {
            email: data.email,
            firstname: data.firstname,
            photo: data.prfileURL,
          };

          dispatch(addUser(userData));

          navigate("/");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  // =========================
  // SIGNUP
  // =========================

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        console.log("Passwords do not match");
        return;
      }

      const signupData = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      };

      console.log("Signup Data:", signupData);

      await signUp(signupData)
        .then((value) => {
          const { data } = value.data;

          const userData = {
            email: data.email,
            firstname: data.firstname,
            lastName: data.lastname,
          };

          dispatch(addUser(userData));

          navigate("/");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  // =========================
  // FORM SUBMIT
  // =========================

  const handleForm = (e) => {
    e.preventDefault();

    if (isSignUp) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="grid lg:grid-cols-2">
          {/* ===== LEFT CARD ===== */}

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

          {/* ===== RIGHT CARD ===== */}

          <div className="flex items-center justify-center p-12">
            <div className="w-full max-w-md">
              {/* HEADER */}

              <h2 className="text-4xl font-bold text-gray-900">
                {isSignUp ? "Create Account" : "Welcome Devs"}
              </h2>

              <p className="mt-2 text-gray-400 font-medium">
                {isSignUp
                  ? "Create your DevMatch account."
                  : "Sign in to continue to DevMatch."}
              </p>

              {/* ===== FORM ===== */}

              <form onSubmit={handleForm} className="mt-10 space-y-6">
                {/* ===== FIRST NAME + LAST NAME ===== */}

                {isSignUp && (
                  <div className="grid grid-cols-2 gap-4">
                    {/* FIRST NAME */}

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        First Name
                      </label>

                      <div className="input rounded-xl bg-blue-100 input-bordered w-full h-12 px-5">
                        <User size={20} />

                        <input
                          type="text"
                          value={firstName}
                          onChange={handleFirstNameChange}
                          placeholder="First name"
                          className="w-full h-12 text-black placeholder:text-black pl-2"
                        />
                      </div>
                    </div>

                    {/* LAST NAME */}

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Last Name
                      </label>

                      <div className="input rounded-xl bg-blue-100 input-bordered w-full h-12 px-5">
                        <User size={20} />

                        <input
                          type="text"
                          value={lastName}
                          onChange={handleLastNameChange}
                          placeholder="Last name"
                          className="w-full h-12 text-black placeholder:text-black pl-2"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ===== EMAIL FIELD ===== */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
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

                {/* ===== PASSWORD FIELD ===== */}

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
                      placeholder="Enter your password"
                      className="w-full h-12 text-black placeholder:text-black pl-2"
                    />
                  </div>
                </div>

                {/* ===== CONFIRM PASSWORD ===== */}

                {isSignUp && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>

                    <div className="input rounded-xl bg-blue-100 input-bordered w-full h-12 px-5">
                      <RectangleEllipsis />

                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder="Confirm your password"
                        className="w-full h-12 text-black placeholder:text-black pl-2"
                      />
                    </div>
                  </div>
                )}

                {/* ===== FORGOT PASSWORD ===== */}

                {!isSignUp && (
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                {/* ===== SIGN IN / SIGN UP BUTTON ===== */}

                <div>
                  <button
                    type="submit"
                    className="btn w-full h-12 rounded-xl border-none bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {isSignUp ? (
                      <>
                        <UserPlus />
                        Create Account
                      </>
                    ) : (
                      <>
                        <LogIn />
                        Sign In
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* ===== TOGGLE ===== */}

              <p className="mt-8 text-center text-sm text-gray-500">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => {
                    console.log("CREATE ACCOUNT CLICKED");
                    setIsSignUp(!isSignUp);
                  }}
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  {isSignUp ? "Sign In" : "Create Account"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
