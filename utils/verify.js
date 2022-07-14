const {run} = require("hardhat")
const {modules} = require("web3")

const verify = async function verify(contractAddress, arg){
    console.log('verifying ..')
    try {
        await run('verify:verify',{
          address : contractAddress,
          constructorArguments : arg
        })
    } catch (error) {
      console.log(error)
      if (error.toLowerCase().includes('already verified')) {
        console.log('Already verified')
      }
      else{
        console.log(error)
      }
    }
  }

  module.exports = {verify}