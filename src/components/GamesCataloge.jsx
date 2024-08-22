import { Sleeve } from "./Sleeve";
import Explore from "./Explore";

const games = [
  {
    id: 1,
    title: "Minecraft",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
    viewers: "206.2k",
    tags: ["Simulacion"],
  },
  {
    id: 2,
    title: "Fortnite",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
    viewers: "118 k",
    tags: ["Shooter", "Juego de rol"],
  },
  {
    id: 3,
    title: "Call of Duty: Warzone",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
    viewers: "53.1 k",
    tags: ["Shooter", "Acción"],
  },
  {
    id: 4,
    title: "Valorant",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
    viewers: "75.9 k",
    tags: [],
  },
  {
    id: 5,
    title: "League of Legends",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
    viewers: "126.5 k",
    tags: ["Juego de rol"],
  },
  {
    id: 6,
    title: "Black Myth: Wukong",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/519291_IGDB-285x380.jpg",
    viewers: "290.8 k",
    tags: ["Juego de rol"],
  },
  {
    id: 7,
    title: "ROBLOX",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/23020_IGDB-285x380.jpg",
    viewers: "6.2 k",
    tags: ["Plataformas"],
  },
  {
    id: 8,
    title: "Grand Theft Auto V",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg",
    viewers: "161.4 k",
    tags: ["Shooter", "Acción"],
  },
  {
    id: 9,
    title: "Elden Ring",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg",
    viewers: "28.3 k",
    tags: ["Juego de rol"],
  },
  {
    id: 10,
    title: "Genshin Impact",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-285x380.jpg",
    viewers: "5.1 k",
    tags: ["Juego de rol"],
  },
  {
    id: 11,
    title: "Dead by Daylight",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg",
    viewers: "21.6 k",
    tags: ["Estrategia", "Acción"],
  },
  {
    id: 12,
    title: "The Simpsons: Hit & Run",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/2897_IGDB-285x380.jpg",
    viewers: "1.9 k",
    tags: ["Plataformas"],
  },
  {
    id: 13,
    title: "Final Fantasy XIV Online",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/24241_IGDB-285x380.jpg",
    viewers: "6.1 k",
    tags: ["Juego de rol", "MMO"],
  },
  {
    id: 14,
    title: "Música",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg",
    viewers: "10.7 k",
    tags: ["IRL (vida real)", "Creative"],
  },
  {
    id: 15,
    title: "World of Tanks",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/27546-285x380.jpg",
    viewers: "18.5 k",
    tags: [],
  },
  {
    id: 16,
    title: "Desarrollo de software",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/1469308723-285x380.jpg",
    viewers: "16.9 k",
    tags: ["IRL (vida real)", "Creative"],
  },
  {
    id: 17,
    title: "StarCraft II",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/490422-285x380.jpg",
    viewers: "2.5 k",
    tags: ["Estrategia en tiempo real"],
  },
  {
    id: 18,
    title: "Gears 5",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/506407_IGDB-285x380.jpg",
    viewers: "172",
    tags: ["Shooter"],
  },
  {
    id: 19,
    title: "Street Fighter 6",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/55453844_IGDB-285x380.jpg",
    viewers: "2.1 k",
    tags: ["Peleas", "Arcade"],
  },
  {
    id: 20,
    title: "Cult of the Lamb",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/516173984_IGDB-285x380.jpg",
    viewers: "2.9 k",
    tags: ["Juego de rol"],
  },
];

function GamesCataloge() {
  return (
    <section>
      <div>
        <Explore />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {games.map((game) => (
          <Sleeve key={game.id} {...game} />
        ))}
      </div>
    </section>
  );
}

export default GamesCataloge;
