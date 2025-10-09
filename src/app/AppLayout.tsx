import styled from 'styled-components';

import BmiCalculator from '@/ui/BmiCalculator';

const StyledMain = styled.main`
  background-color: var(--color-grey-100);
  color: var(--color-grey-600);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  padding: 2rem;
`;

function AppLayout() {
  return (
    <StyledMain>
      <BmiCalculator />
    </StyledMain>
  );
}

export default AppLayout;
