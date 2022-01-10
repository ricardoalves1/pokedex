import Icon from '@material-ui/core/Icon'
import { Options } from './style'

export default function Mode(props) {
  return (
    <Options>
      <button onClick={() => props.changeMode('grid')}>
        <Icon>grid_on</Icon>
      </button>

      <button onClick={() => props.changeMode('list')}>
        <Icon>list</Icon>
      </button>
    </Options>
  )
}
