import { useState } from "react";

function SelectOptions() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="relative">
      <button
        className="bg-[#18181a] text-white p-2 rounded focus:outline-none"
        onClick={toggleMenu}
      >
        ⋮
      </button>
      {menuVisible && (
        <div className="absolute right-0 mt-2 w-48 bg-[#0e0e0f] rounded-md shadow-lg z-20">
          <ul>
            <li className="px-4 py-2 text-xs font-bold text-white">GENERAL</li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Acerca de
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Anunciantes
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Blog
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Desarrolladores
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Descargar aplicaciones
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Empleos
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              IGDB
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Loot Cave - Tienda
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Partners
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Prensa
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Turbo
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Twitch Gift Card
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white">
              ──────────────
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white">
              AYUDA E INFORMACION LEGAL
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Ayuda
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Declaracion de accesibilidad
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Directrices de la comunidad
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Opciones de anuncios
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Politica de privacidad
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Politica sobre cookies
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Centro de privacidad
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Centro de seguridad
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Seguridad
            </li>
            <li className="px-4 py-2 text-xs font-bold text-white cursor-pointer hover:bg-white hover:bg-opacity-25">
              Terminos
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectOptions;
