// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.24;

contract TFHEExecutorTest {
    event FheAdd(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheSub(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheMul(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheDiv(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheRem(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheBitAnd(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheBitOr(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheBitXor(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheShl(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheShr(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheRotl(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheRotr(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheEq(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheEqBytes(address indexed caller, uint256 lhs, bytes rhs, bytes1 scalarByte, uint256 result);
    event FheNe(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheNeBytes(address indexed caller, uint256 lhs, bytes rhs, bytes1 scalarByte, uint256 result);
    event FheGe(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheGt(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheLe(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheLt(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheMin(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheMax(address indexed caller, uint256 lhs, uint256 rhs, bytes1 scalarByte, uint256 result);
    event FheNeg(address indexed caller, uint256 ct, uint256 result);
    event FheNot(address indexed caller, uint256 ct, uint256 result);
    event VerifyCiphertext(
        address indexed caller,
        bytes32 inputHandle,
        address userAddress,
        bytes inputProof,
        bytes1 inputType,
        uint256 result
    );
    event Cast(address indexed caller, uint256 ct, bytes1 toType, uint256 result);
    event TrivialEncrypt(address indexed caller, uint256 pt, bytes1 toType, uint256 result);
    event TrivialEncryptBytes(address indexed caller, bytes pt, bytes1 toType, uint256 result);
    event FheIfThenElse(address indexed caller, uint256 control, uint256 ifTrue, uint256 ifFalse, uint256 result);
    event FheRand(address indexed caller, bytes1 randType, bytes16 seed, uint256 result);
    event FheRandBounded(address indexed caller, uint256 upperBound, bytes1 randType, bytes16 seed, uint256 result);

    function fheAdd(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheAdd", lhs, rhs, scalarByte)));
        emit FheAdd(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheSub(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheSub", lhs, rhs, scalarByte)));
        emit FheSub(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheMul(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheMul", lhs, rhs, scalarByte)));
        emit FheMul(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheDiv(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheDiv", lhs, rhs, scalarByte)));
        emit FheDiv(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheRem(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheRem", lhs, rhs, scalarByte)));
        emit FheRem(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheBitAnd(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheBitAnd", lhs, rhs, scalarByte)));
        emit FheBitAnd(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheBitOr(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheBitOr", lhs, rhs, scalarByte)));
        emit FheBitOr(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheBitXor(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheBitXor", lhs, rhs, scalarByte)));
        emit FheBitXor(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheShl(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheShl", lhs, rhs, scalarByte)));
        emit FheShl(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheShr(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheShr", lhs, rhs, scalarByte)));
        emit FheShr(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheRotl(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheRotl", lhs, rhs, scalarByte)));
        emit FheRotl(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheRotr(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheRotr", lhs, rhs, scalarByte)));
        emit FheRotr(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheEq(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheEq", lhs, rhs, scalarByte)));
        emit FheEq(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheEq(uint256 lhs, bytes memory rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheEqBytes", lhs, rhs, scalarByte)));
        emit FheEqBytes(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheNe(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheNe", lhs, rhs, scalarByte)));
        emit FheNe(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheNe(uint256 lhs, bytes memory rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheNeBytes", lhs, rhs, scalarByte)));
        emit FheNeBytes(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheGe(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheGe", lhs, rhs, scalarByte)));
        emit FheGe(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheGt(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheGt", lhs, rhs, scalarByte)));
        emit FheGt(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheLe(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheLe", lhs, rhs, scalarByte)));
        emit FheLe(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheLt(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheLt", lhs, rhs, scalarByte)));
        emit FheLt(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheMin(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheMin", lhs, rhs, scalarByte)));
        emit FheMin(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheMax(uint256 lhs, uint256 rhs, bytes1 scalarByte) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheMax", lhs, rhs, scalarByte)));
        emit FheMax(msg.sender, lhs, rhs, scalarByte, result);
    }
    function fheNeg(uint256 ct) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheNeg", ct)));
        emit FheNeg(msg.sender, ct, result);
    }
    function fheNot(uint256 ct) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheNot", ct)));
        emit FheNot(msg.sender, ct, result);
    }
    function fheIfThenElse(uint256 control, uint256 ifTrue, uint256 ifFalse) public {
        uint256 result = uint256(keccak256(abi.encodePacked("fheIfThenElse", control, ifTrue, ifFalse)));
        emit FheIfThenElse(msg.sender, control, ifTrue, ifFalse, result);
    }
    function fheRand(bytes1 randType) public {
        bytes16 seed = bytes16(keccak256(abi.encodePacked(block.timestamp)));
        uint256 result = uint256(keccak256(abi.encodePacked("fheRand", randType, seed)));
        emit FheRand(msg.sender, randType, seed, result);
    }
    function fheRandBounded(uint256 upperBound, bytes1 randType) public {
        bytes16 seed = bytes16(keccak256(abi.encodePacked(block.timestamp)));
        uint256 result = uint256(keccak256(abi.encodePacked("fheRandBounded", upperBound, randType, seed)));
        emit FheRandBounded(msg.sender, upperBound, randType, seed, result);
    }
    function cast(uint256 ct, bytes1 toType) public {
        uint256 result = uint256(keccak256(abi.encodePacked("cast", ct, toType)));
        emit Cast(msg.sender, ct, toType, result);
    }

    function trivialEncrypt(uint256 pt, bytes1 toType) public {
        uint256 result = uint256(keccak256(abi.encodePacked("trivialEncrypt", pt, toType)));
        emit TrivialEncrypt(msg.sender, pt, toType, result);
    }

    function trivialEncrypt(bytes memory pt, bytes1 toType) public {
        uint256 result = uint256(keccak256(abi.encodePacked("trivialEncryptBytes", pt, toType)));
        emit TrivialEncryptBytes(msg.sender, pt, toType, result);
    }

    function verifyCiphertext(
        bytes32 inputHandle,
        address userAddress,
        bytes memory inputProof,
        bytes1 inputType
    ) public {
        uint256 result = uint256(keccak256(abi.encodePacked("verifyCiphertext", inputHandle, userAddress, inputProof, inputType)));
        emit VerifyCiphertext(msg.sender, inputHandle, userAddress, inputProof, inputType, result);
    }
}
