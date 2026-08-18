// ===COMPONENT===
import Display from "./Display";

// ===UTILS===
import {
  User,
  Code2,
  Save,
  X,
  Image as ImageIcon,
  Info,
  VenusAndMars,
  CakeSlice,
  LoaderCircle,
} from "lucide-react";
import { editProfle } from "../../../global/globalAPI";

//==REDUX==
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser } from "@/redux/features/userSlice";

//====HOOKS===
import { useEffect, useState } from "react";

const Edit = ({ user }) => {
  const profileData = useSelector((store) => store.user);
  const dispatch = useDispatch();

  //User form state.
  const [firstname, setFirstname] = useState(user?.firstname);
  const [lastname, setLastname] = useState(user?.lastname);
  const [about, setAbout] = useState(user?.about || "");
  const [photo, setPhoto] = useState(user?.photo);
  const [skills, setSkills] = useState(user?.skills);
  const [gender, setGender] = useState(user?.gender);
  const [age, setAge] = useState(user?.age);
  // const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(null);

  //Handlers
  const handleSaveForm = async () => {
    try {
      setLoading(true);
      const updatedProfileData = {
        firstname,
        lastname,
        about,
        profileURL: photo,
        skills,
        age,
        gender,
      };

      const updatedData = await editProfle(updatedProfileData);
      setLoading(false);
      dispatch(addUser(updatedData?.data));
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-7 items-stretch">
      {/* ================= LEFT ================= */}

      <div className="lg:col-span-4">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          {/* Header */}

          <div className="border-b border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <User className="text-white" size={28} />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white">Edit Profile</h1>

                <p className="mt-1 text-blue-100">
                  Update your profile information and let other developers know
                  more about you.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}

          <div className="mx-auto max-w-3xl space-y-8 p-8">
            {/* Personal Information */}

            <div>
              <h2 className="mb-5 text-lg font-semibold text-slate-800">
                Personal Information
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {/* First Name */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    First Name
                  </label>

                  <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
                    <User size={18} className="shrink-0 text-slate-400" />

                    <input
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      placeholder="John"
                      className="ml-3 w-full bg-transparent outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Last Name */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Last Name
                  </label>

                  <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
                    <User size={18} className="shrink-0 text-slate-400" />

                    <input
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Doe"
                      className="ml-3 w-full bg-transparent outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* About */}

            <div>
              <h2 className="mb-5 text-lg font-semibold text-slate-800">
                About You
              </h2>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Biography
              </label>

              <div className="flex rounded-xl border border-slate-300 p-4 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
                <Info size={18} className="mt-1 shrink-0 text-slate-400" />

                <textarea
                  rows={5}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Tell everyone about yourself..."
                  className="ml-3 w-full resize-none bg-transparent outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Photo */}

            <div>
              <h2 className="mb-5 text-lg font-semibold text-slate-800">
                Photo
              </h2>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Profile URL
              </label>

              <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
                <ImageIcon size={18} className="shrink-0 text-slate-400" />

                <input
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="https://example.com/profile.jpg"
                  className="ml-3 w-full bg-transparent outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Skills */}

            <div>
              <h2 className="mb-5 text-lg font-semibold text-slate-800">
                Skills
              </h2>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Tech Stack
              </label>

              <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
                <Code2 size={18} className="shrink-0 text-slate-400" />

                <input
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="React, Node.js, MongoDB..."
                  className="ml-3 w-full bg-transparent outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Demographics */}

            <div>
              <h2 className="mb-5 text-lg font-semibold text-slate-800">
                Demographics
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {/* Gender */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Gender
                  </label>

                  <div className="rounded-xl border border-slate-300 px-4 py-3 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
                    <div className="flex justify-center items-center gap-2">
                      <VenusAndMars
                        size={18}
                        className="shrink-0 text-slate-400"
                      />
                      <input
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        placeholder="Male"
                        className="w-full bg-transparent outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Age */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Age
                  </label>

                  <div className="rounded-xl border border-slate-300 px-4 py-3 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
                    <div className="flex justify-center items-center gap-2">
                      <CakeSlice
                        size={18}
                        className="shrink-0 text-slate-400"
                      />
                      <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="24"
                        className="w-full bg-transparent outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}

            <div className="flex justify-end gap-4 border-t border-slate-200 pt-8">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
              >
                <X size={18} />
                Cancel
              </button>

              <button
                type="submit"
                onClick={handleSaveForm}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                {loading ? (
                  <LoaderCircle className=" animate-spin" />
                ) : (
                  <>
                    <Save size={18} />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT : LIVE PREVIEW ================= */}

      <div className="lg:col-span-3 h-full">
        {profileData && (
          <Display
            user={{ firstname, lastname, age, gender, skills, photo, about }}
          />
        )}
      </div>
    </div>
  );
};

export default Edit;
