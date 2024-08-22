import { Tags } from "./Tags";
import React, { useState } from "react";

export function Sleeve({ image, title, viewers, tags }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <article className="relative max-w-max">
      <div className="relative group">
        <div className="relative w-full">
          {/* Pseudo-elemento para el fondo */}
          <div className="absolute inset-0 bg-[#a970ff] transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
          {/* Imagen con hover que la desplaza hacia arriba y a la derecha */}
          <img
            src={image}
            alt={title}
            className="relative cursor-pointer transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h3 className="font-extrabold text-sm text-white hover:text-[#a970ff] transition-colors duration-300">
          {title}
        </h3>
        <div className="relative">
          <button
            className="font-extrabold cursor-pointer text-sm text-white hover:bg-white hover:bg-opacity-25 hover:rounded transition-colors duration-300 p-1"
            onClick={toggleMenu}
          >
            ⋮
          </button>
          {menuVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
              <ul>
                <li className="px-4 py-2 text-xs font-bold text-gray-700 cursor-pointer">
                  No me interesa
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-white">{`${viewers} espectadores`}</p>
      {tags && <Tags tags={tags} className="mt-2 gap-2 text-xs" />}
    </article>
  );
}
