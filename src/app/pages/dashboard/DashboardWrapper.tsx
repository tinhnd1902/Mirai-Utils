import { FC, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { PageTitle } from '../../../_metronic/layout/core';
import { ToolbarWrapper } from '../../../_metronic/layout/components/toolbar';
import { Content } from '../../../_metronic/layout/components/content';
import axios from 'axios';
import { useAddress } from "@thirdweb-dev/react";

const DashboardWrapper: FC = () => {
  const intl = useIntl();
  const address = useAddress();
  
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    getDashboardData();
  }, []);
  
  const getDashboardData = async () => {
    try {
      await axios.get(`http://localhost:3003/v1/packages/getInfoByByAddressOwner/${address}`).then((response) => {
        if (!response.data) {
          throw new Error('Failed to fetch packages.');
        }
        console.log(response.data);
        setDataUser(response.data);
      });
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  }
  return (
    <>
      <ToolbarWrapper />
      <Content>
        <div className="table-responsive">
          <table className="table">
            <thead>
            <tr className="fw-bold fs-6 text-gray-800">
              <th>Contract Address</th>
            </tr>
            </thead>
            <tbody>
            {dataUser.map((user: any) => (
              <tr>
                <td>{user.contractAddress}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </Content>
    </>
  );
};

export { DashboardWrapper };
