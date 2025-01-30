import { MagnifyingGlassPlusIcon } from "@heroicons/react/16/solid";
import React from "react";

const Search = () => {
  return (
    <div className="relative flex justify-center items-center ml-6">
      <input
        type="text"
        placeholder="Buscar Prestamo Activo"
        name="search"
        defaultValue={"hola"}
        id="search"
        // onChange={(e) => "texto de busqueda"}
        className="w-96 h-12 rounded-md shadow-md focus:outline-0 text-center"
      />
      <MagnifyingGlassPlusIcon className="absolute w-6 h-6 right-0 text-gray-400" />
    </div>
  );
};

export default Search;
