import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <div className="flex flex-col mt-1">
      <div className="flex flex-col space-y-1 mt-4 -mr-7 h-96">
        <div className="py-1 flex flex-col overflow-y-scroll">
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </div>
      </div>
    </div>
  );
};

export default Conversations;
