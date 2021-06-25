import styled from 'styled-components';

export const Container = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: #835afd;
  color: #fff;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  transition: filter 0.2s;

  > img {
    margin-right: 8px;
  }

  &.outlined {
    background-color: #fff;
    border: 1px solid #835afd;
    color: #835afd;
    transition: all 0.2s;

    &:hover {
      background-color: #835afd;
      color: #fff;
    }
  }

  &:not(:disabled, .outlined):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
