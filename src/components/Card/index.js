import Image from 'next/image'
import api from 'services/api'
import { useEffect, useState } from 'react'

import pokemonType from 'utils/pokemonTypeIcons'
import Stats from 'components/Stats'
import Modal from 'components/Modal'

import { Wrapper } from './style'

export default function Card(props) {
  const [pokemon, setPokemon] = useState({})
  const [showModal, setShowModal] = useState(false)

  const getPokemonData = async () => {
    try {
      const { data } = await api.get(props.pokemon.url)

      const image =
        data.sprites.other.dream_world.front_default ||
        data.sprites.other['official-artwork'].front_default ||
        data.sprites.front_default

      const specieData = await api.get(data.species.url)
      const color = specieData.data.color.name

      setPokemon({
        ...props.pokemon,
        abilities: data.abilities,
        height: data.height,
        species: data.species,
        sprites: data.sprites,
        stats: data.stats,
        types: data.types,
        weight: data.weight,
        moves: data.moves,
        image,
        color
      })
    } catch (error) {
      // TODO: handle error
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemonData()
  }, [])

  if (!pokemon.name) {
    return null
  }

  return (
    <>
      <Wrapper
        mode={props.mode}
        color={pokemon.color}
        onClick={() => setShowModal(true)}
      >
        <div className="title">{pokemon.name}</div>
        <div className="subtitle">{pokemon.species.name}</div>

        <div className="icons">
          {pokemon.types.map(({ type }) => (
            <Image
              src={pokemonType[type.name]}
              alt={type.name}
              title={type.name}
              key={type.name}
              width={24}
              height={24}
            />
          ))}
        </div>

        <div className="image">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>

        <div className="info">
          <Stats stats={pokemon.stats} mode={props.mode} />
        </div>
      </Wrapper>

      {showModal && (
        <Modal pokemon={pokemon} closeModal={() => setShowModal(false)} />
      )}
    </>
  )
}
