import { useEffect, useRef, useState } from "react";
import { BsEmojiSmile, BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const pickerRef = useRef(null);
  const { socket, emitTyping, emitStopTyping, typingUser, setTypingUser } =
    useSocketContext();
  const [isTyping, setIsTyping] = useState(false);
  const { selectedConversation } = useConversation();

  const addEmojiToMessage = (emoji) => {
    setMessage((prevMsg) => prevMsg + emoji.native);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;
    await sendMessage(message);
    setMessage("");
    emitStopTyping(selectedConversation._id);
    setIsTyping(false);
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

  useEffect(() => {
    // Listen for typing events
    socket?.on("userTyping", ({ senderId }) => {
      setTypingUser(senderId);
    });

    socket?.on("userStoppedTyping", ({ senderId }) => {
      if (typingUser === senderId) {
        setTypingUser(null);
      }
    });

    return () => {
      socket?.off("userTyping");
      socket?.off("userStoppedTyping");
    };
  }, [socket, typingUser]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);

    if (!isTyping) {
      emitTyping(selectedConversation._id);
      setIsTyping(true);

      // Stop typing after 2 seconds of inactivity
      setTimeout(() => {
        emitStopTyping(selectedConversation._id);
        setIsTyping(false);
      }, 2000);
    }
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
              onChange={handleInputChange}
            />
            <button
              data-tip="Send emojis"
              className="tooltip btn-circle absolute flex items-center justify-center h-8 w-8 right-2 top-1 hover:bg-neutral-200"
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
