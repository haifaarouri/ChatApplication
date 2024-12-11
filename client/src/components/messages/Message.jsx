const Message = () => {
  return (
    <div className="chat chat-start">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user avatar"
          />
        </div>
      </div>
      <div className="chat-bubble text-black text-sm bg-white">
        It was said that you would, destroy the Sith, not join them.
      </div>
    </div>
  );
};

export default Message;
