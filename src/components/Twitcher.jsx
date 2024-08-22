import { useState } from "react";

function Twitcher({ profilePic, userName, actualGame, views, isActive }) {
  return (
    <div className="flex items-center p-2 border-b border-gray-700">
      <div className="relative">
        <img
          src={profilePic}
          alt={userName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 ${
            isActive ? "bg-green-500" : "bg-red-500"
          } border-black`}
        ></div>
      </div>
      <div className="ml-3">
        <h4 className="text-white text-sm font-bold">{userName}</h4>
        <p className="text-gray-400 text-xs">{actualGame}</p>
        <p className="text-gray-500 text-xs">{views} views</p>
      </div>
    </div>
  );
}

export default Twitcher;
