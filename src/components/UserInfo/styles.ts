import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  > span {
    margin-left: 8px;
    color: #29292e;
    font-weight: 500;
    font-size: 14px;
  }
`;
