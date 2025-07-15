import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useState } from 'react'

const Requestairdrop = () => {
    const wallet = useWallet()
    // const con = Connection
    const {connection} = useConnection();

    const[amount , setamount] = useState();


    const handleSendSolana =()=>{
      const publickey = wallet?.publicKey
      connection.requestAirdrop(publickey , amount*LAMPORTS_PER_SOL )


    }

    const handleInputSolana=(e)=>{
      setamount(e.target.value);
      console.log(e.target.value)
    }
  return (
    <div>
        <input type="number" placeholder='how many solana' onChange={handleInputSolana} value={amount} />
        <button onClick={handleSendSolana}>
            send solana

        </button>
        {wallet?.publicKey?.toBase58()}
    
    </div>
  )
}

export default Requestairdrop