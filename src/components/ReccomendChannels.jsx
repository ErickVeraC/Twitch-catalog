import Twitcher from "./Twitcher";

const twitchUser = [
  {
    profilePic:
      "https://i.pinimg.com/736x/c6/c3/e9/c6c3e981d1544dc39eabecbe1075ba2c.jpg",
    userName: "Uzui",
    actualGame: "Elden Ring",
    views: "100K",
    isActive: true,
  },
  {
    profilePic:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/04/guardianes-noche-kimetsu-no-yaiba-inosuke-hashibira-2677213.jpg?tf=3840x",
    userName: "Inosuke",
    actualGame: "Grand Theft Auto 5",
    views: "150K",
    isActive: false,
  },
  {
    profilePic:
      "https://i0.wp.com/geekzpot.net/wp-content/uploads/2024/01/Metal-Gear-Solid-Snake-Eater-Release-Date.jpg?fit=1920%2C1080&ssl=1",
    userName: "Solid Snake",
    actualGame: "The Simpsons: Hit & Run",
    views: "200K",
    isActive: true,
  },
  {
    profilePic:
      "https://miro.medium.com/v2/resize:fit:1200/1*656o0f2pJOnj8FiEJoU2Lg.jpeg",
    userName: "Jake",
    actualGame: "Street Fighter 6",
    views: "250K",
    isActive: false,
  },
  {
    profilePic: "https://i.blogs.es/fa3a7b/sukuna/840_560.jpeg",
    userName: "Sukuna",
    actualGame: "Cult of the Lamb",
    views: "300K",
    isActive: true,
  },
  {
    profilePic:
      "https://steamuserimages-a.akamaihd.net/ugc/956353893724502839/C7D1FA2A6616A52FFF4CF7A1DF0FC7FB11C12A90/?imw=1024&imh=1024&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    userName: "Clayton Carmine",
    actualGame: "StarCraft II",
    views: "350K",
    isActive: false,
  },
  {
    profilePic:
      "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/m/marty_mcfly_volver_al_futuro_back_to_the_future_2.jpg",
    userName: "Marty McFly",
    actualGame: "Call of Duty: Warzone",
    views: "400K",
    isActive: true,
  },
];

function ReccomendChannels() {
  return (
    <aside className="bg-[#0e0e0f] p-4 text-white">
      <h2 className="text-lg font-bold mb-4">Recommended Channels</h2>
      {twitchUser.map((user, index) => (
        <Twitcher
          key={index}
          profilePic={user.profilePic}
          userName={user.userName}
          actualGame={user.actualGame}
          views={user.views}
          isActive={user.isActive}
        />
      ))}
    </aside>
  );
}

export default ReccomendChannels;
