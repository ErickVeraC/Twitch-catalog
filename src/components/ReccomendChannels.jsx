import { useState } from "react";
import Twitcher from "./Twitcher";

const twitchUser = [
  {
    profilePic:
      "https://i.pinimg.com/736x/c6/c3/e9/c6c3e981d1544dc39eabecbe1075ba2c.jpg",
    userName: "Uzui",
    actualGame: "Elden Ring",
    views: "1 k",
    isActive: true,
  },
  {
    profilePic:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/04/guardianes-noche-kimetsu-no-yaiba-inosuke-hashibira-2677213.jpg?tf=3840x",
    userName: "Inosuke",
    actualGame: "Grand Theft Auto 5",
    views: "2 k",
    isActive: false,
  },
  {
    profilePic:
      "https://i0.wp.com/geekzpot.net/wp-content/uploads/2024/01/Metal-Gear-Solid-Snake-Eater-Release-Date.jpg?fit=1920%2C1080&ssl=1",
    userName: "Solid Snake",
    actualGame: "The Simpsons: Hit & Run",
    views: "3 k",
    isActive: true,
  },
  {
    profilePic:
      "https://miro.medium.com/v2/resize:fit:1200/1*656o0f2pJOnj8FiEJoU2Lg.jpeg",
    userName: "Jake",
    actualGame: "Street Fighter 6",
    views: "2 k",
    isActive: false,
  },
  {
    profilePic: "https://i.blogs.es/fa3a7b/sukuna/840_560.jpeg",
    userName: "Sukuna",
    actualGame: "Cult of the Lamb",
    views: "4 k",
    isActive: true,
  },
  {
    profilePic:
      "https://steamuserimages-a.akamaihd.net/ugc/956353893724502839/C7D1FA2A6616A52FFF4CF7A1DF0FC7FB11C12A90/?imw=1024&imh=1024&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    userName: "Clayton Carmine",
    actualGame: "StarCraft II",
    views: "1 k",
    isActive: false,
  },
  {
    profilePic:
      "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/m/marty_mcfly_volver_al_futuro_back_to_the_future_2.jpg",
    userName: "Marty McFly",
    actualGame: "Call of Duty: Warzone",
    views: "4 k",
    isActive: true,
  },
];

function ReccomendChannels({ isCollapsed, onToggle }) {
  return (
    <aside
      className={`fixed top-14 left-0 bg-[#212124] p-4 text-white h-screen transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-lg font-bold ${isCollapsed ? "hidden" : ""}`}>
          Para ti
        </h2>
        <button
          className="text-white p-1"
          aria-label={
            isCollapsed
              ? "Expandir navegación lateral"
              : "Contraer navegación lateral"
          }
          onClick={onToggle}
        >
          <div className="w-4 h-4">
            <svg
              width="100%"
              height="100%"
              version="1.1"
              viewBox="0 0 20 20"
              x="0px"
              y="0px"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              className="fill-current"
            >
              <g>
                {isCollapsed ? (
                  <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path>
                ) : (
                  <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
                )}
              </g>
            </svg>
          </div>
        </button>
      </div>
      <div
        className={`mt-4 ${isCollapsed ? "flex flex-col items-center" : ""}`}
      >
        {!isCollapsed && (
          <h3 className="text-lg font-bold mb-4">CANALES RECOMENDADOS</h3>
        )}
        <div
          className={`flex ${
            isCollapsed ? "flex-col items-center" : "flex-col"
          }`}
        >
          {twitchUser.map((user, index) => (
            <Twitcher
              key={index}
              profilePic={user.profilePic}
              userName={user.userName}
              actualGame={user.actualGame}
              views={user.views}
              isActive={user.isActive}
              collapsed={isCollapsed} // Pasar el estado de colapso al componente Twitcher
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default ReccomendChannels;
