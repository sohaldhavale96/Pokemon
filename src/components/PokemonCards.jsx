// import React from 'react';
import PropTypes from 'prop-types';

function PokemonCards({ pokemonData }) {
  return (
    <div className='h-[65vh] cursor-pointer hover:bg-blue-500 hover:text-white rounded-md overflow-hidden shadow-md hover:shadow-xl border-[3px] hover:scale-[1.01] transition duration-75 ease-in-out flex justify-center items-center flex-col'>
        <div className='p-2 h-[50%] w-full grid place-items-center'>
            <img className='w-[50%] hover:w[75%]' src={pokemonData.sprites.other.home.front_default} alt="pokemon" />
        </div>
        <div className='h-[50%] w-full grid grid-row-4 p-3'>
            <h1 className='text-center text-[1.2em] font-semibold'>{pokemonData.name}</h1>
            <div className='grid grid-cols-3 gap-3'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className="font-bold">{pokemonData.height}</h2>
                    <h1 className='text-[0.8em]'>height</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className="font-bold">{pokemonData.weight}</h2>
                    <h1 className='text-[0.8em]'>weight</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className="font-bold">{pokemonData.base_experience}</h2>
                    <h1 className='text-[0.8em]'>Exprience</h1>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className="font-bold whitespace-nowrap">{pokemonData.abilities[0].ability.name}</h2>
                    <h1 className='text-[0.8em]'>Exprience</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className="font-bold">{pokemonData.stats[0].base_stat}</h2>
                    <h1 className='text-[0.8em]'>HP</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className="font-bold">{pokemonData.stats[1].base_stat}</h2>
                    <h1 className='text-[0.8em]'>Attack</h1>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className="font-bold">{pokemonData.stats[2].base_stat}</h2>
                    <h1 className='text-[0.8em]'>Defence</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className="font-bold">{pokemonData.stats[3].base_stat}</h2>
                    <h1 className='whitespace-nowrap text-[0.8em]'>special-attack</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className="font-bold">{pokemonData.stats[5].base_stat}</h2>
                    <h1 className='text-[0.8em]'>speed</h1>
                </div>
            </div>
        </div>
    </div>
  );
}

PokemonCards.propTypes = {
  pokemonData: PropTypes.object.isRequired,
};

export default PokemonCards;
