
const network = "chipnet" as ("chipnet" | "mainnet")

const connectedChain = network == "mainnet" ? "bch:bitcoincash" : "bch:bchtest";
const requiredNamespaces = {
  bch: {
    chains: [connectedChain],
    methods: ['bch_getAddresses', 'bch_signTransaction', 'bch_signMessage'],
    events: ['addressesChanged'],
  },
};

// Wallet Connect Metadata
// todo: change metadata
const wcMetadata = {
  name: 'BCH Hodl Dapp Ander',
  description: 'Timelock your Bitcoin Cash',
  url: 'https://bchanderh.netlify.app/',
  icons: ['https://bchanderh.netlify.app/favicon.svg']
};

// todo: change cashninjas project id
const projectId = "74499b23e341e0e34d6bd4e9679ae3f1";

const wcModalConfig = {
  projectId: projectId,
  themeMode: 'dark' as 'dark',
  themeVariables: {
    '--wcm-background-color': '#20c8f9',
    '--wcm-accent-color': '#20c8f9',
  },
  explorerExcludedWalletIds: 'ALL' as 'ALL'
}

const chaingraphUrl = 'https://gql.chaingraph.pat.mn/v1/graphql'

export { projectId, network, connectedChain, requiredNamespaces, wcMetadata, wcModalConfig, chaingraphUrl };
