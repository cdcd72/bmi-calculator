import { COLS } from '@/utils/responsive/constants';

export const calculateWidth = (
  span: number | undefined
): string | undefined => {
  if (!span) return undefined;
  const width = (span / COLS) * 100;
  return `${width}%`;
};
