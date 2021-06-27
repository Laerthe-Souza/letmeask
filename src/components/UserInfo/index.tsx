import { Container } from './styles';

type UserInfoProps = {
  name: string;
  avatar: string;
};

export const UserInfo: React.FC<UserInfoProps> = ({ name, avatar }) => {
  return (
    <Container>
      <img src={avatar} alt={name} />

      <span>{name}</span>
    </Container>
  );
};
