import Card from 'components/Card'

import { Items } from './style'

export default function Grid(props) {
  const { pokemons } = props

  return (
    <Items>
      {pokemons.map((pokemon, index) => (
        <Card mode={'grid'} pokemon={pokemon} key={index} />
      ))}
    </Items>
  )
}
