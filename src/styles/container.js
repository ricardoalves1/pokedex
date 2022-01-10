import styled from 'styled-components'

export const Container = styled.div`
  margin: 16px;

  @media screen and (min-width: 576px) {
    margin: 16px calc((100% - 540px) / 2);
  }

  @media screen and (min-width: 768px) {
    margin: 16px calc((100% - 720px) / 2);
  }

  @media screen and (min-width: 992px) {
    margin: 16px calc((100% - 960px) / 2);
  }

  @media screen and (min-width: 1200px) {
    margin: 16px calc((100% - 1140px) / 2);
  }
`
