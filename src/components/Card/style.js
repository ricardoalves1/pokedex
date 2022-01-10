import styled from 'styled-components'

export const Wrapper = styled.div`
  --main-color: ${props => props.theme.colors.pk[props.color]};
  --white-color: ${props => props.theme.colors.white};

  background: ${props =>
    props.mode === 'list'
      ? `
          linear-gradient(
            90deg,
            var(--main-color) 0%,
            var(--white-color) 300px
          )
    `
      : `
          linear-gradient(
            180deg,
            var(--main-color) 0%,
            var(--white-color) 100%
          )
    `};

  ${props =>
    props.mode === 'list' &&
    `
      display: grid;
      grid-template-columns: minmax(20%, 250px) auto;
      grid-template-rows: auto;
      grid-template-areas: 
      "image content";
    `}

  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 8px 16px;
  position: relative;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  overflow-x: auto;

  &:hover {
    ${props => (props.mode === 'list' ? `width: 105%;` : `height: 105%;`)}
    box-shadow: 0px 0px 20px var(--main-color);
  }

  .title {
    ${props => props.mode !== 'list' && 'width: 16ch;'}
    font-size: 1.125rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    grid-row-start: 1;
    grid-row-end: 2;
  }

  .subtitle {
    font-size: 0.75rem;
    font-weight: 300;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .title,
  .subtitle {
    text-transform: capitalize;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  .image {
    max-width: 100px;
    height: 100px;
    position: relative;
    margin: 16px auto;
    z-index: 1;
    display: flex;
    justify-content: center;

    grid-area: image;
    grid-row-start: 1;
    grid-row-end: 4;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.3));
    }

    &::before {
      content: '';
      position: absolute;
      width: 110%;
      height: 110%;
      border-radius: 50%;
      opacity: 0.5;
      z-index: -1;
      background: ${props => props.theme.colors.white};
    }
  }

  .icons {
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px 16px;
    display: flex;
    gap: 8px;
  }

  .info {
    grid-area: content;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`
