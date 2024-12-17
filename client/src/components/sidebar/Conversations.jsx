import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="flex flex-col mt-1">
      <div className="flex flex-col space-y-1 mt-4 h-96">
        <div className="py-1 flex flex-col overflow-y-scroll">
          {conversations.map((conversation, idx) => (
            <Conversation
              key={conversation._id}
              conversation={conversation}
              emoji={getRandomEmoji()}
              lastIdx={idx === conversations.length - 1} // if is the last index, we will not show the diviser
            />
          ))}

          {loading ? (
            <span className="loading loading-spinner mx-auto"></span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Conversations;
