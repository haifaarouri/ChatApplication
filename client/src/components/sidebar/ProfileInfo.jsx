import { useAuthContext } from "../../context/AuthContext";
import LogoutButton from "./LogoutButton";

const ProfileInfo = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex justify-between items-center py-6 px-4 rounded-lg bg-sky-100">
      <div className="flex justify-between">
        <div className="h-20 w-20 rounded-full border overflow-hidden shadow-2xl">
          <img
            src={authUser.profilePic}
            alt="Avatar"
            className="h-full w-full"
          />
        </div>
        <div className="flex items-center ml-6">
          <span className="align-text-bottom text-sm font-semibold">
            {authUser.fullName}
          </span>
        </div>
      </div>
      <div className="text-sky-400 cursor-pointer">
        <LogoutButton />
      </div>
    </div>
  );
};

export default ProfileInfo;
