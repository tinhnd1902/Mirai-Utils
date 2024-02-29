/* eslint-disable react-refresh/only-export-components */
import { useConnectionStatus } from '@thirdweb-dev/react';
import { Dispatch, FC, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WithChildren } from '../../../../_metronic/helpers';
import { LayoutSplashScreen } from '../../../../_metronic/layout/core';
import { CONNECT_STATUS } from '../../../constants';
import * as authHelper from './AuthHelpers';
import { AuthModel, UserModel } from './_models';

type AuthContextProps = {
  auth: AuthModel | undefined;
  saveAuth: (auth: AuthModel | undefined) => void;
  currentUser: UserModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
  logout: () => void;
};

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: FC<WithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>();
  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };

  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthInit: FC<WithChildren> = ({ children }) => {
  const navigate = useNavigate();

  const connectStatus = useConnectionStatus();
  const isUnknown = connectStatus === CONNECT_STATUS.UNKNOWN;
  const isConnecting = connectStatus === CONNECT_STATUS.CONNECTING;
  const isDisconnected = connectStatus === CONNECT_STATUS.DISCONNECTED;

  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {
    if (isUnknown || isConnecting) return;
    if (isDisconnected) {
      navigate('/auth');
    }

    setShowSplashScreen(false);
  }, [connectStatus]);

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>;
};

export { AuthInit, AuthProvider, useAuth };
