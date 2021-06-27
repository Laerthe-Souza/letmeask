import logoImg from '../../assets/images/logo.svg';

import { Container } from './styles';

export const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="content">
        <img src={logoImg} alt="Letmeask" />

        {children}
      </div>
    </Container>
  );
};
