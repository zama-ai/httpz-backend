// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.24;

import "../../lib/TFHE.sol";
import "../../lib/FHEVMConfig.sol";

contract TFHETestSuite7 {
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

    function rotr_euint16_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint16 aProc = TFHE.asEuint16(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint16 result = TFHE.rotr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint16 = result;
    }
    function rotr_euint16_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint16 aProc = TFHE.asEuint16(a, inputProof);
        uint8 bProc = b;
        euint16 result = TFHE.rotr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint16 = result;
    }
    function shl_euint32_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint32 result = TFHE.shl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function shl_euint32_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        uint8 bProc = b;
        euint32 result = TFHE.shl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function shr_euint32_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint32 result = TFHE.shr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function shr_euint32_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        uint8 bProc = b;
        euint32 result = TFHE.shr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function rotl_euint32_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint32 result = TFHE.rotl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function rotl_euint32_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        uint8 bProc = b;
        euint32 result = TFHE.rotl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function rotr_euint32_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint32 result = TFHE.rotr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function rotr_euint32_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        uint8 bProc = b;
        euint32 result = TFHE.rotr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function shl_euint64_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint64 result = TFHE.shl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function shl_euint64_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint8 bProc = b;
        euint64 result = TFHE.shl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function shr_euint64_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint64 result = TFHE.shr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function shr_euint64_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint8 bProc = b;
        euint64 result = TFHE.shr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function rotl_euint64_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint64 result = TFHE.rotl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function rotl_euint64_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint8 bProc = b;
        euint64 result = TFHE.rotl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function rotr_euint64_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint64 result = TFHE.rotr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function rotr_euint64_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        uint8 bProc = b;
        euint64 result = TFHE.rotr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function shl_euint128_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint128 result = TFHE.shl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function shl_euint128_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint8 bProc = b;
        euint128 result = TFHE.shl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function shr_euint128_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint128 result = TFHE.shr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function shr_euint128_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint8 bProc = b;
        euint128 result = TFHE.shr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function rotl_euint128_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint128 result = TFHE.rotl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function rotl_euint128_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint8 bProc = b;
        euint128 result = TFHE.rotl(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function rotr_euint128_euint8(einput a, einput b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        euint8 bProc = TFHE.asEuint8(b, inputProof);
        euint128 result = TFHE.rotr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function rotr_euint128_uint8(einput a, uint8 b, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        uint8 bProc = b;
        euint128 result = TFHE.rotr(aProc, bProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function neg_euint8(einput a, bytes calldata inputProof) public {
        euint8 aProc = TFHE.asEuint8(a, inputProof);
        euint8 result = TFHE.neg(aProc);
        TFHE.allowThis(result);
        resEuint8 = result;
    }
    function not_euint8(einput a, bytes calldata inputProof) public {
        euint8 aProc = TFHE.asEuint8(a, inputProof);
        euint8 result = TFHE.not(aProc);
        TFHE.allowThis(result);
        resEuint8 = result;
    }
    function neg_euint16(einput a, bytes calldata inputProof) public {
        euint16 aProc = TFHE.asEuint16(a, inputProof);
        euint16 result = TFHE.neg(aProc);
        TFHE.allowThis(result);
        resEuint16 = result;
    }
    function not_euint16(einput a, bytes calldata inputProof) public {
        euint16 aProc = TFHE.asEuint16(a, inputProof);
        euint16 result = TFHE.not(aProc);
        TFHE.allowThis(result);
        resEuint16 = result;
    }
    function neg_euint32(einput a, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        euint32 result = TFHE.neg(aProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function not_euint32(einput a, bytes calldata inputProof) public {
        euint32 aProc = TFHE.asEuint32(a, inputProof);
        euint32 result = TFHE.not(aProc);
        TFHE.allowThis(result);
        resEuint32 = result;
    }
    function neg_euint64(einput a, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        euint64 result = TFHE.neg(aProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function not_euint64(einput a, bytes calldata inputProof) public {
        euint64 aProc = TFHE.asEuint64(a, inputProof);
        euint64 result = TFHE.not(aProc);
        TFHE.allowThis(result);
        resEuint64 = result;
    }
    function neg_euint128(einput a, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        euint128 result = TFHE.neg(aProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
    function not_euint128(einput a, bytes calldata inputProof) public {
        euint128 aProc = TFHE.asEuint128(a, inputProof);
        euint128 result = TFHE.not(aProc);
        TFHE.allowThis(result);
        resEuint128 = result;
    }
}
