import { FC } from 'react';
import { useIntl } from 'react-intl';
import { Content } from '../../../_metronic/layout/components/content';
import { ToolbarWrapper } from '../../../_metronic/layout/components/toolbar';
import { PageTitle } from '../../../_metronic/layout/core';

const GamesPage: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      {/* begin::Row */}
      <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
        <div className="col-6">abc</div>
      </div>
      {/* end::Row */}
    </Content>
  </>
);

const GamesWrapper: FC = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Games' })}</PageTitle>
      <GamesPage />
    </>
  );
};

export { GamesWrapper };
