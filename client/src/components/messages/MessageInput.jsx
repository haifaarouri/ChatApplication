import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className="h-16 rounded-xl bg-white w-full p-2">
      <form
        className="flex items-center justify-between"
        onSubmit={handleSubmit}
      >
        <div className="flex-grow">
          <div className="relative w-full">
            <input
              placeholder="Send a message ..."
              type="text"
              className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="ml-4">
          <button type="submit">
            {loading ? (
              <div className="loading loading-spinner"></div>
            ) : (
              <BsSend color=" rgb(14 165 233)" size={24} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
