import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { adaptive } from '../../../common/theme';
import { INDENT, RADIUS, SHADOW } from '../../../common/theme/constants';
import { LampastarLogo } from '../../../assets/icons';
import { NavLink } from 'react-router-dom';
import { RouteSubItem } from '../../../common/router';
import { Box } from 'reflexbox';

type Props = {
  menu?: RouteSubItem[];
  children: ReactNode;
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.background.primary};
  padding: ${INDENT.l};
  margin-right: ${INDENT.xl};
  border-radius: ${RADIUS.xl};
  box-shadow: ${SHADOW.block};

  ${adaptive.minWidth.tablet} {
    min-width: 260px;
    max-width: 260px;
  }

  ${adaptive.maxWidth.mobile} {
    display: none;
  }
`;

const LogoContainer = styled.div`
  & > svg {
    width: 100%;
    height: 70px;
  }
`;

const Divider = styled.div`
  height: 3px;
  background: radial-gradient(#e7e7e7, transparent);
  margin: ${INDENT.l} 0;
`;

const MenuLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;
  padding: ${INDENT.l};

  :active,
  :hover {
    background: linear-gradient(0deg, transparent, ${({ theme }) => theme.background.contrast}, transparent);
  }

  :active {
    color: ${({ theme }) => theme.text.tertiary};
  }

  &.active {
    color: ${({ theme }) => theme.text.tertiary};
  }
`;

export const Sidebar = ({ children, menu }: Props) => {
  const hasMenuAndChildren = Boolean(menu && children);

  return (
    <Wrapper>
      <Box>
        <LogoContainer>
          <LampastarLogo />
        </LogoContainer>
        <Divider />
        {menu &&
          menu.map(({ title, exact, path }) => (
            <MenuLink key={title} to={path} exact={exact}>
              {title}
            </MenuLink>
          ))}
        {hasMenuAndChildren && <Divider />}
        {children}
      </Box>
      <Box>bottom</Box>
    </Wrapper>
  );
};
