import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import { INDENT, RADIUS, SHADOW } from '../../../common/theme/constants';
import { applicationRoutes } from '../../../common/router';
import { NavLink } from 'react-router-dom';
import { BellIcon, LogoutIcon, MoonIcon, UserCircleIcon } from '../../../assets/icons/';
import { Box, Flex } from 'reflexbox';
import { Popup } from '../../../common/ui-kit/Popup';
import { logout } from '../../../common/init';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 51px;
  background: ${({ theme }) => theme.background.primary};
  //padding: ${INDENT.l};
  margin-bottom: ${INDENT.xl};
  border-radius: ${RADIUS.xl};
  box-shadow: ${SHADOW.block};
`;

const MenuWrapper = styled(Box)`
  overflow: hidden;
`;

const Link = styled(NavLink)`
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

const LinkIcon = styled.button`
  color: ${({ theme }) => theme.text.primary};
  width: 50px;
  height: 51px;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: ${INDENT.xxs};
`;

const LinkUser = styled(LinkIcon)`
  position: relative;
  padding: ${INDENT.s};
`;

const LinkSmallIcon = styled(LinkIcon)`
  padding: ${INDENT.m};
`;

const PopupLink = styled.button`
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;
  padding: ${INDENT.l} ${INDENT.l} ${INDENT.l} 46px;
  border: none;
  cursor: pointer;
  background: transparent;

  :active,
  :hover {
    background: linear-gradient(0deg, transparent, ${({ theme }) => theme.background.contrast}, transparent);
  }

  :active {
    color: ${({ theme }) => theme.text.tertiary};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: 26px;
  width: 26px;
  left: 10px;
  top: calc(50% - 13px);
`;

export const NavBar = () => {
  const [isOpenUserPopup, setIsOpenUserPopup] = useState(false);

  const handleClickUserPopupToggle = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpenUserPopup(!isOpenUserPopup);
  };

  const handleClickUserPopupClose = () => {
    setIsOpenUserPopup(false);
  };

  const handleClickLogout = () => {
    logout();
  };

  return (
    <Wrapper>
      <MenuWrapper>
        <Flex>
          {applicationRoutes
            .filter(({ inMenu }) => inMenu)
            .map(({ title, path, exact }) => (
              <Link key={path} to={path} exact={exact}>
                {title}
              </Link>
            ))}
        </Flex>
      </MenuWrapper>
      <Box>
        <Flex>
          <LinkSmallIcon>
            <MoonIcon />
          </LinkSmallIcon>
          <LinkSmallIcon>
            <BellIcon />
          </LinkSmallIcon>
          <LinkUser onClick={handleClickUserPopupToggle}>
            <UserCircleIcon />
            {isOpenUserPopup && (
              <Popup onClose={handleClickUserPopupClose}>
                <PopupLink onClick={handleClickLogout}>
                  <IconWrapper>
                    <LogoutIcon />
                  </IconWrapper>
                  Выход
                </PopupLink>
              </Popup>
            )}
          </LinkUser>
        </Flex>
      </Box>
    </Wrapper>
  );
};
