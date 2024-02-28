import { createRoot } from 'react-dom/client';
// Axios
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// Apps
import { MetronicI18nProvider } from './_metronic/i18n/Metronici18n';
import './_metronic/assets/sass/style.react.scss';
import './_metronic/assets/fonticon/fonticon.css';
import './_metronic/assets/keenicons/duotone/style.css';
import './_metronic/assets/keenicons/outline/style.css';
import './_metronic/assets/keenicons/solid/style.css';
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/style.scss';
import { AppRoutes } from './app/routing/AppRoutes';
import { AuthProvider, setupAxios } from './app/modules/auth';
import { ThirdwebProvider, coinbaseWallet, metamaskWallet, walletConnect } from '@thirdweb-dev/react';
import { APP_MODE, MIRAI_CHAIN_MAINNET, MIRAI_CHAIN_TESTNET } from './app/constants';
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios);
Chart.register(...registerables);

const queryClient = new QueryClient();
const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <ThirdwebProvider
      autoSwitch
      autoConnect
      activeChain={
        import.meta.env.VITE_APP_MODE === APP_MODE.PRODUCTION
          ? MIRAI_CHAIN_MAINNET.chainId
          : MIRAI_CHAIN_TESTNET.chainId
      }
      supportedChains={[MIRAI_CHAIN_MAINNET, MIRAI_CHAIN_TESTNET]}
      dAppMeta={{
        name: 'CMS',
        description: 'CMS Descriptions',
        // logoUrl: '',
        url: 'CMS URL',
      }}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect({
          projectId: 'd816c67acf1e7e3b33de203cb14eb327',
        }),
      ]}
      clientId="bec5ca43d7af4d6fa9556604aaf3ebd1"
      // activeChain="ethereum"
      // clientId="your-client-id"
    >
      <QueryClientProvider client={queryClient}>
        <MetronicI18nProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </MetronicI18nProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThirdwebProvider>,
  );
}
