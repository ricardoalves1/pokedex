import styled from 'styled-components'

export const Options = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  align-items: center;
  justify-content: end;
  position: relative;

  button {
    background-color: transparent;
    border: none;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.colors.white};
    }

    &::before {
      content: '';
      position: absolute;
      margin: -2px 0px 0px -2px;
      border-radius: 4px;
      width: 28px;
      height: 28px;
      opacity: 0.5;
      z-index: -1;
      background: ${props => props.theme.colors.white};
    }
  }
`
