// import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import logo from "../assets/logo.png"
import PokemonCards from './PokemonCards';

function Pokemon() {
  const [pokemon,setPokemon] = useState([]);
  const [loading,setloading] = useState(true)
  const [search,setSearch] = useState('')
  const API = `https://pokeapi.co/api/v2/pokemon?limit=1000`;
  const fetchAPI = async ()=>{
    try{
      const res = await fetch(API)
      const data = await res.json()
      // console.log(data)
      // eslint-disable-next-line no-unused-vars
      const pokemonsAPI = data.results.map(async (item)=>{
        // console.log(item.url)
        const res = await fetch(item.url)
        const data = await res.json()
        return data;
      })
      // Pokemon API has promise data
      const response = await Promise.all(pokemonsAPI)
      // console.log(response)
      console.log(response[0])
      setPokemon(response);
      setloading(false)
    }catch(err){
      console.log(err)
      setloading(false)
    }
  }

  useEffect(()=>{
    fetchAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // Search function
  const searchPoke = pokemon.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if(loading){
    return (
        <div>
            <h1>Loading......</h1>
        </div>
    )
  }
  return (
    <div className='bg-[#ffffff] w-full p-5'>
        <div className='flex justify-center gap-5 items-center mb-10'>
            <img src={logo} className='w-[5%]' alt="logo" />
            <h1 className='text-[4em] font-semibold'>Pokemon</h1>
        </div>
        <div className='flex justify-center items-center pb-10'>
            <input className='bg-blue-300 px-[70px] py-[15px] outline-none text-center text-[18px] rounded-md text-blue-900 placeholder:text-blue-400' placeholder='Search Pokemon' type="text" value={search} onChange={(e)=>setSearch(e.target.value)}  />
        </div>
        <div className='w-full grid gap-5 grid-cols-4'>
            {
                searchPoke.map((item)=>{
                    return <PokemonCards key={item.id} pokemonData = {item} />
                })
            }
        </div>
    </div>
  )
}

export default Pokemon