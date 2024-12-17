import Conversations from "./Conversations";
import ProfileInfo from "./ProfileInfo";
import SearchBar from "./SearchInput";

const SideBar = () => {
  return (
    <div className="flex flex-col py-4 px-4 w-full flex-shrink-0">
      <div className="flex justify-center">
        <img
          className="mb-2 p-3 w-40"
          src="logo-removebg-preview.png"
          alt="logo"
        />
      </div>
      <ProfileInfo />
      <SearchBar />
      <Conversations />
    </div>
  );
};

export default SideBar;
