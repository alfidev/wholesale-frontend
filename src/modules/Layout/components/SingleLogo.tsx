import React from 'react';
import styled from 'styled-components';
import { adaptive } from '../../../common/theme';
import { INDENT, RADIUS, SHADOW } from '../../../common/theme/constants';
import { LampastarLogo } from '../../../assets/icons';

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.background.primary};
  padding: ${INDENT.xs} ${INDENT.l};
  margin-right: ${INDENT.xl};
  margin-bottom: ${INDENT.xl};
  border-radius: ${RADIUS.xl};
  box-shadow: ${SHADOW.block};

  ${adaptive.minWidth.tablet} {
    height: 51px;
  }

  ${adaptive.maxWidth.mobile} {
    display: none;
  }
`;

const LogoContainer = styled.div`
  & > svg {
    width: 100%;
    height: 43px;
  }
`;

export const SingleLogo = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <LampastarLogo />
      </LogoContainer>
    </Wrapper>
  );
};
