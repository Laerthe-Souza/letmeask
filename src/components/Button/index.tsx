import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({ isOutlined, ...rest }) => {
  return <Container className={isOutlined ? 'outlined' : ''} {...rest} />;
};

export { Button };
