import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();
  const [typingUser, setTypingUser] = useState(null);

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5000", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      // socket.on() is used to listen to the events. can be used both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close(); // close the connection when component is unmounted
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  // Emit typing events
  const emitTyping = (receiverId) => {
    socket?.emit("typing", { senderId: authUser._id, receiverId });
  };

  const emitStopTyping = (receiverId) => {
    socket?.emit("stopTyping", { senderId: authUser._id, receiverId });
  };

  return (
    <SocketContext.Provider
      value={{
        socket,
        onlineUsers,
        emitTyping,
        emitStopTyping,
        typingUser,
        setTypingUser,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
