import { ConnectWallet } from '@thirdweb-dev/react';

export function Login() {
  return (
    <>
      <div className="text-center mb-11">
        <h1 className="text-gray-900 fw-bolder mb-3">Connect Wallet</h1>
        <div className="text-gray-500 fw-semibold fs-6">Please connect Admin Wallet to access Web Admin</div>
      </div>

      <div className="d-flex justify-content-center">
        <ConnectWallet theme="dark" modalSize="compact" />
      </div>
    </>
  );
}
