import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (when component is unmount), set the selected conversation to null
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col flex-auto h-full p-6 ml-8">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-sky-100 h-full p-4">
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <div className="bg-sky-300 px-4 py-2 mb-3 rounded-lg">
              <span className="label-text">To:</span>{" "}
              <span className="text-gray-900 font-bold">
                {selectedConversation.fullName}
              </span>
            </div>
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <Messages />
              </div>
            </div>
            <MessageInput />
          </>
        )}
      </div>
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-sky-500 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Haifa Arouri ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
