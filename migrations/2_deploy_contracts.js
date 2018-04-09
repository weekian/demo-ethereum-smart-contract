const MySimpleToken = artifacts.require("./MySimpleToken.sol");

module.exports = function(deployer) {
    deployer.deploy(MySimpleToken);
};