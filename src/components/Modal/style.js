import styled from 'styled-components'

export const Wrapper = styled.div`
  --main-color: ${props => props.theme.colors.pk[props.color]};
  --white-color: ${props => props.theme.colors.white};

  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    position: relative;
    width: 500px;
    max-width: 80%;
    height: 800px;
    max-height: 80%;
    overflow-y: auto;
    display: flex;
    gap: 16px;
    flex-direction: column;
    border-radius: 4px;
    padding: 25px;
    box-shadow: 0 0 20px var(--main-color);
    background: linear-gradient(
      180deg,
      var(--main-color) 0%,
      var(--white-color) 100%
    );

    .close {
      position: absolute;
      top: 25px;
      right: 25px;
      background: transparent;
      border: none;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 0.75rem;
    }

    .title,
    .subtitle {
      text-transform: capitalize;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    .types {
      display: flex;
      gap: 8px;
      align-items: center;

      .icons {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.75rem;
        text-transform: capitalize;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      }
    }

    .image {
      width: 100%;
      min-height: 200px;
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 1;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.3));
      }

      &::before {
        content: '';
        position: absolute;
        width: 220px;
        height: 220px;
        border-radius: 50%;
        opacity: 0.5;
        z-index: -1;
        background: ${props => props.theme.colors.white};
      }
    }

    .measures {
      margin-top: 16px;
      display: flex;
      gap: 16px;
      justify-content: center;
    }

    .abilities,
    .moves {
      ul {
        margin: 8px 30px;
        text-transform: capitalize;
      }
    }
  }
`
