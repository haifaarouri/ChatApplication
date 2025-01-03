import Conversations from "./Conversations";
import ProfileInfo from "./ProfileInfo";
import SearchBar from "./SearchInput";
import ThemeToggle from "./ThemeToggle";

const SideBar = () => {
  return (
    <div className="flex align-middle flex-col py-4 px-4 w-full flex-shrink-0">
      <div className="flex justify-center">
        <img
          className="mb-1 p-3 w-40"
          src="logo-removebg-preview.png"
          alt="logo"
        />
      </div>
      <ThemeToggle />
      <ProfileInfo />
      <SearchBar />
      <Conversations />
    </div>
  );
};

export default SideBar;
