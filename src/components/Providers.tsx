'use client'
import React from 'react'
import { ChainProvider } from '@azuro-org/sdk'
import { ApolloProvider } from '@azuro-org/sdk/nextjs/apollo'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { polygonMumbai } from 'viem/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'


const rpcUrls: Record<number, string> = {
  [polygonMumbai.id]: 'https://polygon-mumbai-bor.publicnode.com',
}

const { chains, publicClient } = configureChains(
  [ polygonMumbai ],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: rpcUrls[chain.id],
      }),
    }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'Azuro',
  projectId: '31ade19a870abe77af74f989c73970da', // get your own project ID - https://cloud.walletconnect.com/sign-in
  chains,
})

const wagmiConfig = createConfig({
  connectors,
  publicClient,
})

export function Providers(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <ChainProvider initialChainId={polygonMumbai.id}>
          <ApolloProvider>
            {children}
          </ApolloProvider>
        </ChainProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
