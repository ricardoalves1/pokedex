import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 16px;
  gap: 16px;
  align-items: center;
  justify-content: center;

  button {
    background-color: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.white};
    padding: 5px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      cursor: default;
      opacity: 0.7;
      box-shadow: none;
    }
  }
`
