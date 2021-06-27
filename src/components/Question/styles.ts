import styled, { css } from 'styled-components';

type ContainerProps = {
  isAnswered: boolean;
  isHighlighted: boolean;
};

export const Container = styled.div<ContainerProps>`
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  text-align: left;

  ${props =>
    props.isHighlighted &&
    css`
      background-color: #f4f0ff;
      border: 1px solid #835afd;

      > footer div.user-info span {
        color: #29292e;
      }
    `}

  ${props =>
    props.isAnswered &&
    css`
      background-color: #bdbcdd;
      border: 1px solid #835afd;

      > footer div.user-info span {
        color: #29292e;
      }
    `}

  & + & {
    margin-top: 8px;
  }

  > p {
    color: #29292e;
  }

  > footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background-color: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.7);
      }

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 8px;

        &.liked {
          color: #835afd;

          svg path {
            stroke: #835afd;
          }
        }
      }
    }
  }
`;
