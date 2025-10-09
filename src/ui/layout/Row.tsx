import styled from 'styled-components';

import { justifyContent, alignSelf } from '@/utils/responsive/types';

const Row = styled.div<{
  $justifyContent?: justifyContent;
  $alignSelf?: alignSelf;
}>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${({ $justifyContent }) => $justifyContent ?? 'flex-start'};
  align-self: ${({ $alignSelf }) => $alignSelf ?? 'flex-start'};
`;

export default Row;
