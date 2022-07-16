const {deployments, ethers, getNamedAccounts} = require('hardhat')

describe("FundMe", ()=>{

    let fundme, deployer
    beforeEach(async ()=>{
        deployer = (await getNamedAccounts()).deployer
        await deployments.fixture(["all"])
        fundme = ethers.getContract("FundMe",deployer)
    })
})