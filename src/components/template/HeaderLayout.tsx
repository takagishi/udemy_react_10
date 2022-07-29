import { FC, memo, ReactNode } from 'react';
import { Header } from '../organisms/layout/Header';

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
HeaderLayout.displayName = 'HeaderLayout';
