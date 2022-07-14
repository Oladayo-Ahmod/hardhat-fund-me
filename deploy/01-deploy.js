module.exports = async ({getNamedAccounts,deployments})=>{
    const {deploy,logs} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId

    const Fundme = await deploy("FundMe",{
        from : deployer,
        args : [],
        log : true
    });
}