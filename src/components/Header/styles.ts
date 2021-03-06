import styled from 'styled-components';

export const Container = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;

  div.content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-height: 45px;
    }

    > div.host {
      display: flex;
      align-items: center;
    }

    > div {
      display: flex;
      gap: 16px;

      > button {
        height: 40px;
      }
    }
  }
`;
