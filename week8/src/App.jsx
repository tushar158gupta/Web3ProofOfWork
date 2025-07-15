// import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Requestairdrop from './Requestairdrop';
import Senttoother from './Senttoother';
import Getuserbalance from './Getuserbalance';

export const App = () => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    // const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // const wallets = useMemo(
    //     () => [
    //         /**
    //          * Wallets that implement either of these standards will be available automatically.
    //          *
    //          *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
    //          *     (https://github.com/solana-mobile/mobile-wallet-adapter)
    //          *   - Solana Wallet Standard
    //          *     (https://github.com/anza-xyz/wallet-standard)
    //          *
    //          * If you wish to support a wallet that supports neither of those standards,
    //          * instantiate its legacy wallet adapter here. Common legacy adapters can be found
    //          * in the npm package `@solana/wallet-adapter-wallets`.
    //          */
    //         new UnsafeBurnerWalletAdapter(),
    //     ],
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     [network]
    // );

    return (
        // <ConnectionProvider endpoint={endpoint}>
        <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            {/* <WalletProvider wallets={wallets} autoConnect> */}
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    <Requestairdrop/>
                    <Getuserbalance/>
                    <Senttoother/>
                    
                    
                    
                    
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;