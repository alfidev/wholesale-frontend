import React, { ReactNode } from 'react';
import styled from 'styled-components';

type TypographyProps = {
  size?: string;
  weight?: string;
  color?: string;
};
const getTypographyStyles = ({ weight, color }: TypographyProps) => `
  color: ${color || 'inherit'};
  font-weight: ${weight || '500'};
  margin: 0;
`;

const StyledH1 = styled.h1`
  font-size: ${({ size }) => size || '28px'};
  ${getTypographyStyles}
`;

const StyledH2 = styled.h2`
  font-size: ${({ size }) => size || '24px'};
  ${getTypographyStyles}
`;

const StyledH3 = styled.h3`
  font-size: ${({ size }) => size || '20px'};
  ${getTypographyStyles}
`;

const StyledH4 = styled.h4`
  font-size: ${({ size }) => size || '18px'};
  ${getTypographyStyles}
`;

const StyledH5 = styled.h5`
  font-size: ${({ size }) => size || '16px'};
  ${getTypographyStyles}
`;

const StyledH6 = styled.h5`
  font-size: ${({ size }) => size || '14px'};
  ${getTypographyStyles}
`;

type Props = TypographyProps & {
  tag?: string;
  children: ReactNode;
};

const getComponent = (tag?: string) => {
  switch (tag) {
    case 'h1':
      return StyledH1;
    case 'h2':
      return StyledH2;
    case 'h3':
      return StyledH3;
    case 'h4':
      return StyledH4;
    case 'h5':
      return StyledH5;
    case 'h6':
      return StyledH6;
    default:
      return StyledH3;
  }
};

export const MainTypography = ({ tag, children, ...props }: Props) => {
  const Component = getComponent(tag);

  return <Component {...props}>{children}</Component>;
};
