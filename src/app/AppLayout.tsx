import styled from 'styled-components';

import BmiCalculator from '@/ui/BmiCalculator';
import GitHubLink from '@/ui/GitHubLink';
import Title from '@/ui/Title';
import { BC_TITLE } from '@/utils/responsive/constants';

const StyledNav = styled.nav`
  background-color: var(--color-grey-0);
  color: var(--color-grey-600);
  border-bottom: 1px solid var(--color-grey-100);
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  height: 10dvh;
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: auto;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledMain = styled.main`
  background-color: var(--color-grey-100);
  color: var(--color-grey-600);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90dvh;
  padding: 2rem;
`;

function AppLayout() {
  const title = `${BC_TITLE}`;
  return (
    <>
      <StyledNav>
        <DesktopNav>
          <Title>{title}</Title>
          <NavRight>
            <GitHubLink />
          </NavRight>
        </DesktopNav>
        <MobileNav>
          <div />
          <Title>{title}</Title>
          <NavRight>
            <GitHubLink />
          </NavRight>
        </MobileNav>
      </StyledNav>
      <StyledMain>
        <BmiCalculator />
      </StyledMain>
    </>
  );
}

export default AppLayout;
