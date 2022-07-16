const {deployments, ethers, getNamedAccounts} = require('hardhat')
const {assert} = require('chai')

describe("FundMe", ()=>{

    let fundme, deployer, mockV3Aggregator
    beforeEach(async ()=>{
        deployer = (await getNamedAccounts()).deployer
        await deployments.fixture(["all"])
        fundme = ethers.getContract("FundMe",deployer)
        mockV3Aggregator = ethers.getContract('MockV3Aggregator',deployer)
    })
    it("it gets aggregator address correctly",async ()=>{
        const response = await fundme.priceFeed()
        assert.equal(response,mockV3Aggregator.address)
    })
})