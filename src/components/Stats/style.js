import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${props =>
    props.mode === 'list' &&
    `
      display: flex;
      gap: 16px;
      align-items: center;
    `}

  .item {
    padding: 4px;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 40px auto;
    grid-template-rows: auto;
    ${props => props.mode === 'list' && `grid-template-columns: auto;`}

    .icon {
      position: relative;
      width: 24px;
      height: 24px;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        opacity: 0.5;
        z-index: -1;
        background: ${props => props.theme.colors.white};
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
      }
    }
  }
`

export const Value = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  progress {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    width: 100%;
    height: 8px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    color: ${props => props.theme.colors.stats[props.color]};

    &::-webkit-progress-bar {
      background-color: rgba(255, 255, 255, 0.5);
    }

    &::-webkit-progress-value {
      background-color: ${props => props.theme.colors.stats[props.color]};
      border-radius: 2px;
    }

    &::-moz-progress-bar {
      background-color: ${props => props.theme.colors.stats[props.color]};
      border-radius: 2px;
    }
  }
`
