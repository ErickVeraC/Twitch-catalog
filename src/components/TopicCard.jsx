function TopicCard({ topic }) {
  return (
    <div className="bg-indigo-800 rounded-lg h-12 shadow-lg flex flex-row items-center justify-around hover:bg-indigo-900 hover:opacity-75 px-2 cursor-pointer">
      <h3 className="text-white font-extrabold text-lg">{topic.title}</h3>
      <img
        src={topic.image}
        alt={topic.title}
        className="w-18 h-18 object-contain mb-2"
      />
    </div>
  );
}

export default TopicCard;
