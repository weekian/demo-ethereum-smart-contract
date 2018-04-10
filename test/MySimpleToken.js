const MySimpleToken = artifacts.require('./MySimpleToken.sol')

contract('MySimpleToken', async (accounts) => {

    it("should put 1000 coints into the first account", async() => {
        let instance = await MySimpleToken.deployed();
        let balance = await instance.balanceOf(accounts[0])
        assert.equal(balance, 1000)
    })

    it("should transfer 200 coins from the first into the second account", async () => {
        let instance = await MySimpleToken.deployed();
        let result = await instance.sendToken(accounts[1], 200)
        let account0_new_balance = await instance.balanceOf(accounts[0])
        let account1_new_balance = await instance.balanceOf(accounts[1])
        assert.equal(account1_new_balance, 200)
        assert.equal(account0_new_balance, 800)
    })

})