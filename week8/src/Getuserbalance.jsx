import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useState } from 'react'

const Getuserbalance = () => {
    const wallet = useWallet();
    const pubkey = wallet?.publicKey
    console.log(pubkey)
    const {connection} = useConnection();
    const [userbalance , setuserbalance] = useState()

    const getbal =async()=>{
        const res =  await connection.getBalance(pubkey)
       setuserbalance(res);
    }


  return (
    <div>
<button onClick={getbal}>user balance</button>
 {userbalance? userbalance/LAMPORTS_PER_SOL :0 } solana
    </div>
  )
}

export default Getuserbalance

