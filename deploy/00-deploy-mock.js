const {network} = require("hardhat")
const {develomentChains, DECIMALS, INITIAL_ANSWER} = require("../hardhat-helper-config")
module.exports = async ({getNamedAccounts,deployments})=>{
    const {deploy,log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId
    if(develomentChains.includes(network.name)){
        log("local network detected !, deploying mocks")
        await deploy("MockV3Aggregator",{
            contract : "MockV3Aggregator",
            from : deployer,
            log : true,
            args : [DECIMALS,INITIAL_ANSWER]
        })
        log('deployed successfully!')
        log('------------------BADDEST---------BLOCKCHAIN-----------DEVELOPER-------------------------------')
    }

}

module.exports.tags = ["all","mocks"]