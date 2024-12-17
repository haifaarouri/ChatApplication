import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className={`${
            selectedConversation ? 'hidden' : 'block w-full'
          } md:block md:w-1/4 lg:w-1/5`}>
            <SideBar />
        </div>
        <div className={`flex-1 ${
            selectedConversation ? 'block w-full' : 'hidden md:block'
          }`}>
            <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
