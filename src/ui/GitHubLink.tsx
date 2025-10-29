import { useState } from 'react';
import styled from 'styled-components';

const DesktopLink = styled.a`
  font-weight: 600;
  &:hover {
    color: var(--color-indigo-600);
    transition: color 0.2s;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileLink = styled.a`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const url = 'https://github.com/cdcd72/bmi-calculator';

function GitHubLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <DesktopLink href={url} target="_blank">
        GitHub
      </DesktopLink>
      <MobileLink
        href={url}
        target="_blank"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          height="30"
          src={
            isHovered
              ? 'https://cdn.simpleicons.org/github/4f46e5?viewbox=auto'
              : 'https://cdn.simpleicons.org/github?viewbox=auto'
          }
        />
      </MobileLink>
    </>
  );
}

export default GitHubLink;
