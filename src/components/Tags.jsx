export function Tags({ tags }) {
  return (
    <div>
      {tags.map((tag, index) => (
        <button
          key={index}
          className="bg-white bg-opacity-25 hover:bg-opacity-50 rounded-2xl font-normal text-white text-xs p-2 mr-2 mt-1"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
