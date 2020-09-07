// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

type strBreakType = "xs" | "sm" | "md" | "lg" | "xl" | "xl";
interface IUseBreackPoints {
  (): { strBreak: strBreakType, numberBreak: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined };
}

const useBreakPoints: IUseBreackPoints = () => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up('xl'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));

  const strBreak = xl ? 'xl' : lg ? 'lg' : md ? 'md' : sm ? 'sm' : 'xs';
  const numberBreak = xl ? 8 : lg ? 6 : md ? 4 : sm ? 2 : 0;

  return { strBreak, numberBreak };
}

export default useBreakPoints;