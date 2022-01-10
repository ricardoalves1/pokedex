import Card from 'components/Card'

import { Items } from './style'

export default function List(props) {
  const { pokemons } = props

  return (
    <Items>
      {pokemons.map((pokemon, index) => (
        <Card mode="list" pokemon={pokemon} key={index} />
      ))}
    </Items>
  )
}
