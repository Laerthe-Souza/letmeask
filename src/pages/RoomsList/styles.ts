import styled from 'styled-components';

export const Container = styled.div`
  main {
    max-width: 1100px;
    width: 100%;
    margin: 24px auto;

    h1 {
      margin-bottom: 16px;
    }

    table.rooms-list {
      width: 100%;
      border-spacing: 0 10px;

      thead tr td {
        padding: 10px 16px;
      }

      tbody {
        background-color: #fefefe;
        font-weight: 500;
        color: #29292e;

        tr {
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
          border-radius: 8px;

          td {
            padding: 12px 16px;

            > span {
              background-color: #2e8b57;
              border-radius: 9999px;
              padding: 8px 16px;
              color: #fff;
              font-weight: 500;
              font-size: 14px;

              &.closed {
                background-color: #e73f5d;
              }
            }
          }

          td:first-child {
            border-radius: 8px 0 0 8px;
          }

          td:last-child {
            border-radius: 0 8px 8px 0;
          }

          img {
            width: 45px;
            height: 45px;
          }

          span {
            font-size: 16px;
          }

          button {
            font-size: 14px;
            height: 35px;
          }
        }
      }
    }
  }
`;
