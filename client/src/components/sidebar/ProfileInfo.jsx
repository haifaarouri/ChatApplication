import LogoutButton from "./LogoutButton";

const ProfileInfo = () => {
  return (
    <div className="flex justify-between items-center w-64 py-6 px-4 rounded-lg bg-sky-100">
      <div className="h-20 w-20 rounded-full border overflow-hidden shadow-2xl">
        <img
          src="https://avatar.iran.liara.run/public/girl"
          alt="Avatar"
          className="h-full w-full"
        />
      </div>
      <div className="text-sm font-semibold mt-2">Haifa Arouri</div>
      <div className="text-sky-400 cursor-pointer">
        <LogoutButton />
      </div>
    </div>
  );
};

export default ProfileInfo;
