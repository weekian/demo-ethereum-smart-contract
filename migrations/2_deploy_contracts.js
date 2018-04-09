var MySimpleToken = artifacts.require("./Store.sol");

module.exports = function(deployer) {
    deployer.deploy(MySimpleToken);
};