/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { useConnectionStatus } from '@thirdweb-dev/react';
import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { CONNECT_STATUS } from '../constants';
import { AuthPage, Logout } from '../modules/auth';
import { ErrorsPage } from '../modules/errors/ErrorsPage';
import { PrivateRoutes } from './PrivateRoutes';
import WorkSpace from '../pages/workspace/WorkSpace';
import { useAppWorkspace } from '../stores/AppStore';

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
  const connectStatus = useConnectionStatus();
  const isConnected = connectStatus === CONNECT_STATUS.CONNECTED;

  const workSpace = useAppWorkspace();

  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="error/*" element={<ErrorsPage />} />
          <Route path="logout" element={<Logout />} />
          {isConnected ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
              <Route index element={<Navigate to={workSpace ? '/dashboard' : '/workspace'} />} />

              <Route path="workspace" element={<WorkSpace />} />
            </>
          ) : (
            <>
              <Route path="auth/*" element={<AuthPage />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
