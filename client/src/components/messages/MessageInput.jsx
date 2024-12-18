import { useEffect, useRef, useState } from "react";
import { BsEmojiSmile, BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const pickerRef = useRef(null);

  const addEmojiToMessage = (emoji) => {
    setMessage((prevMsg) => prevMsg + emoji.native);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  const handleClickOutside = (event) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <button
              className="btn-circle absolute flex items-center justify-center h-8 w-8 right-2 top-1 hover:bg-neutral-200"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <BsEmojiSmile size={22} color="rgb(14 165 233)" />
            </button>
          </div>
        </div>
        {showEmojiPicker && (
          <div
            ref={pickerRef}
            className="absolute bottom-24 md:right-24 max-sm:left-3 shadow-2xl shadow-slate-500"
          >
            <Picker data={data} onEmojiSelect={addEmojiToMessage} />
          </div>
        )}
        <div className="ml-4">
          <button type="submit">
            {loading ? (
              <div className="loading loading-spinner"></div>
            ) : (
              <BsSend color="rgb(14 165 233)" size={24} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
