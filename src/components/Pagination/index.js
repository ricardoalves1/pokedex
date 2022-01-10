import Icon from '@material-ui/core/Icon'
import { Wrapper } from './style'

export default function Pagination(props) {
  const { page, next, prev } = props

  return (
    <Wrapper>
      <button disabled={!prev} onClick={() => props.changePage(page - 1)}>
        <Icon>chevron_left</Icon>
      </button>

      <span> {page} </span>

      <button disabled={!next} onClick={() => props.changePage(page + 1)}>
        <Icon>chevron_right</Icon>
      </button>
    </Wrapper>
  )
}
