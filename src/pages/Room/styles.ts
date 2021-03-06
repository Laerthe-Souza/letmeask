import styled from 'styled-components';

export const Container = styled.div`
  main {
    max-width: 800px;
    margin: 0 auto;

    div.room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: #29292e;
      }

      > span {
        margin-left: 16px;
        background-color: #e559f9;
        border-radius: 9999px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background-color: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }

      div.form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        > span {
          font-size: 14px;
          color: #737380;
          font-weight: 500;

          > button {
            background: 0;
            border: 0;
            color: #835afd;
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    div.question-list {
      text-align: center;
      margin-top: 32px;

      > img {
        margin-bottom: 10px;
      }

      > p {
        color: #29292e;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;
