import React from "react";

const Search = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Prestamo Activo"
        name="search"
        value={"hola"}
        id="search"
        // onChange={(e) => "texto de busqueda"}
        className="w-48 h-12 border border-black"
      />
    </div>
  );
};

export default Search;
