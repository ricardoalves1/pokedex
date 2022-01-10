import Image from 'next/image'
import { Icon } from '@material-ui/core'

import pokemonType from 'utils/pokemonTypeIcons'
import Stats from 'components/Stats'

import { Wrapper } from './style'

export default function Modal({ pokemon, ...props }) {
  return (
    <Wrapper color={pokemon.color}>
      <div className="container">
        <button className="close" onClick={() => props.closeModal()}>
          <Icon>close</Icon>
        </button>

        <div className="header">
          <div className="title">{pokemon.name}</div>
          <div className="subtitle">
            <strong>Specie: </strong>
            {pokemon.species.name}
          </div>
        </div>

        <div className="types">
          {pokemon.types.map(({ type }) => (
            <div className="icons" key={type.name}>
              <Image
                src={pokemonType[type.name]}
                alt={type.name}
                title={type.name}
                width={24}
                height={24}
                className="image"
              />
              <span className="label">{type.name}</span>
            </div>
          ))}
        </div>

        <div className="image">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>

        <div className="measures">
          <div className="weight">
            <strong>Weight: </strong>
            {pokemon.weight / 10} kg
          </div>
          <div className="height">
            <strong>Height: </strong>
            {pokemon.height / 10} m
          </div>
        </div>

        <div className="stats">
          <strong>Stats:</strong>

          <Stats stats={pokemon.stats} mode="grid" />
        </div>

        <div className="abilities">
          <strong>Abilities: </strong>
          <ul>
            {pokemon.abilities.map((el, index) => (
              <li key={index}>{el.ability.name}</li>
            ))}
          </ul>
        </div>

        <div className="moves">
          <strong>Moves: </strong>
          <ul>
            {pokemon.moves.map((el, index) => (
              <li key={index}>{el.move.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}
