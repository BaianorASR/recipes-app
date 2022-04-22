import { ReactNode } from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

type ContainerProps = {
  children: ReactNode | ReactNode[];
};

export default function Container({ children }: ContainerProps) {
  return <SContainer>{children}</SContainer>;
}
