import { BounceLoader } from 'react-spinners';

import { Container } from './styles';

export const Loading: React.FC = () => {
  return (
    <Container>
      <BounceLoader size={100} color="#835afd" />
    </Container>
  );
};
