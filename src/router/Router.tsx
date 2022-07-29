import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/template/HeaderLayout';
import { homeRoutes } from './HomeRoutes';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path='/home'>
        {homeRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            index={route.index}
            element={<HeaderLayout>{route.children}</HeaderLayout>}
          />
        ))}
      </Route>
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
});
Router.displayName = 'Router';
