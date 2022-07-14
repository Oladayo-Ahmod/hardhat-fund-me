 const {networkConfig,develomentChains} = require('../hardhat-helper-config')
 const {network} = require("hardhat")
module.exports = async ({getNamedAccounts,deployments})=>{
    const {deploy,log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId

    let ethUsdPricefeedAddress
    if (develomentChains.includes(network.name)) {
        ethUsdPricefeedAddress = await deployments.get("MockV3Aggregator").address
    }
    else{
        ethUsdPricefeedAddress = networkConfig[chainId]["ethUsdPricefeed"]
    }

    const Fundme = await deploy("FundMe",{
        from : deployer,
        args : [ethUsdPricefeedAddress],
        log : true
    });
}
module.exports.tags = ["fundme","all"]
