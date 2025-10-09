import styled, { css } from 'styled-components';

import { SIZE } from '@/utils/responsive/constants';
import { calculateWidth } from '@/utils/responsive/helpers';

const Column = styled.div<{
  $xs?: number;
  $sm?: number;
  $md?: number;
  $lg?: number;
  $xl?: number;
  $xxl?: number;
}>`
  width: ${({ $xs }) => calculateWidth($xs) ?? '100%'};
  height: 100%;

  ${({ $xs }) =>
    $xs &&
    css`
      @media only screen and (min-width: ${SIZE.xs}) {
        width: ${calculateWidth($xs)};
      }
    `}

  ${({ $md }) =>
    $md &&
    css`
      width: 50%;
      @media only screen and (min-width: ${SIZE.md}) {
        width: ${calculateWidth($md)};
      }
    `}

  ${({ $lg }) =>
    $lg &&
    css`
      @media only screen and (min-width: ${SIZE.lg}) {
        width: ${calculateWidth($lg)};
      }
    `}

  ${({ $xl }) =>
    $xl &&
    css`
      @media only screen and (min-width: ${SIZE.xl}) {
        width: ${calculateWidth($xl)};
      }
    `}

  ${({ $xxl }) =>
    $xxl &&
    css`
      @media only screen and (min-width: ${SIZE.xxl}) {
        width: ${calculateWidth($xxl)};
      }
    `}
`;

export default Column;
