export enum APP_MODE {
  DEVELOPMENT = 'dev',
  PRODUCTION = 'prod',
  STAGING = 'stag',
}

export enum MIRAI_CHAIN_ID {
  MAINNET = 2718,
  TESTNET = 2195,
}

export enum CONNECT_STATUS {
  UNKNOWN = 'unknown',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
}

export const RPC_MAINNET = 'https://rpc1.miraichain.io';
export const RPC_TESTNET = 'https://rpc1-testnet.miraichain.io';

export const MIRAI_CHAIN_TESTNET = {
  chainId: MIRAI_CHAIN_ID.TESTNET,
  rpc: [RPC_TESTNET],
  nativeCurrency: {
    decimals: 18,
    name: 'Pegaxy',
    symbol: 'PGX',
  },
  shortName: 'Mirai Testnet',
  slug: 'mirai-testnet',
  testnet: true,
  chain: 'Mirai Chain Testnet',
  name: 'Mirai Chain Testnet',
  icon: {
    'url': 'https://mirai-labs.sgp1.cdn.digitaloceanspaces.com/miraichain/Mirai_Chain_fillline.svg',
    'width': 512,
    'height': 512,
    'format': 'svg',
  },
  explorers: [
    {
      'name': 'MiraiScan Testnet',
      'url': 'https://testnet.miraiscan.io',
      'standard': 'MRC20',
      'icon': {
        'url': 'https://mirai-labs.sgp1.cdn.digitaloceanspaces.com/miraichain/Mirai_Chain_fillline.svg',
        'width': 512,
        'height': 512,
        'format': 'svg',
      },
    },
  ],
};

export const MIRAI_CHAIN_MAINNET = {
  chainId: MIRAI_CHAIN_ID.MAINNET,
  rpc: [RPC_MAINNET],
  nativeCurrency: {
    decimals: 18,
    name: 'Pegaxy',
    symbol: 'PGX',
  },
  shortName: 'Mirai Mainnet',
  slug: 'mirai-mainnet',
  testnet: false,
  chain: 'Mirai Chain Mainnet',
  name: 'Mirai Chain Mainnet',
  icon: {
    'url': 'https://mirai-labs.sgp1.cdn.digitaloceanspaces.com/miraichain/Mirai_Chain_fillline.svg',
    'width': 512,
    'height': 512,
    'format': 'svg',
  },
  explorers: [
    {
      'name': 'MiraiScan',
      'url': 'https://miraiscan.io/',
      'standard': 'MRC20',
      'icon': {
        'url': 'https://mirai-labs.sgp1.cdn.digitaloceanspaces.com/miraichain/Mirai_Chain_fillline.svg',
        'width': 512,
        'height': 512,
        'format': 'svg',
      },
    },
  ],
};
