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

describe('TFHE operations 3', function () {
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

  it('test operator "le" overload (euint16, euint16) => ebool test 1 (33555, 11253)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(33555n);
    input.add16(11253n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint16, euint16) => ebool test 2 (11249, 11253)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(11249n);
    input.add16(11253n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint16) => ebool test 3 (11253, 11253)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(11253n);
    input.add16(11253n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint16) => ebool test 4 (11253, 11249)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(11253n);
    input.add16(11249n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint16) => ebool test 1 (56408, 12608)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(56408n);
    input.add16(12608n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint16) => ebool test 2 (12604, 12608)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(12604n);
    input.add16(12608n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint16) => ebool test 3 (12608, 12608)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(12608n);
    input.add16(12608n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint16) => ebool test 4 (12608, 12604)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(12608n);
    input.add16(12604n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint16) => euint16 test 1 (5275, 14613)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(5275n);
    input.add16(14613n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt16(await this.contract2.resEuint16());
    expect(res).to.equal(5275n);
  });

  it('test operator "min" overload (euint16, euint16) => euint16 test 2 (5271, 5275)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(5271n);
    input.add16(5275n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt16(await this.contract2.resEuint16());
    expect(res).to.equal(5271n);
  });

  it('test operator "min" overload (euint16, euint16) => euint16 test 3 (5275, 5275)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(5275n);
    input.add16(5275n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt16(await this.contract2.resEuint16());
    expect(res).to.equal(5275n);
  });

  it('test operator "min" overload (euint16, euint16) => euint16 test 4 (5275, 5271)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(5275n);
    input.add16(5271n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt16(await this.contract2.resEuint16());
    expect(res).to.equal(5271n);
  });

  it('test operator "max" overload (euint16, euint16) => euint16 test 1 (6866, 7509)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6866n);
    input.add16(7509n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt16(await this.contract2.resEuint16());
    expect(res).to.equal(7509n);
  });

  it('test operator "max" overload (euint16, euint16) => euint16 test 2 (6862, 6866)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6862n);
    input.add16(6866n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt16(await this.contract2.resEuint16());
    expect(res).to.equal(6866n);
  });

  it('test operator "max" overload (euint16, euint16) => euint16 test 3 (6866, 6866)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6866n);
    input.add16(6866n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt16(await this.contract2.resEuint16());
    expect(res).to.equal(6866n);
  });

  it('test operator "max" overload (euint16, euint16) => euint16 test 4 (6866, 6862)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6866n);
    input.add16(6862n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt16(await this.contract2.resEuint16());
    expect(res).to.equal(6866n);
  });

  it('test operator "add" overload (euint16, euint32) => euint32 test 1 (2, 36786)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2n);
    input.add32(36786n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(36788n);
  });

  it('test operator "add" overload (euint16, euint32) => euint32 test 2 (4991, 4995)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(4991n);
    input.add32(4995n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(9986n);
  });

  it('test operator "add" overload (euint16, euint32) => euint32 test 3 (4995, 4995)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(4995n);
    input.add32(4995n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(9990n);
  });

  it('test operator "add" overload (euint16, euint32) => euint32 test 4 (4995, 4991)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(4995n);
    input.add32(4991n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(9986n);
  });

  it('test operator "sub" overload (euint16, euint32) => euint32 test 1 (35755, 35755)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(35755n);
    input.add32(35755n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, euint32) => euint32 test 2 (35755, 35751)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(35755n);
    input.add32(35751n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 1 (2, 23166)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2n);
    input.add32(23166n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(46332n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 2 (243, 243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(243n);
    input.add32(243n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(59049n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 3 (243, 243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(243n);
    input.add32(243n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(59049n);
  });

  it('test operator "mul" overload (euint16, euint32) => euint32 test 4 (243, 243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(243n);
    input.add32(243n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(59049n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 1 (15965, 1377659774)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(15965n);
    input.add32(1377659774n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(10844n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 2 (15961, 15965)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(15961n);
    input.add32(15965n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(15961n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 3 (15965, 15965)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(15965n);
    input.add32(15965n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(15965n);
  });

  it('test operator "and" overload (euint16, euint32) => euint32 test 4 (15965, 15961)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(15965n);
    input.add32(15961n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(15961n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 1 (50087, 2206986353)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(50087n);
    input.add32(2206986353n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(2206987255n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 2 (50083, 50087)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(50083n);
    input.add32(50087n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(50087n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 3 (50087, 50087)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(50087n);
    input.add32(50087n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(50087n);
  });

  it('test operator "or" overload (euint16, euint32) => euint32 test 4 (50087, 50083)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(50087n);
    input.add32(50083n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(50087n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 1 (31034, 2581777230)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(31034n);
    input.add32(2581777230n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(2581770868n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 2 (31030, 31034)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(31030n);
    input.add32(31034n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 3 (31034, 31034)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(31034n);
    input.add32(31034n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint32) => euint32 test 4 (31034, 31030)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(31034n);
    input.add32(31030n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 1 (61539, 2768077411)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(61539n);
    input.add32(2768077411n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 2 (61535, 61539)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(61535n);
    input.add32(61539n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 3 (61539, 61539)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(61539n);
    input.add32(61539n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint32) => ebool test 4 (61539, 61535)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(61539n);
    input.add32(61535n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 1 (58762, 672865895)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(58762n);
    input.add32(672865895n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 2 (58758, 58762)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(58758n);
    input.add32(58762n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 3 (58762, 58762)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(58762n);
    input.add32(58762n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint32) => ebool test 4 (58762, 58758)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(58762n);
    input.add32(58758n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 1 (45678, 1956216316)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(45678n);
    input.add32(1956216316n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 2 (45674, 45678)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(45674n);
    input.add32(45678n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 3 (45678, 45678)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(45678n);
    input.add32(45678n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint32) => ebool test 4 (45678, 45674)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(45678n);
    input.add32(45674n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 1 (47523, 3254015967)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(47523n);
    input.add32(3254015967n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 2 (47519, 47523)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(47519n);
    input.add32(47523n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 3 (47523, 47523)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(47523n);
    input.add32(47523n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint32) => ebool test 4 (47523, 47519)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(47523n);
    input.add32(47519n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 1 (62426, 4272714565)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(62426n);
    input.add32(4272714565n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 2 (62422, 62426)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(62422n);
    input.add32(62426n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 3 (62426, 62426)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(62426n);
    input.add32(62426n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint32) => ebool test 4 (62426, 62422)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(62426n);
    input.add32(62422n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 1 (3431, 3036064273)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(3431n);
    input.add32(3036064273n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 2 (3427, 3431)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(3427n);
    input.add32(3431n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 3 (3431, 3431)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(3431n);
    input.add32(3431n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint32) => ebool test 4 (3431, 3427)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(3431n);
    input.add32(3427n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 1 (53112, 3435393193)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(53112n);
    input.add32(3435393193n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(53112n);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 2 (53108, 53112)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(53108n);
    input.add32(53112n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(53108n);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 3 (53112, 53112)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(53112n);
    input.add32(53112n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(53112n);
  });

  it('test operator "min" overload (euint16, euint32) => euint32 test 4 (53112, 53108)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(53112n);
    input.add32(53108n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(53108n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 1 (32917, 1945669943)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(32917n);
    input.add32(1945669943n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(1945669943n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 2 (32913, 32917)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(32913n);
    input.add32(32917n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(32917n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 3 (32917, 32917)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(32917n);
    input.add32(32917n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(32917n);
  });

  it('test operator "max" overload (euint16, euint32) => euint32 test 4 (32917, 32913)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(32917n);
    input.add32(32913n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt32(await this.contract2.resEuint32());
    expect(res).to.equal(32917n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 1 (2, 65517)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2n);
    input.add64(65517n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(65519n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 2 (27041, 27043)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(27041n);
    input.add64(27043n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(54084n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 3 (27043, 27043)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(27043n);
    input.add64(27043n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(54086n);
  });

  it('test operator "add" overload (euint16, euint64) => euint64 test 4 (27043, 27041)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(27043n);
    input.add64(27041n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(54084n);
  });

  it('test operator "sub" overload (euint16, euint64) => euint64 test 1 (12626, 12626)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(12626n);
    input.add64(12626n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, euint64) => euint64 test 2 (12626, 12622)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(12626n);
    input.add64(12622n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 1 (2, 32756)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2n);
    input.add64(32756n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(65512n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 2 (137, 137)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(137n);
    input.add64(137n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(18769n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 3 (137, 137)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(137n);
    input.add64(137n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(18769n);
  });

  it('test operator "mul" overload (euint16, euint64) => euint64 test 4 (137, 137)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(137n);
    input.add64(137n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(18769n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 1 (64525, 18445486264025359983)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(64525n);
    input.add64(18445486264025359983n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(9229n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 2 (64521, 64525)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(64521n);
    input.add64(64525n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(64521n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 3 (64525, 64525)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(64525n);
    input.add64(64525n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(64525n);
  });

  it('test operator "and" overload (euint16, euint64) => euint64 test 4 (64525, 64521)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(64525n);
    input.add64(64521n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(64521n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 1 (2648, 18444972759690698673)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2648n);
    input.add64(18444972759690698673n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(18444972759690698745n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 2 (2644, 2648)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2644n);
    input.add64(2648n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(2652n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 3 (2648, 2648)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2648n);
    input.add64(2648n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(2648n);
  });

  it('test operator "or" overload (euint16, euint64) => euint64 test 4 (2648, 2644)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2648n);
    input.add64(2644n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(2652n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 1 (26518, 18446338996058647893)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(26518n);
    input.add64(18446338996058647893n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(18446338996058622659n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 2 (26514, 26518)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(26514n);
    input.add64(26518n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 3 (26518, 26518)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(26518n);
    input.add64(26518n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint64) => euint64 test 4 (26518, 26514)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(26518n);
    input.add64(26514n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 1 (36835, 18446640093449249789)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(36835n);
    input.add64(18446640093449249789n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 2 (36831, 36835)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(36831n);
    input.add64(36835n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 3 (36835, 36835)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(36835n);
    input.add64(36835n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint64) => ebool test 4 (36835, 36831)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(36835n);
    input.add64(36831n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 1 (21497, 18445018904217851133)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(21497n);
    input.add64(18445018904217851133n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 2 (21493, 21497)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(21493n);
    input.add64(21497n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 3 (21497, 21497)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(21497n);
    input.add64(21497n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint64) => ebool test 4 (21497, 21493)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(21497n);
    input.add64(21493n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 1 (14177, 18441077673011879037)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(14177n);
    input.add64(18441077673011879037n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 2 (14173, 14177)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(14173n);
    input.add64(14177n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 3 (14177, 14177)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(14177n);
    input.add64(14177n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint64) => ebool test 4 (14177, 14173)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(14177n);
    input.add64(14173n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 1 (63717, 18444953972092672625)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(63717n);
    input.add64(18444953972092672625n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 2 (63713, 63717)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(63713n);
    input.add64(63717n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 3 (63717, 63717)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(63717n);
    input.add64(63717n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint64) => ebool test 4 (63717, 63713)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(63717n);
    input.add64(63713n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 1 (43500, 18440598396441263599)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(43500n);
    input.add64(18440598396441263599n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 2 (43496, 43500)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(43496n);
    input.add64(43500n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 3 (43500, 43500)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(43500n);
    input.add64(43500n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint64) => ebool test 4 (43500, 43496)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(43500n);
    input.add64(43496n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 1 (1725, 18440474626193717605)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1725n);
    input.add64(18440474626193717605n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 2 (1721, 1725)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1721n);
    input.add64(1725n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 3 (1725, 1725)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1725n);
    input.add64(1725n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint64) => ebool test 4 (1725, 1721)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(1725n);
    input.add64(1721n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 1 (35149, 18437877400711484669)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(35149n);
    input.add64(18437877400711484669n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(35149n);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 2 (35145, 35149)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(35145n);
    input.add64(35149n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(35145n);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 3 (35149, 35149)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(35149n);
    input.add64(35149n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(35149n);
  });

  it('test operator "min" overload (euint16, euint64) => euint64 test 4 (35149, 35145)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(35149n);
    input.add64(35145n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(35145n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 1 (48410, 18440663172700592127)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(48410n);
    input.add64(18440663172700592127n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(18440663172700592127n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 2 (48406, 48410)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(48406n);
    input.add64(48410n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(48410n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 3 (48410, 48410)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(48410n);
    input.add64(48410n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(48410n);
  });

  it('test operator "max" overload (euint16, euint64) => euint64 test 4 (48410, 48406)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(48410n);
    input.add64(48406n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract2.resEuint64());
    expect(res).to.equal(48410n);
  });

  it('test operator "add" overload (euint16, euint128) => euint128 test 1 (2, 32769)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2n);
    input.add128(32769n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(32771n);
  });

  it('test operator "add" overload (euint16, euint128) => euint128 test 2 (25929, 25931)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(25929n);
    input.add128(25931n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(51860n);
  });

  it('test operator "add" overload (euint16, euint128) => euint128 test 3 (25931, 25931)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(25931n);
    input.add128(25931n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(51862n);
  });

  it('test operator "add" overload (euint16, euint128) => euint128 test 4 (25931, 25929)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(25931n);
    input.add128(25929n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.add_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(51860n);
  });

  it('test operator "sub" overload (euint16, euint128) => euint128 test 1 (44182, 44182)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(44182n);
    input.add128(44182n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint16, euint128) => euint128 test 2 (44182, 44178)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(44182n);
    input.add128(44178n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.sub_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint16, euint128) => euint128 test 1 (2, 16385)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(2n);
    input.add128(16385n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(32770n);
  });

  it('test operator "mul" overload (euint16, euint128) => euint128 test 2 (172, 172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(172n);
    input.add128(172n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(29584n);
  });

  it('test operator "mul" overload (euint16, euint128) => euint128 test 3 (172, 172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(172n);
    input.add128(172n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(29584n);
  });

  it('test operator "mul" overload (euint16, euint128) => euint128 test 4 (172, 172)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(172n);
    input.add128(172n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.mul_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(29584n);
  });

  it('test operator "and" overload (euint16, euint128) => euint128 test 1 (23598, 340282366920938463463371126889179491473)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(23598n);
    input.add128(340282366920938463463371126889179491473n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(3072n);
  });

  it('test operator "and" overload (euint16, euint128) => euint128 test 2 (23594, 23598)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(23594n);
    input.add128(23598n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(23594n);
  });

  it('test operator "and" overload (euint16, euint128) => euint128 test 3 (23598, 23598)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(23598n);
    input.add128(23598n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(23598n);
  });

  it('test operator "and" overload (euint16, euint128) => euint128 test 4 (23598, 23594)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(23598n);
    input.add128(23594n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.and_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(23594n);
  });

  it('test operator "or" overload (euint16, euint128) => euint128 test 1 (7204, 340282366920938463463369345727177955375)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(7204n);
    input.add128(340282366920938463463369345727177955375n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(340282366920938463463369345727177956399n);
  });

  it('test operator "or" overload (euint16, euint128) => euint128 test 2 (7200, 7204)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(7200n);
    input.add128(7204n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(7204n);
  });

  it('test operator "or" overload (euint16, euint128) => euint128 test 3 (7204, 7204)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(7204n);
    input.add128(7204n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(7204n);
  });

  it('test operator "or" overload (euint16, euint128) => euint128 test 4 (7204, 7200)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(7204n);
    input.add128(7200n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.or_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(7204n);
  });

  it('test operator "xor" overload (euint16, euint128) => euint128 test 1 (359, 340282366920938463463368425302706637109)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(359n);
    input.add128(340282366920938463463368425302706637109n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(340282366920938463463368425302706636882n);
  });

  it('test operator "xor" overload (euint16, euint128) => euint128 test 2 (355, 359)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(355n);
    input.add128(359n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "xor" overload (euint16, euint128) => euint128 test 3 (359, 359)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(359n);
    input.add128(359n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint16, euint128) => euint128 test 4 (359, 355)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(359n);
    input.add128(355n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.xor_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "eq" overload (euint16, euint128) => ebool test 1 (25711, 340282366920938463463373597674731878523)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(25711n);
    input.add128(340282366920938463463373597674731878523n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint128) => ebool test 2 (25707, 25711)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(25707n);
    input.add128(25711n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint128) => ebool test 3 (25711, 25711)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(25711n);
    input.add128(25711n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint128) => ebool test 4 (25711, 25707)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(25711n);
    input.add128(25707n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint128) => ebool test 1 (46942, 340282366920938463463374496321524171583)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(46942n);
    input.add128(340282366920938463463374496321524171583n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint128) => ebool test 2 (46938, 46942)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(46938n);
    input.add128(46942n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint128) => ebool test 3 (46942, 46942)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(46942n);
    input.add128(46942n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint128) => ebool test 4 (46942, 46938)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(46942n);
    input.add128(46938n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint128) => ebool test 1 (17561, 340282366920938463463366796355385511237)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17561n);
    input.add128(340282366920938463463366796355385511237n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint128) => ebool test 2 (17557, 17561)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17557n);
    input.add128(17561n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint16, euint128) => ebool test 3 (17561, 17561)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17561n);
    input.add128(17561n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint16, euint128) => ebool test 4 (17561, 17557)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(17561n);
    input.add128(17557n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ge_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint16, euint128) => ebool test 1 (60743, 340282366920938463463371820684720532311)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(60743n);
    input.add128(340282366920938463463371820684720532311n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint128) => ebool test 2 (60739, 60743)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(60739n);
    input.add128(60743n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint128) => ebool test 3 (60743, 60743)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(60743n);
    input.add128(60743n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint16, euint128) => ebool test 4 (60743, 60739)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(60743n);
    input.add128(60739n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.gt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint128) => ebool test 1 (33310, 340282366920938463463373353264873783897)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(33310n);
    input.add128(340282366920938463463373353264873783897n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint128) => ebool test 2 (33306, 33310)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(33306n);
    input.add128(33310n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint128) => ebool test 3 (33310, 33310)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(33310n);
    input.add128(33310n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint16, euint128) => ebool test 4 (33310, 33306)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(33310n);
    input.add128(33306n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.le_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint128) => ebool test 1 (38207, 340282366920938463463374276051613612193)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(38207n);
    input.add128(340282366920938463463374276051613612193n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint128) => ebool test 2 (38203, 38207)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(38203n);
    input.add128(38207n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint16, euint128) => ebool test 3 (38207, 38207)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(38207n);
    input.add128(38207n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint16, euint128) => ebool test 4 (38207, 38203)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(38207n);
    input.add128(38203n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.lt_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint16, euint128) => euint128 test 1 (28421, 340282366920938463463367362672741518827)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(28421n);
    input.add128(340282366920938463463367362672741518827n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(28421n);
  });

  it('test operator "min" overload (euint16, euint128) => euint128 test 2 (28417, 28421)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(28417n);
    input.add128(28421n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(28417n);
  });

  it('test operator "min" overload (euint16, euint128) => euint128 test 3 (28421, 28421)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(28421n);
    input.add128(28421n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(28421n);
  });

  it('test operator "min" overload (euint16, euint128) => euint128 test 4 (28421, 28417)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(28421n);
    input.add128(28417n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.min_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(28417n);
  });

  it('test operator "max" overload (euint16, euint128) => euint128 test 1 (64419, 340282366920938463463368669613710456877)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(64419n);
    input.add128(340282366920938463463368669613710456877n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(340282366920938463463368669613710456877n);
  });

  it('test operator "max" overload (euint16, euint128) => euint128 test 2 (64415, 64419)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(64415n);
    input.add128(64419n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(64419n);
  });

  it('test operator "max" overload (euint16, euint128) => euint128 test 3 (64419, 64419)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(64419n);
    input.add128(64419n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(64419n);
  });

  it('test operator "max" overload (euint16, euint128) => euint128 test 4 (64419, 64415)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(64419n);
    input.add128(64415n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.max_euint16_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract2.resEuint128());
    expect(res).to.equal(64419n);
  });

  it('test operator "eq" overload (euint16, euint256) => ebool test 1 (18773, 115792089237316195423570985008687907853269984665640564039457583685057605981119)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(18773n);
    input.add256(115792089237316195423570985008687907853269984665640564039457583685057605981119n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint256) => ebool test 2 (18769, 18773)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(18769n);
    input.add256(18773n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint16, euint256) => ebool test 3 (18773, 18773)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(18773n);
    input.add256(18773n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint16, euint256) => ebool test 4 (18773, 18769)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(18773n);
    input.add256(18769n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.eq_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint256) => ebool test 1 (6030, 115792089237316195423570985008687907853269984665640564039457581086900652100053)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6030n);
    input.add256(115792089237316195423570985008687907853269984665640564039457581086900652100053n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint256) => ebool test 2 (6026, 6030)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6026n);
    input.add256(6030n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint16, euint256) => ebool test 3 (6030, 6030)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6030n);
    input.add256(6030n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint16, euint256) => ebool test 4 (6030, 6026)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract2Address, this.signers.alice.address);
    input.add16(6030n);
    input.add256(6026n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract2.ne_euint16_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract2.resEbool());
    expect(res).to.equal(true);
  });
});
