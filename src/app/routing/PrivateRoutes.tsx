import { FC, Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils';
import { WithChildren } from '../../_metronic/helpers';
import { MasterLayout } from '../../_metronic/layout/MasterLayout';
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper';
import { useAppWorkspace } from '../stores/AppStore';
import { FeaturesWrapper } from '../pages/features/FeaturesWrapper.tsx';

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'));
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'));
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'));
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'));
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'));
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'));

  const workSpace = useAppWorkspace();

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard/Workspace after success login/registartion */}
        <Route path="auth/*" element={<Navigate to={workSpace ? '/dashboard' : '/workspace'} />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="features" element={<FeaturesWrapper />} />

        {/* <Route path="builder" element={<BuilderPageWrapper />} /> */}
        {/* <Route path="menu-test" element={<MenuTestPage />} /> */}
        {/* Lazy Modules */}
        <Route
          path="crafted/pages/profile/*"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/pages/wizards/*"
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/widgets/*"
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/chat/*"
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/user-management/*"
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary');
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
