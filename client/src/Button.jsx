import React, {useContext, useEffect, useState} from 'react'
import KissanContext from './utils/KissanContext'

export default function Button() {
    
    // const [currentAccount, setCurrentAccount] = useState();
    const {getKCOContract, account} = useContext(KissanContext)
    const [balance,setBalance] = useState("--")
    const contract = getKCOContract()
    // const {ethereum} = window
    console.log(account)
    if(account){
        contract.balanceOf(account).then(e => {
            var bigAns = BigInt(e._hex);
            var divider = 1000000000000000000n;
            var ans = parseInt(bigAns/divider);
            setBalance(ans)
        })
    }
    
    // async function connectWallet(){
    //     try{
    //         if(!account) return alert('You need and account')
    //         const account = await ethereum.request({method: 'eth_requestAccounts'})
    //         console.log(account[0])
    //     }catch(e){
    //         console.error(e.message)
    //     }
    // }
    
    // async function handleChangeContract(){
    //     const contract = getKCOContract();
    //     console.log("Contract -->>>", contract)
    //     contract
    //         .balanceOf(currentAccount)
    //         .then(a=>console.log(a))
    //         .catch(e => console.error(e.message))
    //     // console.log(balance.balanceOf(address))
    // }

    return (
        <div>
            <div>
                Your Balance: {balance}
            </div>
            {/* <button onClick={handleChangeContract}>
                Contract
            </button> */}
            {!account? <button>ConnectAccount</button>:'Connected To Wallet'}
        </div>
  )
}
