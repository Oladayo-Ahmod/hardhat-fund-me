 const {networkConfig,develomentChains} = require('../hardhat-helper-config')
 const {network} = require("hardhat")
 const {verify} = require("../utils/verify")
 require("dotenv").config()
module.exports = async ({getNamedAccounts,deployments})=>{
    const {deploy,log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId
    // console.log(networkConfig)

    let ethUsdPricefeedAddress
    if (develomentChains.includes(network.name)) {
        ethUsdPricefeedAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPricefeedAddress = ethUsdPricefeedAggregator.address
    }
    else{
        ethUsdPricefeedAddress = networkConfig[chainId]["ethUsdPricefeed"]
        console.log(ethUsdPricefeedAddress)
    }
    const args = [ethUsdPricefeedAddress]
    const Fundme = await deploy("FundMe",{
        from : deployer,
        args :args,
        log : true,
        waitConfirmations : network.config.blockConfirmations || 1
    });

    if(!develomentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        await verify(Fundme.address,args)
        log('-------------------------END----------------------')
    }
}
module.exports.tags = ["all","fundme"]
