import TopicCard from "./TopicCard";

const topics = [
  {
    title: "Juegos",
    image: "https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg",
  },
  {
    title: "IRL",
    image: "https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg",
  },
  {
    title: "Música y DJ",
    image: "https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg",
  },
  {
    title: "Creative",
    image: "https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg",
  },
  {
    title: "Esports",
    image: "https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg",
  },
];

function Explore() {
  return (
    <section className="my-8">
      <h2 className="text-7xl font-bold mb-8 text-white">Explorar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {topics.map((topic, index) => (
          <TopicCard key={index} topic={topic} />
        ))}
      </div>
    </section>
  );
}

export default Explore;
