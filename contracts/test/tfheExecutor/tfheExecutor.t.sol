// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {UnsafeUpgrades} from "@openzeppelin/foundry-upgrades/src/Upgrades.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {MessageHashUtils} from "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol";

import {TFHEExecutorNoEvents} from "../../contracts/TFHEExecutorNoEvents.sol";
import {EmptyUUPSProxy} from "../../contracts/emptyProxy/EmptyUUPSProxy.sol";

contract TFHEExecutorTest is Test {
    TFHEExecutorNoEvents internal tfheExecutor;

    address internal constant owner = address(456);

    address internal proxy;
    address internal implementation;

    /**
     * @dev Internal function to deploy a UUPS proxy contract.
     * The proxy is deployed using the UnsafeUpgrades library and initialized with the owner address.
     */
    function _deployProxy() internal {
        proxy = UnsafeUpgrades.deployUUPSProxy(
            address(new EmptyUUPSProxy()),
            abi.encodeCall(EmptyUUPSProxy.initialize, owner)
        );
    }

    /**
     * @dev Internal function to upgrade the deployed proxy to a new implementation.
     * The new implementation is an instance of the TFHEExecutorNoEvents contract.
     * The proxy is upgraded using the UnsafeUpgrades library and the owner address.
     */
    function _upgradeProxy() internal {
        implementation = address(new TFHEExecutorNoEvents());
        UnsafeUpgrades.upgradeProxy(proxy, implementation, "", owner);
        tfheExecutor = TFHEExecutorNoEvents(proxy);
    }

    /**
     * @dev Public function to set up the test environment.
     * This function deploys the proxy, upgrades it to the TFHEExecutorNoEvents implementation.
     */
    function setUp() public {
        _deployProxy();
        _upgradeProxy();
    }
}
