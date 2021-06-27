import { UserInfo } from '../UserInfo';
import { Container } from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered: boolean;
  isHighlighted: boolean;
};

export const Question: React.FC<QuestionProps> = ({
  author,
  content,
  children,
  isAnswered = false,
  isHighlighted = false,
}) => {
  return (
    <Container isAnswered={isAnswered} isHighlighted={isHighlighted}>
      <p>{content}</p>

      <footer>
        <UserInfo name={author.name} avatar={author.avatar} />

        <div>{children}</div>
      </footer>
    </Container>
  );
};
