import { useDisconnect } from '@thirdweb-dev/react';
import { useEffect } from 'react';
import { Navigate, Routes } from 'react-router-dom';

export function Logout() {
  const disconnect = useDisconnect();

  useEffect(() => {
    disconnect();
    document.location.reload();
  }, [disconnect]);

  return (
    <Routes>
      <Navigate to="/auth/login" />
    </Routes>
  );
}
