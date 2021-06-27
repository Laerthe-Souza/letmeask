import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ isOutlined, ...rest }) => {
  return <Container className={isOutlined ? 'outlined' : ''} {...rest} />;
};
