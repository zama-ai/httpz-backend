// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.24;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {Ownable2StepUpgradeable} from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";
import {tfheExecutorAdd} from "../addresses/TFHEExecutorAddress.sol";

/**
 * @title  FHEGasLimit
 * @notice This contract manages the amount of gas to be paid for FHE operations.
 */
contract FHEGasLimit is UUPSUpgradeable, Ownable2StepUpgradeable {
    /// @notice Returned if the sender is not the TFHEExecutor.
    error CallerMustBeTFHEExecutorContract();

    /// @notice Returned if the block limit is higher than limit for FHE operation.
    error FHEGasBlockLimitExceeded();

    /// @notice Returned if the operation is not supported.
    error UnsupportedOperation();

    /// @notice Returned if the operation is not scalar.
    error OnlyScalarOperationsAreSupported();

    /// @notice Name of the contract.
    string private constant CONTRACT_NAME = "FHEGasLimit";

    /// @notice Major version of the contract.
    uint256 private constant MAJOR_VERSION = 0;

    /// @notice Minor version of the contract.
    uint256 private constant MINOR_VERSION = 1;

    /// @notice Patch version of the contract.
    uint256 private constant PATCH_VERSION = 0;

    /// @notice TFHEExecutor address.
    address private constant tfheExecutorAddress = tfheExecutorAdd;

    /// @notice Gas block limit for FHEGas operation.
    uint256 private constant FHE_GAS_BLOCKLIMIT = 10_000_000;

    /// @custom:storage-location erc7201:fhevm.storage.FHEGasLimit
    struct FHEGasLimitStorage {
        uint256 lastBlock;
        uint256 currentBlockConsumption;
    }

    /// @dev keccak256(abi.encode(uint256(keccak256("fhevm.storage.FHEGasLimit")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 private constant FHEGasLimitStorageLocation =
        0xb5c80b3bbe0bcbcea690f6dbe62b32a45bd1ad263b78db2f25ef8414efe9bc00;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /**
     * @notice              Computes the gas required for FheAdd.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheAdd(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(65000);
            } else if (resultType == 2) {
                _updateFunding(94000);
            } else if (resultType == 3) {
                _updateFunding(133000);
            } else if (resultType == 4) {
                _updateFunding(162000);
            } else if (resultType == 5) {
                _updateFunding(188000);
            } else if (resultType == 6) {
                _updateFunding(218000);
            } else if (resultType == 8) {
                _updateFunding(253000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(65000);
            } else if (resultType == 2) {
                _updateFunding(94000);
            } else if (resultType == 3) {
                _updateFunding(133000);
            } else if (resultType == 4) {
                _updateFunding(162000);
            } else if (resultType == 5) {
                _updateFunding(188000);
            } else if (resultType == 6) {
                _updateFunding(218000);
            } else if (resultType == 8) {
                _updateFunding(253000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheSub.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheSub(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(65000);
            } else if (resultType == 2) {
                _updateFunding(94000);
            } else if (resultType == 3) {
                _updateFunding(133000);
            } else if (resultType == 4) {
                _updateFunding(162000);
            } else if (resultType == 5) {
                _updateFunding(188000);
            } else if (resultType == 6) {
                _updateFunding(218000);
            } else if (resultType == 8) {
                _updateFunding(253000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(65000);
            } else if (resultType == 2) {
                _updateFunding(94000);
            } else if (resultType == 3) {
                _updateFunding(133000);
            } else if (resultType == 4) {
                _updateFunding(162000);
            } else if (resultType == 5) {
                _updateFunding(188000);
            } else if (resultType == 6) {
                _updateFunding(218000);
            } else if (resultType == 8) {
                _updateFunding(253000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheMul.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheMul(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(88000);
            } else if (resultType == 2) {
                _updateFunding(159000);
            } else if (resultType == 3) {
                _updateFunding(208000);
            } else if (resultType == 4) {
                _updateFunding(264000);
            } else if (resultType == 5) {
                _updateFunding(356000);
            } else if (resultType == 6) {
                _updateFunding(480000);
            } else if (resultType == 8) {
                _updateFunding(647000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(150000);
            } else if (resultType == 2) {
                _updateFunding(197000);
            } else if (resultType == 3) {
                _updateFunding(262000);
            } else if (resultType == 4) {
                _updateFunding(359000);
            } else if (resultType == 5) {
                _updateFunding(641000);
            } else if (resultType == 6) {
                _updateFunding(1145000);
            } else if (resultType == 8) {
                _updateFunding(2045000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheDiv.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheDiv(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte != 0x01) revert OnlyScalarOperationsAreSupported();
        if (resultType == 1) {
            _updateFunding(139000);
        } else if (resultType == 2) {
            _updateFunding(238000);
        } else if (resultType == 3) {
            _updateFunding(314000);
        } else if (resultType == 4) {
            _updateFunding(398000);
        } else if (resultType == 5) {
            _updateFunding(584000);
        } else if (resultType == 6) {
            _updateFunding(857000);
        } else if (resultType == 8) {
            _updateFunding(1258000);
        } else {
            revert UnsupportedOperation();
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheRem.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheRem(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte != 0x01) revert OnlyScalarOperationsAreSupported();
        if (resultType == 1) {
            _updateFunding(286000);
        } else if (resultType == 2) {
            _updateFunding(460000);
        } else if (resultType == 3) {
            _updateFunding(622000);
        } else if (resultType == 4) {
            _updateFunding(805000);
        } else if (resultType == 5) {
            _updateFunding(1095000);
        } else if (resultType == 6) {
            _updateFunding(1499000);
        } else if (resultType == 8) {
            _updateFunding(2052000);
        } else {
            revert UnsupportedOperation();
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheBitAnd.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheBitAnd(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 0) {
                _updateFunding(26000);
            } else if (resultType == 1) {
                _updateFunding(32000);
            } else if (resultType == 2) {
                _updateFunding(34000);
            } else if (resultType == 3) {
                _updateFunding(34000);
            } else if (resultType == 4) {
                _updateFunding(35000);
            } else if (resultType == 5) {
                _updateFunding(38000);
            } else if (resultType == 6) {
                _updateFunding(41000);
            } else if (resultType == 8) {
                _updateFunding(44000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 0) {
                _updateFunding(26000);
            } else if (resultType == 1) {
                _updateFunding(32000);
            } else if (resultType == 2) {
                _updateFunding(34000);
            } else if (resultType == 3) {
                _updateFunding(34000);
            } else if (resultType == 4) {
                _updateFunding(35000);
            } else if (resultType == 5) {
                _updateFunding(38000);
            } else if (resultType == 6) {
                _updateFunding(41000);
            } else if (resultType == 8) {
                _updateFunding(44000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheBitOr.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheBitOr(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 0) {
                _updateFunding(26000);
            } else if (resultType == 1) {
                _updateFunding(32000);
            } else if (resultType == 2) {
                _updateFunding(34000);
            } else if (resultType == 3) {
                _updateFunding(34000);
            } else if (resultType == 4) {
                _updateFunding(35000);
            } else if (resultType == 5) {
                _updateFunding(38000);
            } else if (resultType == 6) {
                _updateFunding(41000);
            } else if (resultType == 8) {
                _updateFunding(44000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 0) {
                _updateFunding(26000);
            } else if (resultType == 1) {
                _updateFunding(32000);
            } else if (resultType == 2) {
                _updateFunding(34000);
            } else if (resultType == 3) {
                _updateFunding(34000);
            } else if (resultType == 4) {
                _updateFunding(35000);
            } else if (resultType == 5) {
                _updateFunding(38000);
            } else if (resultType == 6) {
                _updateFunding(41000);
            } else if (resultType == 8) {
                _updateFunding(44000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheBitXor.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheBitXor(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 0) {
                _updateFunding(26000);
            } else if (resultType == 1) {
                _updateFunding(32000);
            } else if (resultType == 2) {
                _updateFunding(34000);
            } else if (resultType == 3) {
                _updateFunding(34000);
            } else if (resultType == 4) {
                _updateFunding(35000);
            } else if (resultType == 5) {
                _updateFunding(38000);
            } else if (resultType == 6) {
                _updateFunding(41000);
            } else if (resultType == 8) {
                _updateFunding(44000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 0) {
                _updateFunding(26000);
            } else if (resultType == 1) {
                _updateFunding(32000);
            } else if (resultType == 2) {
                _updateFunding(34000);
            } else if (resultType == 3) {
                _updateFunding(34000);
            } else if (resultType == 4) {
                _updateFunding(35000);
            } else if (resultType == 5) {
                _updateFunding(38000);
            } else if (resultType == 6) {
                _updateFunding(41000);
            } else if (resultType == 8) {
                _updateFunding(44000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheShl.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheShl(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(35000);
            } else if (resultType == 2) {
                _updateFunding(35000);
            } else if (resultType == 3) {
                _updateFunding(35000);
            } else if (resultType == 4) {
                _updateFunding(35000);
            } else if (resultType == 5) {
                _updateFunding(38000);
            } else if (resultType == 6) {
                _updateFunding(41000);
            } else if (resultType == 8) {
                _updateFunding(44000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(116000);
            } else if (resultType == 2) {
                _updateFunding(133000);
            } else if (resultType == 3) {
                _updateFunding(153000);
            } else if (resultType == 4) {
                _updateFunding(183000);
            } else if (resultType == 5) {
                _updateFunding(227000);
            } else if (resultType == 6) {
                _updateFunding(282000);
            } else if (resultType == 8) {
                _updateFunding(350000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheShr.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheShr(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(35000);
            } else if (resultType == 2) {
                _updateFunding(35000);
            } else if (resultType == 3) {
                _updateFunding(35000);
            } else if (resultType == 4) {
                _updateFunding(35000);
            } else if (resultType == 5) {
                _updateFunding(38000);
            } else if (resultType == 6) {
                _updateFunding(41000);
            } else if (resultType == 8) {
                _updateFunding(44000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(116000);
            } else if (resultType == 2) {
                _updateFunding(133000);
            } else if (resultType == 3) {
                _updateFunding(153000);
            } else if (resultType == 4) {
                _updateFunding(183000);
            } else if (resultType == 5) {
                _updateFunding(227000);
            } else if (resultType == 6) {
                _updateFunding(282000);
            } else if (resultType == 8) {
                _updateFunding(350000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheRotl.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheRotl(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(35000);
            } else if (resultType == 2) {
                _updateFunding(35000);
            } else if (resultType == 3) {
                _updateFunding(35000);
            } else if (resultType == 4) {
                _updateFunding(35000);
            } else if (resultType == 5) {
                _updateFunding(38000);
            } else if (resultType == 6) {
                _updateFunding(41000);
            } else if (resultType == 8) {
                _updateFunding(44000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(116000);
            } else if (resultType == 2) {
                _updateFunding(133000);
            } else if (resultType == 3) {
                _updateFunding(153000);
            } else if (resultType == 4) {
                _updateFunding(183000);
            } else if (resultType == 5) {
                _updateFunding(227000);
            } else if (resultType == 6) {
                _updateFunding(282000);
            } else if (resultType == 8) {
                _updateFunding(350000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheRotr.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheRotr(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(35000);
            } else if (resultType == 2) {
                _updateFunding(35000);
            } else if (resultType == 3) {
                _updateFunding(35000);
            } else if (resultType == 4) {
                _updateFunding(35000);
            } else if (resultType == 5) {
                _updateFunding(38000);
            } else if (resultType == 6) {
                _updateFunding(41000);
            } else if (resultType == 8) {
                _updateFunding(44000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(116000);
            } else if (resultType == 2) {
                _updateFunding(133000);
            } else if (resultType == 3) {
                _updateFunding(153000);
            } else if (resultType == 4) {
                _updateFunding(183000);
            } else if (resultType == 5) {
                _updateFunding(227000);
            } else if (resultType == 6) {
                _updateFunding(282000);
            } else if (resultType == 8) {
                _updateFunding(350000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheEq.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheEq(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 0) {
                _updateFunding(49000);
            } else if (resultType == 1) {
                _updateFunding(51000);
            } else if (resultType == 2) {
                _updateFunding(53000);
            } else if (resultType == 3) {
                _updateFunding(54000);
            } else if (resultType == 4) {
                _updateFunding(82000);
            } else if (resultType == 5) {
                _updateFunding(86000);
            } else if (resultType == 6) {
                _updateFunding(88000);
            } else if (resultType == 7) {
                _updateFunding(90000);
            } else if (resultType == 8) {
                _updateFunding(100000);
            } else if (resultType == 9) {
                _updateFunding(150000);
            } else if (resultType == 10) {
                _updateFunding(200000);
            } else if (resultType == 11) {
                _updateFunding(300000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 0) {
                _updateFunding(49000);
            } else if (resultType == 1) {
                _updateFunding(51000);
            } else if (resultType == 2) {
                _updateFunding(53000);
            } else if (resultType == 3) {
                _updateFunding(54000);
            } else if (resultType == 4) {
                _updateFunding(82000);
            } else if (resultType == 5) {
                _updateFunding(86000);
            } else if (resultType == 6) {
                _updateFunding(88000);
            } else if (resultType == 7) {
                _updateFunding(90000);
            } else if (resultType == 8) {
                _updateFunding(100000);
            } else if (resultType == 9) {
                _updateFunding(150000);
            } else if (resultType == 10) {
                _updateFunding(200000);
            } else if (resultType == 11) {
                _updateFunding(300000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheNe.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheNe(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 0) {
                _updateFunding(49000);
            } else if (resultType == 1) {
                _updateFunding(51000);
            } else if (resultType == 2) {
                _updateFunding(53000);
            } else if (resultType == 3) {
                _updateFunding(54000);
            } else if (resultType == 4) {
                _updateFunding(82000);
            } else if (resultType == 5) {
                _updateFunding(86000);
            } else if (resultType == 6) {
                _updateFunding(88000);
            } else if (resultType == 7) {
                _updateFunding(90000);
            } else if (resultType == 8) {
                _updateFunding(100000);
            } else if (resultType == 9) {
                _updateFunding(150000);
            } else if (resultType == 10) {
                _updateFunding(200000);
            } else if (resultType == 11) {
                _updateFunding(300000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 0) {
                _updateFunding(49000);
            } else if (resultType == 1) {
                _updateFunding(51000);
            } else if (resultType == 2) {
                _updateFunding(53000);
            } else if (resultType == 3) {
                _updateFunding(54000);
            } else if (resultType == 4) {
                _updateFunding(82000);
            } else if (resultType == 5) {
                _updateFunding(86000);
            } else if (resultType == 6) {
                _updateFunding(88000);
            } else if (resultType == 7) {
                _updateFunding(90000);
            } else if (resultType == 8) {
                _updateFunding(100000);
            } else if (resultType == 9) {
                _updateFunding(150000);
            } else if (resultType == 10) {
                _updateFunding(200000);
            } else if (resultType == 11) {
                _updateFunding(300000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheGe.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheGe(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(70000);
            } else if (resultType == 2) {
                _updateFunding(82000);
            } else if (resultType == 3) {
                _updateFunding(105000);
            } else if (resultType == 4) {
                _updateFunding(128000);
            } else if (resultType == 5) {
                _updateFunding(156000);
            } else if (resultType == 6) {
                _updateFunding(190000);
            } else if (resultType == 8) {
                _updateFunding(231000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(70000);
            } else if (resultType == 2) {
                _updateFunding(82000);
            } else if (resultType == 3) {
                _updateFunding(105000);
            } else if (resultType == 4) {
                _updateFunding(128000);
            } else if (resultType == 5) {
                _updateFunding(156000);
            } else if (resultType == 6) {
                _updateFunding(190000);
            } else if (resultType == 8) {
                _updateFunding(231000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheGt.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheGt(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(70000);
            } else if (resultType == 2) {
                _updateFunding(82000);
            } else if (resultType == 3) {
                _updateFunding(105000);
            } else if (resultType == 4) {
                _updateFunding(128000);
            } else if (resultType == 5) {
                _updateFunding(156000);
            } else if (resultType == 6) {
                _updateFunding(190000);
            } else if (resultType == 8) {
                _updateFunding(231000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(70000);
            } else if (resultType == 2) {
                _updateFunding(82000);
            } else if (resultType == 3) {
                _updateFunding(105000);
            } else if (resultType == 4) {
                _updateFunding(128000);
            } else if (resultType == 5) {
                _updateFunding(156000);
            } else if (resultType == 6) {
                _updateFunding(190000);
            } else if (resultType == 8) {
                _updateFunding(231000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheLe.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheLe(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(70000);
            } else if (resultType == 2) {
                _updateFunding(82000);
            } else if (resultType == 3) {
                _updateFunding(105000);
            } else if (resultType == 4) {
                _updateFunding(128000);
            } else if (resultType == 5) {
                _updateFunding(156000);
            } else if (resultType == 6) {
                _updateFunding(190000);
            } else if (resultType == 8) {
                _updateFunding(231000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(70000);
            } else if (resultType == 2) {
                _updateFunding(82000);
            } else if (resultType == 3) {
                _updateFunding(105000);
            } else if (resultType == 4) {
                _updateFunding(128000);
            } else if (resultType == 5) {
                _updateFunding(156000);
            } else if (resultType == 6) {
                _updateFunding(190000);
            } else if (resultType == 8) {
                _updateFunding(231000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheLt.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheLt(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(70000);
            } else if (resultType == 2) {
                _updateFunding(82000);
            } else if (resultType == 3) {
                _updateFunding(105000);
            } else if (resultType == 4) {
                _updateFunding(128000);
            } else if (resultType == 5) {
                _updateFunding(156000);
            } else if (resultType == 6) {
                _updateFunding(190000);
            } else if (resultType == 8) {
                _updateFunding(231000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(70000);
            } else if (resultType == 2) {
                _updateFunding(82000);
            } else if (resultType == 3) {
                _updateFunding(105000);
            } else if (resultType == 4) {
                _updateFunding(128000);
            } else if (resultType == 5) {
                _updateFunding(156000);
            } else if (resultType == 6) {
                _updateFunding(190000);
            } else if (resultType == 8) {
                _updateFunding(231000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheMin.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheMin(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(121000);
            } else if (resultType == 2) {
                _updateFunding(128000);
            } else if (resultType == 3) {
                _updateFunding(150000);
            } else if (resultType == 4) {
                _updateFunding(164000);
            } else if (resultType == 5) {
                _updateFunding(192000);
            } else if (resultType == 6) {
                _updateFunding(225000);
            } else if (resultType == 8) {
                _updateFunding(264000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(121000);
            } else if (resultType == 2) {
                _updateFunding(128000);
            } else if (resultType == 3) {
                _updateFunding(153000);
            } else if (resultType == 4) {
                _updateFunding(183000);
            } else if (resultType == 5) {
                _updateFunding(210000);
            } else if (resultType == 6) {
                _updateFunding(241000);
            } else if (resultType == 8) {
                _updateFunding(277000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheMax.
     * @param resultType    Result type.
     * @param scalarByte    Scalar byte.
     */
    function payForFheMax(uint8 resultType, bytes1 scalarByte) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (scalarByte == 0x01) {
            if (resultType == 1) {
                _updateFunding(121000);
            } else if (resultType == 2) {
                _updateFunding(128000);
            } else if (resultType == 3) {
                _updateFunding(150000);
            } else if (resultType == 4) {
                _updateFunding(164000);
            } else if (resultType == 5) {
                _updateFunding(192000);
            } else if (resultType == 6) {
                _updateFunding(225000);
            } else if (resultType == 8) {
                _updateFunding(264000);
            } else {
                revert UnsupportedOperation();
            }
        } else {
            if (resultType == 1) {
                _updateFunding(121000);
            } else if (resultType == 2) {
                _updateFunding(128000);
            } else if (resultType == 3) {
                _updateFunding(153000);
            } else if (resultType == 4) {
                _updateFunding(183000);
            } else if (resultType == 5) {
                _updateFunding(210000);
            } else if (resultType == 6) {
                _updateFunding(241000);
            } else if (resultType == 8) {
                _updateFunding(277000);
            } else {
                revert UnsupportedOperation();
            }
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheNeg.
     * @param resultType    Result type.
     */
    function payForFheNeg(uint8 resultType) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (resultType == 1) {
            _updateFunding(60000);
        } else if (resultType == 2) {
            _updateFunding(95000);
        } else if (resultType == 3) {
            _updateFunding(131000);
        } else if (resultType == 4) {
            _updateFunding(160000);
        } else if (resultType == 5) {
            _updateFunding(199000);
        } else if (resultType == 6) {
            _updateFunding(248000);
        } else if (resultType == 8) {
            _updateFunding(309000);
        } else {
            revert UnsupportedOperation();
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheNot.
     * @param resultType    Result type.
     */
    function payForFheNot(uint8 resultType) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (resultType == 0) {
            _updateFunding(30000);
        } else if (resultType == 1) {
            _updateFunding(33000);
        } else if (resultType == 2) {
            _updateFunding(34000);
        } else if (resultType == 3) {
            _updateFunding(35000);
        } else if (resultType == 4) {
            _updateFunding(36000);
        } else if (resultType == 5) {
            _updateFunding(37000);
        } else if (resultType == 6) {
            _updateFunding(38000);
        } else if (resultType == 8) {
            _updateFunding(39000);
        } else {
            revert UnsupportedOperation();
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for Cast.
     * @param resultType    Result type.
     */
    function payForCast(uint8 resultType) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (resultType == 0) {
            _updateFunding(200);
        } else if (resultType == 1) {
            _updateFunding(200);
        } else if (resultType == 2) {
            _updateFunding(200);
        } else if (resultType == 3) {
            _updateFunding(200);
        } else if (resultType == 4) {
            _updateFunding(200);
        } else if (resultType == 5) {
            _updateFunding(200);
        } else if (resultType == 6) {
            _updateFunding(200);
        } else if (resultType == 8) {
            _updateFunding(200);
        } else {
            revert UnsupportedOperation();
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for TrivialEncrypt.
     * @param resultType    Result type.
     */
    function payForTrivialEncrypt(uint8 resultType) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (resultType == 0) {
            _updateFunding(100);
        } else if (resultType == 1) {
            _updateFunding(100);
        } else if (resultType == 2) {
            _updateFunding(100);
        } else if (resultType == 3) {
            _updateFunding(200);
        } else if (resultType == 4) {
            _updateFunding(300);
        } else if (resultType == 5) {
            _updateFunding(600);
        } else if (resultType == 6) {
            _updateFunding(650);
        } else if (resultType == 7) {
            _updateFunding(700);
        } else if (resultType == 8) {
            _updateFunding(800);
        } else if (resultType == 9) {
            _updateFunding(1600);
        } else if (resultType == 10) {
            _updateFunding(3200);
        } else if (resultType == 11) {
            _updateFunding(6400);
        } else {
            revert UnsupportedOperation();
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for IfThenElse.
     * @param resultType    Result type.
     */
    function payForIfThenElse(uint8 resultType) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (resultType == 0) {
            _updateFunding(43000);
        } else if (resultType == 1) {
            _updateFunding(45000);
        } else if (resultType == 2) {
            _updateFunding(47000);
        } else if (resultType == 3) {
            _updateFunding(47000);
        } else if (resultType == 4) {
            _updateFunding(50000);
        } else if (resultType == 5) {
            _updateFunding(53000);
        } else if (resultType == 6) {
            _updateFunding(70000);
        } else if (resultType == 7) {
            _updateFunding(80000);
        } else if (resultType == 8) {
            _updateFunding(90000);
        } else if (resultType == 9) {
            _updateFunding(150000);
        } else if (resultType == 10) {
            _updateFunding(200000);
        } else if (resultType == 11) {
            _updateFunding(300000);
        } else {
            revert UnsupportedOperation();
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheRand.
     * @param resultType    Result type.
     */
    function payForFheRand(uint8 resultType) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (resultType == 0) {
            _updateFunding(100000);
        } else if (resultType == 1) {
            _updateFunding(100000);
        } else if (resultType == 2) {
            _updateFunding(100000);
        } else if (resultType == 3) {
            _updateFunding(100000);
        } else if (resultType == 4) {
            _updateFunding(100000);
        } else if (resultType == 5) {
            _updateFunding(100000);
        } else if (resultType == 6) {
            _updateFunding(100000);
        } else if (resultType == 8) {
            _updateFunding(100000);
        } else if (resultType == 9) {
            _updateFunding(200000);
        } else if (resultType == 10) {
            _updateFunding(300000);
        } else if (resultType == 11) {
            _updateFunding(400000);
        } else {
            revert UnsupportedOperation();
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice              Computes the gas required for FheRandBounded.
     * @param resultType    Result type.
     */
    function payForFheRandBounded(uint8 resultType) external virtual {
        if (msg.sender != tfheExecutorAddress) revert CallerMustBeTFHEExecutorContract();
        _checkIfNewBlock();
        if (resultType == 1) {
            _updateFunding(100000);
        } else if (resultType == 2) {
            _updateFunding(100000);
        } else if (resultType == 3) {
            _updateFunding(100000);
        } else if (resultType == 4) {
            _updateFunding(100000);
        } else if (resultType == 5) {
            _updateFunding(100000);
        } else if (resultType == 6) {
            _updateFunding(100000);
        } else if (resultType == 8) {
            _updateFunding(100000);
        } else {
            revert UnsupportedOperation();
        }
        _checkFHEGasBlockLimit();
    }

    /**
     * @notice                     Getter function for the TFHEExecutor contract address.
     * @return tfheExecutorAddress Address of the TFHEExecutor.
     */
    function getTFHEExecutorAddress() public view virtual returns (address) {
        return tfheExecutorAddress;
    }

    /**
     * @notice        Getter for the name and version of the contract.
     * @return string Name and the version of the contract.
     */
    function getVersion() external pure virtual returns (string memory) {
        return
            string(
                abi.encodePacked(
                    CONTRACT_NAME,
                    " v",
                    Strings.toString(MAJOR_VERSION),
                    ".",
                    Strings.toString(MINOR_VERSION),
                    ".",
                    Strings.toString(PATCH_VERSION)
                )
            );
    }

    /**
     * @dev Checks the accumulated FHE gas used and checks if it is inferior to the limit.
     *      If so, it reverts.
     */
    function _checkFHEGasBlockLimit() internal view virtual {
        FHEGasLimitStorage storage $ = _getFHEGasLimitStorage();
        if ($.currentBlockConsumption >= FHE_GAS_BLOCKLIMIT) revert FHEGasBlockLimitExceeded();
    }

    /**
     * @dev Checks if it is a new block. If so, it resets information for new block.
     */
    function _checkIfNewBlock() internal virtual {
        FHEGasLimitStorage storage $ = _getFHEGasLimitStorage();
        uint256 lastBlock_ = block.number;
        if (lastBlock_ > $.lastBlock) {
            $.lastBlock = lastBlock_;
            $.currentBlockConsumption = 0;
        }
    }

    /**
     * @dev                 Updates the funding.
     * @param paidAmountGas Paid amount gas.
     */
    function _updateFunding(uint256 paidAmountGas) internal virtual {
        FHEGasLimitStorage storage $ = _getFHEGasLimitStorage();
        $.currentBlockConsumption += paidAmountGas;
    }

    /**
     * @dev Should revert when msg.sender is not authorized to upgrade the contract.
     */
    function _authorizeUpgrade(address _newImplementation) internal virtual override onlyOwner {}

    /**
     * @dev  Returns the FHEGasLimit storage location.
     */
    function _getFHEGasLimitStorage() internal pure returns (FHEGasLimitStorage storage $) {
        assembly {
            $.slot := FHEGasLimitStorageLocation
        }
    }
}
