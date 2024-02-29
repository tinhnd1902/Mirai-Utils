import { useIntl } from 'react-intl';
import { KTIcon } from '../../../../helpers';
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub';
import { SidebarMenuItem } from './SidebarMenuItem';

const SidebarMenuMain = () => {
  const intl = useIntl();

  return (
    <>
      <SidebarMenuItem
        to="/dashboard"
        icon="element-11"
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon="bi-app-indicator"
      />
      {/* <SidebarMenuItem to="/builder" icon="switch" title="Layout Builder" fontIcon="bi-layers" /> */}

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">Works</span>
        </div>
      </div>

      <SidebarMenuItem to="/games" icon="ghost" title="Games" />
      <SidebarMenuItem to="/finace" icon="graph-4" title="Finance" />
      <SidebarMenuItem to="/marketing" icon="gift" title="Marketing" />
      <SidebarMenuItem to="/analytics" icon="chart-line" title="Analytics" />
      <SidebarMenuItem to="/payments" icon="two-credit-cart" title="Payments" />

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">Platform</span>
        </div>
      </div>
      <SidebarMenuItem
        to="/apps/user-management/users"
        icon="profile-circle"
        title="User & Access"
        fontIcon="bi-layers"
      />
      <SidebarMenuItem to="#" icon="cheque" title="Rules" fontIcon="bi-layers" />
      <SidebarMenuItem to="#" icon="setting" title="Settings" fontIcon="bi-layers" />
    </>
  );
};

export { SidebarMenuMain };
