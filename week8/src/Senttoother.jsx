import { useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React, { useState } from 'react'

const Senttoother = () => {
 const [amount , setamount] = useState(0);
 const [address , setaddress] = useState("")
 const wallet = useWallet();

 const handlesendsolana = ()=>{


const transaction = new Transaction();
transaction.add(SystemProgram.transfer({
    fromPubkey:wallet?.publicKey,
    toPubkey:new PublicKey(address),
    lamports:amount*LAMPORTS_PER_SOL
}))

 }
    return (
    <div>
        <input type="number" onChange={(e)=>setamount(e.target.value)} value={amount} />
        <input type="text" onChange={(e)=>setaddress(e.target.value)} value={address} />
        <button onClick={handlesendsolana}>
            send solana to user 
        </button>

    </div>
  )
}

export default Senttoother