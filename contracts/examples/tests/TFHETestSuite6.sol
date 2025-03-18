// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.24;

import "../../lib/TFHE.sol";
import "../../lib/FHEVMConfig.sol";

contract TFHETestSuite6 {
    ebool public resEbool;
    euint8 public resEuint8;
    euint16 public resEuint16;
    euint32 public resEuint32;
    euint64 public resEuint64;
    euint128 public resEuint128;
    euint256 public resEuint256;
    ebytes64 public resEbytes64;
    ebytes128 public resEbytes128;
    ebytes256 public resEbytes256;

    constructor() {
        TFHE.setFHEVM(FHEVMConfig.defaultConfig());
    }

    function ge_euint32_uint32(einput a, uint32 b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        uint32 bProc = b;
        ebool result = TFHE.ge(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function ge_uint32_euint32(uint32 a, einput b, bytes calldata inputProof) public {
        uint32 aProc = a;
        euint32 bProc = TFHE.asEuint32(b, inputProof);
        ebool result = TFHE.ge(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function gt_euint32_uint32(einput a, uint32 b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        uint32 bProc = b;
        ebool result = TFHE.gt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function gt_uint32_euint32(uint32 a, einput b, bytes calldata inputProof) public {
        uint32 aProc = a;
        euint32 bProc = TFHE.asEuint32(b, inputProof);
        ebool result = TFHE.gt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function le_euint32_uint32(einput a, uint32 b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        uint32 bProc = b;
        ebool result = TFHE.le(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function le_uint32_euint32(uint32 a, einput b, bytes calldata inputProof) public {
        uint32 aProc = a;
        euint32 bProc = TFHE.asEuint32(b, inputProof);
        ebool result = TFHE.le(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function lt_euint32_uint32(einput a, uint32 b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        uint32 bProc = b;
        ebool result = TFHE.lt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function lt_uint32_euint32(uint32 a, einput b, bytes calldata inputProof) public {
        uint32 aProc = a;
        euint32 bProc = TFHE.asEuint32(b, inputProof);
        ebool result = TFHE.lt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function min_euint32_uint32(einput a, uint32 b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        uint32 bProc = b;
        euint32 result = TFHE.min(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function min_uint32_euint32(uint32 a, einput b, bytes calldata inputProof) public {
        uint32 aProc = a;
        euint32 bProc = TFHE.asEuint32(b, inputProof);
        euint32 result = TFHE.min(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function max_euint32_uint32(einput a, uint32 b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        uint32 bProc = b;
        euint32 result = TFHE.max(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function max_uint32_euint32(uint32 a, einput b, bytes calldata inputProof) public {
        uint32 aProc = a;
        euint32 bProc = TFHE.asEuint32(b, inputProof);
        euint32 result = TFHE.max(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function add_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        euint64 result = TFHE.add(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function add_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        euint64 result = TFHE.add(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function sub_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        euint64 result = TFHE.sub(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function sub_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        euint64 result = TFHE.sub(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function mul_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        euint64 result = TFHE.mul(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function mul_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        euint64 result = TFHE.mul(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function div_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        euint64 result = TFHE.div(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function rem_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        euint64 result = TFHE.rem(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function and_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        euint64 result = TFHE.and(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function and_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        euint64 result = TFHE.and(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function or_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        euint64 result = TFHE.or(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function or_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        euint64 result = TFHE.or(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function xor_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        euint64 result = TFHE.xor(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function xor_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        euint64 result = TFHE.xor(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function eq_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        ebool result = TFHE.eq(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function eq_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        ebool result = TFHE.eq(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function ne_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        ebool result = TFHE.ne(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function ne_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        ebool result = TFHE.ne(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function ge_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        ebool result = TFHE.ge(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function ge_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        ebool result = TFHE.ge(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function gt_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        ebool result = TFHE.gt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function gt_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        ebool result = TFHE.gt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function le_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        ebool result = TFHE.le(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function le_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        ebool result = TFHE.le(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function lt_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        ebool result = TFHE.lt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function lt_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        ebool result = TFHE.lt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function min_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        euint64 result = TFHE.min(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function min_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        euint64 result = TFHE.min(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function max_euint64_uint64(einput a, uint64 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint64 bProc = b;
        euint64 result = TFHE.max(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function max_uint64_euint64(uint64 a, einput b, bytes calldata inputProof) public {
        uint64 aProc = a;
        euint64 bProc = TFHE.asEuint64(b, inputProof);
        euint64 result = TFHE.max(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function add_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        euint128 result = TFHE.add(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function add_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        euint128 result = TFHE.add(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function sub_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        euint128 result = TFHE.sub(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function sub_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        euint128 result = TFHE.sub(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function mul_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        euint128 result = TFHE.mul(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function mul_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        euint128 result = TFHE.mul(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function div_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        euint128 result = TFHE.div(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function rem_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        euint128 result = TFHE.rem(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function and_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        euint128 result = TFHE.and(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function and_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        euint128 result = TFHE.and(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function or_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        euint128 result = TFHE.or(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function or_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        euint128 result = TFHE.or(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function xor_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        euint128 result = TFHE.xor(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function xor_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        euint128 result = TFHE.xor(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function eq_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        ebool result = TFHE.eq(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function eq_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        ebool result = TFHE.eq(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function ne_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        ebool result = TFHE.ne(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function ne_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        ebool result = TFHE.ne(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function ge_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        ebool result = TFHE.ge(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function ge_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        ebool result = TFHE.ge(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function gt_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        ebool result = TFHE.gt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function gt_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        ebool result = TFHE.gt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function le_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        ebool result = TFHE.le(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function le_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        ebool result = TFHE.le(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function lt_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        ebool result = TFHE.lt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function lt_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        ebool result = TFHE.lt(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function min_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        euint128 result = TFHE.min(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function min_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        euint128 result = TFHE.min(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function max_euint128_uint128(einput a, uint128 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint128 bProc = b;
        euint128 result = TFHE.max(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function max_uint128_euint128(uint128 a, einput b, bytes calldata inputProof) public {
        uint128 aProc = a;
        euint128 bProc = TFHE.asEuint128(b, inputProof);
        euint128 result = TFHE.max(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function eq_euint256_uint256(einput a, uint256 b, bytes calldata inputProof) public {
        euint256 aProc = TFHE.asEuint256(a, inputProof);
        uint256 bProc = b;
        ebool result = TFHE.eq(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function eq_uint256_euint256(uint256 a, einput b, bytes calldata inputProof) public {
        uint256 aProc = a;
        euint256 bProc = TFHE.asEuint256(b, inputProof);
        ebool result = TFHE.eq(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function ne_euint256_uint256(einput a, uint256 b, bytes calldata inputProof) public {
        euint256 aProc = TFHE.asEuint256(a, inputProof);
        uint256 bProc = b;
        ebool result = TFHE.ne(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function ne_uint256_euint256(uint256 a, einput b, bytes calldata inputProof) public {
        uint256 aProc = a;
        euint256 bProc = TFHE.asEuint256(b, inputProof);
        ebool result = TFHE.ne(aProc, bProc);
        TFHE.allowThis(result);
        resEbool = result;
    }
    function shl_euint8_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint8 aProc = TFHE.asEuint8(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint8 result = TFHE.shl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint8 = result;
    }
    function shl_euint8_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint8 aProc = TFHE.asEuint8(a, inputProof);
        uint8 bProc = b;
        euint8 result = TFHE.shl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint8 = result;
    }
    function shr_euint8_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint8 aProc = TFHE.asEuint8(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint8 result = TFHE.shr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint8 = result;
    }
    function shr_euint8_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint8 aProc = TFHE.asEuint8(a, inputProof);
        uint8 bProc = b;
        euint8 result = TFHE.shr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint8 = result;
    }
    function rotl_euint8_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint8 aProc = TFHE.asEuint8(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint8 result = TFHE.rotl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint8 = result;
    }
    function rotl_euint8_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint8 aProc = TFHE.asEuint8(a, inputProof);
        uint8 bProc = b;
        euint8 result = TFHE.rotl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint8 = result;
    }
    function rotr_euint8_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint8 aProc = TFHE.asEuint8(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint8 result = TFHE.rotr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint8 = result;
    }
    function rotr_euint8_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint8 aProc = TFHE.asEuint8(a, inputProof);
        uint8 bProc = b;
        euint8 result = TFHE.rotr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint8 = result;
    }
    function shl_euint16_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint16 aProc = TFHE.asEuint16(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint16 result = TFHE.shl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint16 = result;
    }
    function shl_euint16_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint16 aProc = TFHE.asEuint16(a, inputProof);
        uint8 bProc = b;
        euint16 result = TFHE.shl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint16 = result;
    }
    function shr_euint16_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint16 aProc = TFHE.asEuint16(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint16 result = TFHE.shr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint16 = result;
    }
    function shr_euint16_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint16 aProc = TFHE.asEuint16(a, inputProof);
        uint8 bProc = b;
        euint16 result = TFHE.shr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint16 = result;
    }
    function rotl_euint16_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint16 aProc = TFHE.asEuint16(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint16 result = TFHE.rotl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint16 = result;
    }
    function rotl_euint16_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint16 aProc = TFHE.asEuint16(a, inputProof);
        uint8 bProc = b;
        euint16 result = TFHE.rotl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint16 = result;
    }
}
