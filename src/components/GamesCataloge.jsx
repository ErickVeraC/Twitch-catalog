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
  {
    id: 21,
    title: "Halo Infinite",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/506416-285x380.jpg",
    viewers: "1.9 k",
    tags: ["FPS"],
  },
  {
    id: 22,
    title: "Doom",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/638551656_IGDB-285x380.jpg",
    viewers: "3 k",
    tags: ["FPS"],
  },
  {
    id: 23,
    title: "Cyberpunk 2077",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/65876-285x380.jpg",
    viewers: "4.3 k",
    tags: ["FPS"],
  },
  {
    id: 24,
    title: "Red Dead Redemption 2",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB-285x380.jpg",
    viewers: "2.6 k",
    tags: ["Juego de rol"],
  },
  {
    id: 25,
    title: "South Park",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/8105_IGDB-285x380.jpg",
    viewers: "2.9 k",
    tags: ["Juego de rol"],
  },
];

function GamesCataloge() {
  return (
    <section className="pb-6">
      <div>
        <Explore />
      </div>
      <div className="flex gap-2 mb-8">
        <button className="text-indigo-400 font-bold text-xl py-2 rounded-lg underline decoration-indigo-900 decoration-2 hover:text-indigo-900 underline-offset-8">
          Categorías
        </button>
        <button className="text-white font-bold text-xl py-2 px-2 rounded-lg hover:text-indigo-900">
          Canales en Vivo
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 h-8">
        <div className="flex items-center rounded-lg overflow-hidden border border-white hover:border-indigo-900 h-full mb-2 sm:mb-0">
          <button className="bg-white bg-opacity-10 p-1.5 flex items-center justify-center rounded-l-lg h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4 fill-current text-white"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Buscar etiqueta de categorías"
            className="bg-white bg-opacity-10 p-1.5 outline-none flex-grow h-full"
          />
        </div>
        <div className="flex items-center gap-2 h-full">
          <span className="font-light text-white">Ordenar por:</span>
          <select className="border border-white rounded-lg p-1.5 bg-white bg-opacity-10 text-white hover:bg-indigo-900 hover:text-indigo-900 h-full">
            <option className="bg-white bg-opacity-10 text-white">
              Recomendados para ti
            </option>
            <option className="bg-white bg-opacity-10 text-white">
              Más espectadores
            </option>
          </select>
        </div>
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
