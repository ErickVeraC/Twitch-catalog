function Twitcher({
  profilePic,
  userName,
  actualGame,
  views,
  isActive,
  collapsed,
}) {
  return (
    <div
      className={`grid items-center p-2 border-gray-700 transition-all duration-300 ${
        collapsed ? "grid-cols-1 justify-center" : "grid-cols-6"
      }`}
    >
      {/* Imagen de perfil siempre visible */}
      <div className="relative">
        <img
          src={profilePic}
          alt={userName}
          className={`rounded-full object-cover ${
            collapsed ? "w-4 h-4" : "w-10 h-10"
          } transition-all`}
        />
      </div>
      {!collapsed && (
        <>
          <div className="col-span-4 ml-3">
            <h4 className="text-white text-sm font-bold">{userName}</h4>
            <p className="text-gray-400 text-xs">{actualGame}</p>
          </div>
          <div className="col-span-1 flex flex-row items-end">
            <div
              className={`w-3 h-3 rounded-full border-2 ${
                isActive ? "bg-green-500" : "bg-red-500"
              } border-black mb-1`}
            ></div>
            <p className="text-gray-500 text-xs ml-1">{views}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Twitcher;
