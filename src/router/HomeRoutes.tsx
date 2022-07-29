import { Home } from '../components/pages/Home';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';

export const homeRoutes = [
  {
    path: '',
    index: true,
    children: <Home />,
  },
  {
    path: 'user_management',
    index: false,
    children: <UserManagement />,
  },
  {
    path: 'setting',
    index: false,
    children: <Setting />,
  },
];
