import { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import { PageTitle } from '../../../_metronic/layout/core';
import { ToolbarWrapper } from '../../../_metronic/layout/components/toolbar';
import { Content } from '../../../_metronic/layout/components/content';
import { WrapMRC20Upgradeable__factory } from '../../../../types';
import { useSigner } from '@thirdweb-dev/react';

const FeaturesWrapper: FC = () => {
  const intl = useIntl();
  const singer = useSigner(); 
  const [formType, setFormType] = useState("")

  const handleRadioChange = (type: string) => {
    setFormType(type);
  };

  const handleSubmit = () => {
    // Xử lý hành động dựa trên giá trị của formType
    switch (formType) {
      case 'WrapMRC20Upgradeable':
        // Xử lý khi formType là WrapMRC20Upgradeable
        break;
      case 'WrapMRC721Upgradeable':
        // Xử lý khi formType là WrapMRC721Upgradeable
        break;
      case 'initialize':
        // Xử lý khi formType là initialize
        break;
      case 'mint':
        // Xử lý khi formType là mint
        break;
      case 'supportsInterface':
        // Xử lý khi formType là supportsInterface
        break;
      default:
        // Xử lý mặc định nếu không khớp với bất kỳ giá trị nào
        break;
    }
  };
  
  const handleDeployWrapMRC20Upgradeable = async () => {
    const wrapMRC20UpgradeableFactory = new WrapMRC20Upgradeable__factory()
    // const wrapMRC20UpgradeableDeploy = await wrapMRC20UpgradeableFactory.connect(singer).deploy();

    // await wrapMRC20UpgradeableDeploy.deployTransaction.wait()
  }
  return (
      <>
        <ToolbarWrapper />
        <Content>
          <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#kt_tab_pane_1">Deploy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2">WrapMRC20Upgradeable</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3">WrapMRC721Upgradeable</a>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
              <div className="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                <div className="form-check form-check-custom form-check-solid">
                  <input className="form-check-input" type="radio" value="" id="flexRadioDefaultDeploy1" name="defaultRadio" onChange={() => handleRadioChange("WrapMRC20Upgradeable")}/>
                  <label className="form-check-label" htmlFor="flexRadioDefaultDeploy1">
                    WrapMRC20Upgradeable
                  </label>
                </div>
                <div className="form-check form-check-custom form-check-solid">
                  <input className="form-check-input" type="radio" value="" id="flexRadioDefaultDeploy2" name="defaultRadio" onChange={() => handleRadioChange("WrapMRC721Upgradeable")}/>
                  <label className="form-check-label" htmlFor="flexRadioDefaultDeploy2">
                    WrapMRC721Upgradeable
                  </label>
                </div>
              </div>
              <a href="#" className="btn btn-success hover-scale">
                Submit
              </a>
            </div>
            <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
              <div className="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                <div className="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                  <div className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" value="" id="flexRadioDefaultERC20a" name="defaultRadio2" onChange={() => handleRadioChange("initialize")}/>
                    <label className="form-check-label" htmlFor="flexRadioDefaultERC20a">
                      initialize
                    </label>
                  </div>
                  <div className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" value="" id="flexRadioDefaultERC20b" name="defaultRadio2" onChange={() => handleRadioChange("mint")}/>
                    <label className="form-check-label" htmlFor="flexRadioDefaultERC20b">
                      mint
                    </label>
                  </div>
                  <div className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" value="" id="flexRadioDefaultERC20c" name="defaultRadio2" onChange={() => handleRadioChange("burn")}/>
                    <label className="form-check-label" htmlFor="flexRadioDefaultERC20c">
                      burn
                    </label>
                  </div>
                </div>
                {
                  formType === 'initialize' ? <div className="input-group mb-5">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1" />
                  </div> : formType === 'mint' ? <div className="input-group mb-5">
                    <span className="input-group-text" id="basic-addon1">@1</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1" />
                  </div> : <div className="input-group mb-5">
                    <span className="input-group-text" id="basic-addon1">@2</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1" />
                  </div>
                }
                <a href="#" className="btn btn-success hover-scale">Submit</a>
              </div>
            </div>
            <div className="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
              <div className="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                <div className="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel">
                  <div className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" value="" id="defaultRadioERC721a" name="defaultRadio3" onChange={() => handleRadioChange("initialize")}/>
                    <label className="form-check-label" htmlFor="defaultRadioERC721a">
                      initialize
                    </label>
                  </div>
                  <div className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" value="" id="defaultRadioERC721b" name="defaultRadio3" onChange={() => handleRadioChange("mint")}/>
                    <label className="form-check-label" htmlFor="defaultRadioERC721b">
                      mint
                    </label>
                  </div>
                  <div className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="radio" value="" id="defaultRadioERC721c" name="defaultRadio3" onChange={() => handleRadioChange("supportsInterface")}/>
                    <label className="form-check-label" htmlFor="defaultRadioERC721c">
                      supportsInterface
                    </label>
                  </div>
                </div>
                {
                  formType === 'initialize' ? <div className="input-group mb-5">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1" />
                  </div> : formType === 'mint' ? <div className="input-group mb-5">
                    <span className="input-group-text" id="basic-addon1">@1</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1" />
                  </div> : <div className="input-group mb-5">
                    <span className="input-group-text" id="basic-addon1">@2</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1" />
                  </div>
                }
                <a href="#" className="btn btn-success hover-scale">Submit</a>
              </div>
            </div>
          </div>
        </Content>
      </>
  );
};

export { FeaturesWrapper };