import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'reflexbox';
import { Sidebar } from './Sidebar';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { INDENT, RADIUS, SHADOW } from '../../../common/theme/constants';
import { RouteSubItem } from '../../../common/router';
import { SingleLogo } from './SingleLogo';

type Props = {
  sidebar: ReactNode;
  content: ReactNode;
  footer: ReactNode;
  menu?: RouteSubItem[];
};

const Wrapper = styled(Flex)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: ${INDENT.m};
`;

const ContentWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.background.primary};
  padding: ${INDENT.l};
  border-radius: ${RADIUS.xl};
  box-shadow: ${SHADOW.block};
`;

export const Layout = ({ sidebar, menu, content, footer }: Props) => {
  const hasSidebar = Boolean(sidebar || menu);

  return (
    <Wrapper>
      {hasSidebar && <Sidebar menu={menu}>{sidebar}</Sidebar>}
      <Flex flexDirection="column" flexGrow={1}>
        <Flex>
          {!hasSidebar && <SingleLogo />}
          <Box flexGrow={1}>
            <NavBar />
          </Box>
        </Flex>
        <ContentWrapper>{content}</ContentWrapper>
        <Box flexGrow={1} />
        {footer && <Footer>{footer}</Footer>}
      </Flex>
    </Wrapper>
  );
};
