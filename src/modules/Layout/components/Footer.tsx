import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { INDENT, RADIUS, SHADOW } from '../../../common/theme/constants';

type Props = {
  children: ReactNode;
};

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.background.primary};
  margin-top: ${INDENT.xl};
  padding: ${INDENT.l};
  border-radius: ${RADIUS.xl};
  box-shadow: ${SHADOW.block};
`;

export const Footer = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
