import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers';
import { Content } from '../../../_metronic/layout/components/content';
import { PageTitle } from '../../../_metronic/layout/core';
import { Workspace } from '../../constants/type';
import { useAppActions } from '../../stores/AppStore';

const WorkSpace: FC = () => {
  const navigate = useNavigate();

  const { setWorkspace } = useAppActions();

  const listWorkspace = [
    {
      id: '1',
      name: 'Workspace 1',
      description: 'Description Workspace 1',
      percentage: '70',
      img: 'plurk.svg',
    },
    {
      id: '2',
      name: 'Workspace 2',
      description: 'Description Workspace 2',
      percentage: '50',
      img: 'telegram.svg',
    },
    {
      id: '3',
      name: 'Workspace 3',
      description: 'Description Workspace 3',
      percentage: '80',
      img: 'vimeo.svg',
    },
    {
      id: '4',
      name: 'Workspace 4',
      description: 'Description Workspace 4',
      percentage: '90',
      img: 'bebo.svg',
    },
    {
      id: '5',
      name: 'Workspace 5',
      description: 'Description Workspace 5',
      percentage: '70',
      img: 'kickstarter.svg',
    },
  ];

  const handleSelectWorkspace = (workspace: Workspace) => () => {
    setWorkspace(workspace);
    navigate('/dashboard');
  };

  return (
    <>
      <PageTitle>Workspace</PageTitle>
      <Content>
        <div className="d-flex flex-column flex-lg-row-fluid px-10 py-20 order-lg-1">
          <div className="card">
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold fs-3 mb-1">Your Workspaces</span>
                <span className="text-muted fw-semibold fs-7">{listWorkspace?.length} workspaces</span>
              </h3>
            </div>
            <div className="card-body py-3">
              <div className="table-responsive">
                <table className="table align-middle gs-0 gy-5">
                  <thead>
                    <tr>
                      <th className="p-0 w-50px"></th>
                      <th className="p-0 min-w-200px"></th>
                      <th className="p-0 min-w-100px"></th>
                      <th className="p-0 min-w-40px"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {listWorkspace?.map((workspace) => (
                      <tr key={workspace?.id}>
                        <th>
                          <div className="symbol symbol-50px me-2">
                            <span className="symbol-label">
                              <img
                                src={toAbsoluteUrl(`media/svg/brand-logos/${workspace?.img}`)}
                                className="h-50 align-self-center"
                                alt=""
                              />
                            </span>
                          </div>
                        </th>
                        <td>
                          <div
                            onClick={handleSelectWorkspace(workspace)}
                            className="cursor-pointer text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                          >
                            {workspace?.name}
                          </div>
                          <span className="text-muted fw-semibold d-block fs-7">{workspace?.description}</span>
                        </td>
                        <td>
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-stack mb-2">
                              <span className="text-muted me-2 fs-7 fw-semibold">{workspace?.percentage}%</span>
                            </div>
                            <div className="progress h-6px w-100">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: `${workspace?.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <button
                            onClick={handleSelectWorkspace(workspace)}
                            className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                          >
                            <KTIcon iconName="arrow-right" className="fs-2" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Content>
      ;
    </>
  );
};

export default WorkSpace;
