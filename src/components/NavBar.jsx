import SelectOptions from "./SelectOptions";
import Icons from "./Icons";

function NavBar() {
  return (
    <nav className="bg-[#18181a] text-white grid grid-cols-8 items-center p-2">
      <div className="flex items-center space-x-4 col-span-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png"
          alt=""
          className="h-8"
        />
        <a
          href=""
          className="text-lg hover:text-[#bf94ff] hover:underline hover:underline-offset-8 transition-colors duration-300 underline-offset-8"
        >
          <h2>Siguiendo</h2>
        </a>
        <a
          href=""
          className="text-lg hover:text-[#bf94ff] hover:underline hover:underline-offset-8 transition-colors duration-300 underline-offset-8"
        >
          <h2>Explorar</h2>
        </a>
        <SelectOptions />
      </div>
      <div className="flex items-center w-full col-span-4">
        <input
          type="text"
          placeholder="Buscar"
          className="bg-[#18181a] text-white border border-gray-600 p-2 h-10 w-full rounded-l"
        />
        <button className="bg-[#36363a] p-2 h-10 rounded-r flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-4 w-4 fill-current text-white"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
      <div className="flex space-x-4 col-span-1">
        <Icons />
      </div>
      <div className="flex justify-end col-span-1">
        <img
          src="https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-70x70.png"
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
}

export default NavBar;
