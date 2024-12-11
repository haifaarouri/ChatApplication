import Conversations from "./Conversations";
import ProfileInfo from "./ProfileInfo";
import SearchBar from "./SearchInput";

const SideBar = () => {
  return (
    <div className="flex flex-col py-4 pl-6 pr-2 w-64 flex-shrink-0">
      <div className="flex justify-center">
        <img
          className="mb-2 p-3 w-40"
          src="logo-removebg-preview.png"
          alt="logo"
        />
      </div>
      {/* <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
        <div className="ml-2 font-bold text-2xl">QuickChat</div>
      </div> */}
      <ProfileInfo />
      <SearchBar />
      <Conversations />
    </div>
  );
};

export default SideBar;
