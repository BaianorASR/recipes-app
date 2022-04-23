import { ReactNode } from 'react';
import styled from 'styled-components';

import { Header } from '../../components';
import { Footer } from '../../components/Footer';

const SContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

type MainContainerProps = {
  children: ReactNode | ReactNode[];
};

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <SContainer>
      <Header />
      {children}
      <Footer />
    </SContainer>
  );
}
