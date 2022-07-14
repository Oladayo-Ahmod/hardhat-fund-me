const {network} = require("hardhat")
const {networkConfig} = require("../hardhat-helper-config")

module.exports = async ({getNamedAccounts,deployments})=>{
    const {deploy,logs} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId

}