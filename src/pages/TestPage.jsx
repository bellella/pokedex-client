import React from "react";

const Test = () => {
  const pokemons = [
    { id: 1, name: "Bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { id: 2, name: "Ivysaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    { id: 3, name: "Venusaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
    { id: 4, name: "Charmander", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { id: 5, name: "Charmeleon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
    { id: 6, name: "Charizard", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 text-gray-800">
      {/* Header */}
      <header className="bg-yellow-400 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-600">Pokédex</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-800 hover:text-red-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-red-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-red-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Pokemon List */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Pokemon List</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {pokemons.map((pokemon) => (
                <div
                  key={pokemon.id}
                  className="bg-white shadow-md rounded-lg p-4 hover:bg-blue-100"
                >
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="w-full h-32 object-contain"
                  />
                  <h3 className="text-lg font-bold text-center">{pokemon.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Pokemon Details */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Selected Pokemon</h2>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-full h-48 object-contain"
              />
              <h3 className="text-lg font-bold text-center mt-4">Bulbasaur</h3>
              <p className="text-center mt-2">
                Type: Grass/Poison <br /> Level: 5
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Test;
