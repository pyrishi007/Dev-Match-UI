import { useSelector } from "react-redux";
import EditProfile from "@/components/ProfileUI/Edit";
import { useState } from "react";

const Profile = () => {
  const user = useSelector((store) => store.user);

  return (
    user && (
      <div className="m-10">
        <EditProfile user={user} />
      </div>
    )
  );
};
export default Profile;
