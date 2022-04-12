import React, { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SHADOW, Z_INDEX } from '../../../theme/constants';

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: ${Z_INDEX.popup};
  background: ${({ theme }) => theme.background.primary};
  box-shadow: ${SHADOW.block};
`;

export const Popup = ({ children, onClose }: Props) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      const { current } = popupRef;

      if (current && !current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('mousedown', clickHandler);
    };
  }, [popupRef]);
  return <Wrapper ref={popupRef}>{children}</Wrapper>;
};
