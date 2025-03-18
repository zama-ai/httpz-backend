import { expect } from 'chai';
import { ethers } from 'hardhat';

import type { TFHETestSuite1 } from '../../types/contracts/tests/TFHETestSuite1';
import type { TFHETestSuite2 } from '../../types/contracts/tests/TFHETestSuite2';
import type { TFHETestSuite3 } from '../../types/contracts/tests/TFHETestSuite3';
import type { TFHETestSuite4 } from '../../types/contracts/tests/TFHETestSuite4';
import type { TFHETestSuite5 } from '../../types/contracts/tests/TFHETestSuite5';
import type { TFHETestSuite6 } from '../../types/contracts/tests/TFHETestSuite6';
import type { TFHETestSuite7 } from '../../types/contracts/tests/TFHETestSuite7';
import {
  createInstances,
  decrypt8,
  decrypt16,
  decrypt32,
  decrypt64,
  decrypt128,
  decrypt256,
  decryptBool,
} from '../instance';
import { getSigners, initSigners } from '../signers';

async function deployTfheTestFixture1(): Promise<TFHETestSuite1> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TFHETestSuite1');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployTfheTestFixture2(): Promise<TFHETestSuite2> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TFHETestSuite2');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployTfheTestFixture3(): Promise<TFHETestSuite3> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TFHETestSuite3');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployTfheTestFixture4(): Promise<TFHETestSuite4> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TFHETestSuite4');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployTfheTestFixture5(): Promise<TFHETestSuite5> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TFHETestSuite5');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployTfheTestFixture6(): Promise<TFHETestSuite6> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TFHETestSuite6');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

async function deployTfheTestFixture7(): Promise<TFHETestSuite7> {
  const signers = await getSigners();
  const admin = signers.alice;

  const contractFactory = await ethers.getContractFactory('TFHETestSuite7');
  const contract = await contractFactory.connect(admin).deploy();
  await contract.waitForDeployment();

  return contract;
}

describe('TFHE operations 9', function () {
  before(async function () {
    await initSigners(1);
    this.signers = await getSigners();

    const contract1 = await deployTfheTestFixture1();
    this.contract1Address = await contract1.getAddress();
    this.contract1 = contract1;

    const contract2 = await deployTfheTestFixture2();
    this.contract2Address = await contract2.getAddress();
    this.contract2 = contract2;

    const contract3 = await deployTfheTestFixture3();
    this.contract3Address = await contract3.getAddress();
    this.contract3 = contract3;

    const contract4 = await deployTfheTestFixture4();
    this.contract4Address = await contract4.getAddress();
    this.contract4 = contract4;

    const contract5 = await deployTfheTestFixture5();
    this.contract5Address = await contract5.getAddress();
    this.contract5 = contract5;

    const contract6 = await deployTfheTestFixture6();
    this.contract6Address = await contract6.getAddress();
    this.contract6 = contract6;

    const contract7 = await deployTfheTestFixture7();
    this.contract7Address = await contract7.getAddress();
    this.contract7 = contract7;

    const instances = await createInstances(this.signers);
    this.instances = instances;
  });

  it('test operator "xor" overload (euint8, uint8) => euint8 test 1 (182, 146)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(182n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint8_uint8(encryptedAmount.handles[0], 146n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(36n);
  });

  it('test operator "xor" overload (euint8, uint8) => euint8 test 2 (26, 30)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(26n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint8_uint8(encryptedAmount.handles[0], 30n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint8, uint8) => euint8 test 3 (30, 30)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(30n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint8_uint8(encryptedAmount.handles[0], 30n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint8, uint8) => euint8 test 4 (30, 26)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(30n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint8_uint8(encryptedAmount.handles[0], 26n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (uint8, euint8) => euint8 test 1 (115, 146)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(146n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint8_euint8(115n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(225n);
  });

  it('test operator "xor" overload (uint8, euint8) => euint8 test 2 (26, 30)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(30n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint8_euint8(26n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (uint8, euint8) => euint8 test 3 (30, 30)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(30n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint8_euint8(30n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (uint8, euint8) => euint8 test 4 (30, 26)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(26n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint8_euint8(30n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 1 (11, 7)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(11n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint8_uint8(encryptedAmount.handles[0], 7n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 2 (7, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(7n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint8_uint8(encryptedAmount.handles[0], 11n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 3 (11, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(11n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint8_uint8(encryptedAmount.handles[0], 11n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint8, uint8) => ebool test 4 (11, 7)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(11n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint8_uint8(encryptedAmount.handles[0], 7n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 1 (40, 7)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(7n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint8_euint8(40n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 2 (7, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(11n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint8_euint8(7n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 3 (11, 11)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(11n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint8_euint8(11n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint8, euint8) => ebool test 4 (11, 7)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(7n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint8_euint8(11n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 1 (96, 243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(96n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint8_uint8(encryptedAmount.handles[0], 243n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 2 (92, 96)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(92n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint8_uint8(encryptedAmount.handles[0], 96n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 3 (96, 96)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(96n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint8_uint8(encryptedAmount.handles[0], 96n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint8, uint8) => ebool test 4 (96, 92)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(96n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint8_uint8(encryptedAmount.handles[0], 92n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 1 (250, 243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(243n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint8_euint8(250n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 2 (92, 96)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(96n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint8_euint8(92n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 3 (96, 96)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(96n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint8_euint8(96n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint8, euint8) => ebool test 4 (96, 92)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(92n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint8_euint8(96n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 1 (49, 165)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(49n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint8_uint8(encryptedAmount.handles[0], 165n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 2 (45, 49)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(45n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint8_uint8(encryptedAmount.handles[0], 49n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 3 (49, 49)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(49n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint8_uint8(encryptedAmount.handles[0], 49n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint8, uint8) => ebool test 4 (49, 45)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(49n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint8_uint8(encryptedAmount.handles[0], 45n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 1 (93, 165)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(165n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint8_euint8(93n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 2 (45, 49)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(49n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint8_euint8(45n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 3 (49, 49)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(49n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint8_euint8(49n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint8, euint8) => ebool test 4 (49, 45)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(45n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint8_euint8(49n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 1 (65, 79)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(65n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint8_uint8(encryptedAmount.handles[0], 79n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 2 (1, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(1n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint8_uint8(encryptedAmount.handles[0], 5n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 3 (5, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(5n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint8_uint8(encryptedAmount.handles[0], 5n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint8, uint8) => ebool test 4 (5, 1)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(5n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint8_uint8(encryptedAmount.handles[0], 1n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 1 (194, 79)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(79n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint8_euint8(194n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 2 (1, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(5n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint8_euint8(1n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 3 (5, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(5n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint8_euint8(5n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint8, euint8) => ebool test 4 (5, 1)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(1n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint8_euint8(5n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 1 (205, 200)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(205n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint8_uint8(encryptedAmount.handles[0], 200n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 2 (163, 167)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(163n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint8_uint8(encryptedAmount.handles[0], 167n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 3 (167, 167)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(167n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint8_uint8(encryptedAmount.handles[0], 167n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint8, uint8) => ebool test 4 (167, 163)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(167n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint8_uint8(encryptedAmount.handles[0], 163n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 1 (8, 200)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(200n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint8_euint8(8n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 2 (163, 167)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(167n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint8_euint8(163n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 3 (167, 167)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(167n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint8_euint8(167n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint8, euint8) => ebool test 4 (167, 163)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(163n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint8_euint8(167n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 1 (237, 20)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(237n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint8_uint8(encryptedAmount.handles[0], 20n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 2 (96, 100)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(96n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint8_uint8(encryptedAmount.handles[0], 100n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 3 (100, 100)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(100n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint8_uint8(encryptedAmount.handles[0], 100n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint8, uint8) => ebool test 4 (100, 96)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(100n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint8_uint8(encryptedAmount.handles[0], 96n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 1 (218, 20)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(20n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint8_euint8(218n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 2 (96, 100)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(100n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint8_euint8(96n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 3 (100, 100)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(100n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint8_euint8(100n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint8, euint8) => ebool test 4 (100, 96)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(96n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint8_euint8(100n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 1 (34, 128)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(34n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint8_uint8(encryptedAmount.handles[0], 128n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(34n);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 2 (30, 34)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(30n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint8_uint8(encryptedAmount.handles[0], 34n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(30n);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 3 (34, 34)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(34n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint8_uint8(encryptedAmount.handles[0], 34n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(34n);
  });

  it('test operator "min" overload (euint8, uint8) => euint8 test 4 (34, 30)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(34n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint8_uint8(encryptedAmount.handles[0], 30n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(30n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 1 (104, 128)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(128n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint8_euint8(104n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(104n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 2 (30, 34)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(34n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint8_euint8(30n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(30n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 3 (34, 34)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(34n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint8_euint8(34n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(34n);
  });

  it('test operator "min" overload (uint8, euint8) => euint8 test 4 (34, 30)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(30n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint8_euint8(34n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(30n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 1 (145, 70)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(145n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint8_uint8(encryptedAmount.handles[0], 70n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(145n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 2 (67, 71)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(67n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint8_uint8(encryptedAmount.handles[0], 71n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(71n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 3 (71, 71)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(71n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint8_uint8(encryptedAmount.handles[0], 71n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(71n);
  });

  it('test operator "max" overload (euint8, uint8) => euint8 test 4 (71, 67)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(71n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint8_uint8(encryptedAmount.handles[0], 67n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(71n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 1 (49, 70)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(70n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint8_euint8(49n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(70n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 2 (67, 71)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(71n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint8_euint8(67n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(71n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 3 (71, 71)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(71n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint8_euint8(71n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(71n);
  });

  it('test operator "max" overload (uint8, euint8) => euint8 test 4 (71, 67)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(67n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint8_euint8(71n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(71n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 1 (15783, 20805)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15783n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint16_uint16(encryptedAmount.handles[0], 20805n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(36588n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 2 (15779, 15783)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15779n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint16_uint16(encryptedAmount.handles[0], 15783n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(31562n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 3 (15783, 15783)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15783n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint16_uint16(encryptedAmount.handles[0], 15783n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(31566n);
  });

  it('test operator "add" overload (euint16, uint16) => euint16 test 4 (15783, 15779)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15783n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint16_uint16(encryptedAmount.handles[0], 15779n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(31562n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 1 (38281, 20805)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(20805n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint16_euint16(38281n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(59086n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 2 (15779, 15783)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(15783n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint16_euint16(15779n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(31562n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 3 (15783, 15783)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(15783n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint16_euint16(15783n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(31566n);
  });

  it('test operator "add" overload (uint16, euint16) => euint16 test 4 (15783, 15779)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(15779n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint16_euint16(15783n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(31562n);
  });

  it('test operator "sub" overload (euint16, uint16) => euint16 test 1 (6024, 6024)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(6024n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_euint16_uint16(encryptedAmount.handles[0], 6024n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, uint16) => euint16 test 2 (6024, 6020)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(6024n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_euint16_uint16(encryptedAmount.handles[0], 6020n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(4n);
  });

  it('test operator "sub" overload (uint16, euint16) => euint16 test 1 (6024, 6024)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(6024n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_uint16_euint16(6024n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint16, euint16) => euint16 test 2 (6024, 6020)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(6020n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_uint16_euint16(6024n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 1 (114, 152)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(114n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint16_uint16(encryptedAmount.handles[0], 152n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(17328n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 2 (226, 226)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(226n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint16_uint16(encryptedAmount.handles[0], 226n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(51076n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 3 (226, 226)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(226n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint16_uint16(encryptedAmount.handles[0], 226n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(51076n);
  });

  it('test operator "mul" overload (euint16, uint16) => euint16 test 4 (226, 226)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(226n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint16_uint16(encryptedAmount.handles[0], 226n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(51076n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 1 (110, 152)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(152n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint16_euint16(110n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(16720n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 2 (226, 226)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(226n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint16_euint16(226n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(51076n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 3 (226, 226)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(226n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint16_euint16(226n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(51076n);
  });

  it('test operator "mul" overload (uint16, euint16) => euint16 test 4 (226, 226)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(226n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint16_euint16(226n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(51076n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 1 (43929, 44760)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(43929n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint16_uint16(encryptedAmount.handles[0], 44760n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 2 (25714, 25718)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(25714n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint16_uint16(encryptedAmount.handles[0], 25718n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 3 (25718, 25718)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(25718n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint16_uint16(encryptedAmount.handles[0], 25718n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint16, uint16) => euint16 test 4 (25718, 25714)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(25718n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint16_uint16(encryptedAmount.handles[0], 25714n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 1 (61922, 54763)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(61922n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint16_uint16(encryptedAmount.handles[0], 54763n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(7159n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 2 (27340, 27344)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(27340n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint16_uint16(encryptedAmount.handles[0], 27344n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(27340n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 3 (27344, 27344)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(27344n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint16_uint16(encryptedAmount.handles[0], 27344n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint16, uint16) => euint16 test 4 (27344, 27340)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(27344n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint16_uint16(encryptedAmount.handles[0], 27340n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(4n);
  });

  it('test operator "and" overload (euint16, uint16) => euint16 test 1 (12901, 31136)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(12901n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint16_uint16(encryptedAmount.handles[0], 31136n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(12320n);
  });

  it('test operator "and" overload (euint16, uint16) => euint16 test 2 (12897, 12901)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(12897n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint16_uint16(encryptedAmount.handles[0], 12901n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(12897n);
  });

  it('test operator "and" overload (euint16, uint16) => euint16 test 3 (12901, 12901)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(12901n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint16_uint16(encryptedAmount.handles[0], 12901n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(12901n);
  });

  it('test operator "and" overload (euint16, uint16) => euint16 test 4 (12901, 12897)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(12901n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint16_uint16(encryptedAmount.handles[0], 12897n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(12897n);
  });

  it('test operator "and" overload (uint16, euint16) => euint16 test 1 (53941, 31136)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(31136n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint16_euint16(53941n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(20640n);
  });

  it('test operator "and" overload (uint16, euint16) => euint16 test 2 (12897, 12901)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(12901n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint16_euint16(12897n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(12897n);
  });

  it('test operator "and" overload (uint16, euint16) => euint16 test 3 (12901, 12901)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(12901n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint16_euint16(12901n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(12901n);
  });

  it('test operator "and" overload (uint16, euint16) => euint16 test 4 (12901, 12897)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(12897n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint16_euint16(12901n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(12897n);
  });

  it('test operator "or" overload (euint16, uint16) => euint16 test 1 (46904, 19944)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(46904n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint16_uint16(encryptedAmount.handles[0], 19944n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(65528n);
  });

  it('test operator "or" overload (euint16, uint16) => euint16 test 2 (29456, 29460)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(29456n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint16_uint16(encryptedAmount.handles[0], 29460n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(29460n);
  });

  it('test operator "or" overload (euint16, uint16) => euint16 test 3 (29460, 29460)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(29460n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint16_uint16(encryptedAmount.handles[0], 29460n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(29460n);
  });

  it('test operator "or" overload (euint16, uint16) => euint16 test 4 (29460, 29456)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(29460n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint16_uint16(encryptedAmount.handles[0], 29456n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(29460n);
  });

  it('test operator "or" overload (uint16, euint16) => euint16 test 1 (30814, 19944)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(19944n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint16_euint16(30814n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(32254n);
  });

  it('test operator "or" overload (uint16, euint16) => euint16 test 2 (29456, 29460)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(29460n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint16_euint16(29456n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(29460n);
  });

  it('test operator "or" overload (uint16, euint16) => euint16 test 3 (29460, 29460)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(29460n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint16_euint16(29460n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(29460n);
  });

  it('test operator "or" overload (uint16, euint16) => euint16 test 4 (29460, 29456)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(29456n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint16_euint16(29460n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(29460n);
  });

  it('test operator "xor" overload (euint16, uint16) => euint16 test 1 (15545, 15377)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15545n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint16_uint16(encryptedAmount.handles[0], 15377n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(168n);
  });

  it('test operator "xor" overload (euint16, uint16) => euint16 test 2 (15541, 15545)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15541n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint16_uint16(encryptedAmount.handles[0], 15545n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint16, uint16) => euint16 test 3 (15545, 15545)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15545n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint16_uint16(encryptedAmount.handles[0], 15545n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, uint16) => euint16 test 4 (15545, 15541)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(15545n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_euint16_uint16(encryptedAmount.handles[0], 15541n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (uint16, euint16) => euint16 test 1 (18321, 15377)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(15377n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint16_euint16(18321n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(31616n);
  });

  it('test operator "xor" overload (uint16, euint16) => euint16 test 2 (15541, 15545)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(15545n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint16_euint16(15541n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (uint16, euint16) => euint16 test 3 (15545, 15545)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(15545n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint16_euint16(15545n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (uint16, euint16) => euint16 test 4 (15545, 15541)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(15541n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.xor_uint16_euint16(15545n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 1 (58233, 53964)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(58233n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint16_uint16(encryptedAmount.handles[0], 53964n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 2 (41145, 41149)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(41145n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint16_uint16(encryptedAmount.handles[0], 41149n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 3 (41149, 41149)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(41149n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint16_uint16(encryptedAmount.handles[0], 41149n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, uint16) => ebool test 4 (41149, 41145)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(41149n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint16_uint16(encryptedAmount.handles[0], 41145n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 1 (25880, 53964)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(53964n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint16_euint16(25880n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 2 (41145, 41149)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(41149n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint16_euint16(41145n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 3 (41149, 41149)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(41149n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint16_euint16(41149n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint16, euint16) => ebool test 4 (41149, 41145)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(41145n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_uint16_euint16(41149n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 1 (9405, 2859)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(9405n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint16_uint16(encryptedAmount.handles[0], 2859n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 2 (9401, 9405)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(9401n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint16_uint16(encryptedAmount.handles[0], 9405n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 3 (9405, 9405)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(9405n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint16_uint16(encryptedAmount.handles[0], 9405n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, uint16) => ebool test 4 (9405, 9401)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(9405n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint16_uint16(encryptedAmount.handles[0], 9401n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 1 (65243, 2859)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(2859n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint16_euint16(65243n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 2 (9401, 9405)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(9405n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint16_euint16(9401n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 3 (9405, 9405)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(9405n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint16_euint16(9405n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint16, euint16) => ebool test 4 (9405, 9401)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(9401n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_uint16_euint16(9405n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 1 (11046, 20494)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(11046n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint16_uint16(encryptedAmount.handles[0], 20494n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 2 (11042, 11046)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(11042n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint16_uint16(encryptedAmount.handles[0], 11046n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 3 (11046, 11046)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(11046n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint16_uint16(encryptedAmount.handles[0], 11046n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, uint16) => ebool test 4 (11046, 11042)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(11046n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_euint16_uint16(encryptedAmount.handles[0], 11042n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 1 (14591, 20494)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(20494n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint16_euint16(14591n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 2 (11042, 11046)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(11046n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint16_euint16(11042n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 3 (11046, 11046)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(11046n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint16_euint16(11046n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint16, euint16) => ebool test 4 (11046, 11042)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(11042n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ge_uint16_euint16(11046n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 1 (38104, 64770)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(38104n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint16_uint16(encryptedAmount.handles[0], 64770n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 2 (38100, 38104)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(38100n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint16_uint16(encryptedAmount.handles[0], 38104n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 3 (38104, 38104)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(38104n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint16_uint16(encryptedAmount.handles[0], 38104n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, uint16) => ebool test 4 (38104, 38100)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(38104n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_euint16_uint16(encryptedAmount.handles[0], 38100n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 1 (38867, 64770)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(64770n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint16_euint16(38867n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 2 (38100, 38104)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(38104n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint16_euint16(38100n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 3 (38104, 38104)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(38104n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint16_euint16(38104n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint16, euint16) => ebool test 4 (38104, 38100)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(38100n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.gt_uint16_euint16(38104n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 1 (33555, 5568)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(33555n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint16_uint16(encryptedAmount.handles[0], 5568n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 2 (11249, 11253)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(11249n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint16_uint16(encryptedAmount.handles[0], 11253n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 3 (11253, 11253)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(11253n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint16_uint16(encryptedAmount.handles[0], 11253n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, uint16) => ebool test 4 (11253, 11249)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(11253n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_euint16_uint16(encryptedAmount.handles[0], 11249n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 1 (45013, 5568)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(5568n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint16_euint16(45013n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 2 (11249, 11253)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(11253n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint16_euint16(11249n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 3 (11253, 11253)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(11253n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint16_euint16(11253n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint16, euint16) => ebool test 4 (11253, 11249)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(11249n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.le_uint16_euint16(11253n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 1 (56408, 16573)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(56408n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint16_uint16(encryptedAmount.handles[0], 16573n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 2 (12604, 12608)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(12604n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint16_uint16(encryptedAmount.handles[0], 12608n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 3 (12608, 12608)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(12608n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint16_uint16(encryptedAmount.handles[0], 12608n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, uint16) => ebool test 4 (12608, 12604)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(12608n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_euint16_uint16(encryptedAmount.handles[0], 12604n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 1 (45565, 16573)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(16573n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint16_euint16(45565n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 2 (12604, 12608)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(12608n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint16_euint16(12604n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 3 (12608, 12608)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(12608n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint16_euint16(12608n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint16, euint16) => ebool test 4 (12608, 12604)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(12604n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.lt_uint16_euint16(12608n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 1 (5275, 17639)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(5275n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint16_uint16(encryptedAmount.handles[0], 17639n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(5275n);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 2 (5271, 5275)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(5271n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint16_uint16(encryptedAmount.handles[0], 5275n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(5271n);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 3 (5275, 5275)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(5275n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint16_uint16(encryptedAmount.handles[0], 5275n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(5275n);
  });

  it('test operator "min" overload (euint16, uint16) => euint16 test 4 (5275, 5271)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(5275n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_euint16_uint16(encryptedAmount.handles[0], 5271n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(5271n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 1 (22387, 17639)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(17639n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint16_euint16(22387n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(17639n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 2 (5271, 5275)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(5275n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint16_euint16(5271n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(5271n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 3 (5275, 5275)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(5275n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint16_euint16(5275n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(5275n);
  });

  it('test operator "min" overload (uint16, euint16) => euint16 test 4 (5275, 5271)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(5271n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.min_uint16_euint16(5275n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(5271n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 1 (6866, 14133)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(6866n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint16_uint16(encryptedAmount.handles[0], 14133n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(14133n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 2 (6862, 6866)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(6862n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint16_uint16(encryptedAmount.handles[0], 6866n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(6866n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 3 (6866, 6866)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(6866n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint16_uint16(encryptedAmount.handles[0], 6866n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(6866n);
  });

  it('test operator "max" overload (euint16, uint16) => euint16 test 4 (6866, 6862)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add16(6866n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_euint16_uint16(encryptedAmount.handles[0], 6862n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(6866n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 1 (26860, 14133)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(14133n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint16_euint16(26860n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(26860n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 2 (6862, 6866)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(6866n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint16_euint16(6862n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(6866n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 3 (6866, 6866)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(6866n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint16_euint16(6866n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(6866n);
  });

  it('test operator "max" overload (uint16, euint16) => euint16 test 4 (6866, 6862)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add16(6862n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.max_uint16_euint16(6866n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt16(await this.contract5.resEuint16());
    expect(res).to.equal(6866n);
  });
});
