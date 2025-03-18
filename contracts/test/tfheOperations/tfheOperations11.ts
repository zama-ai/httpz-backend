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

describe('TFHE operations 11', function () {
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

  it('test operator "ge" overload (euint64, uint64) => ebool test 1 (18444077931090666933, 18446689364179301495)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18444077931090666933n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint64_uint64(
      encryptedAmount.handles[0],
      18446689364179301495n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, uint64) => ebool test 2 (18442724311194093427, 18442724311194093431)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442724311194093427n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint64_uint64(
      encryptedAmount.handles[0],
      18442724311194093431n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint64, uint64) => ebool test 3 (18442724311194093431, 18442724311194093431)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442724311194093431n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint64_uint64(
      encryptedAmount.handles[0],
      18442724311194093431n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint64, uint64) => ebool test 4 (18442724311194093431, 18442724311194093427)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18442724311194093431n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint64_uint64(
      encryptedAmount.handles[0],
      18442724311194093427n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 1 (18438450099307492499, 18446689364179301495)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18446689364179301495n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint64_euint64(
      18438450099307492499n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 2 (18442724311194093427, 18442724311194093431)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442724311194093431n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint64_euint64(
      18442724311194093427n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 3 (18442724311194093431, 18442724311194093431)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442724311194093431n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint64_euint64(
      18442724311194093431n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint64, euint64) => ebool test 4 (18442724311194093431, 18442724311194093427)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18442724311194093427n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint64_euint64(
      18442724311194093431n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 1 (18441239516015570613, 18445352513316989959)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18441239516015570613n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint64_uint64(
      encryptedAmount.handles[0],
      18445352513316989959n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 2 (18441239516015570609, 18441239516015570613)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18441239516015570609n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint64_uint64(
      encryptedAmount.handles[0],
      18441239516015570613n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 3 (18441239516015570613, 18441239516015570613)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18441239516015570613n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint64_uint64(
      encryptedAmount.handles[0],
      18441239516015570613n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint64, uint64) => ebool test 4 (18441239516015570613, 18441239516015570609)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18441239516015570613n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint64_uint64(
      encryptedAmount.handles[0],
      18441239516015570609n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 1 (18444429071010002741, 18445352513316989959)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18445352513316989959n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint64_euint64(
      18444429071010002741n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 2 (18441239516015570609, 18441239516015570613)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18441239516015570613n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint64_euint64(
      18441239516015570609n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 3 (18441239516015570613, 18441239516015570613)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18441239516015570613n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint64_euint64(
      18441239516015570613n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint64, euint64) => ebool test 4 (18441239516015570613, 18441239516015570609)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18441239516015570609n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint64_euint64(
      18441239516015570613n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 1 (18440407981003469861, 18445383068024733041)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18440407981003469861n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint64_uint64(
      encryptedAmount.handles[0],
      18445383068024733041n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 2 (18439874662696895677, 18439874662696895681)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439874662696895677n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint64_uint64(
      encryptedAmount.handles[0],
      18439874662696895681n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 3 (18439874662696895681, 18439874662696895681)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439874662696895681n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint64_uint64(
      encryptedAmount.handles[0],
      18439874662696895681n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint64, uint64) => ebool test 4 (18439874662696895681, 18439874662696895677)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439874662696895681n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint64_uint64(
      encryptedAmount.handles[0],
      18439874662696895677n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 1 (18444184918867326329, 18445383068024733041)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18445383068024733041n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint64_euint64(
      18444184918867326329n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 2 (18439874662696895677, 18439874662696895681)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439874662696895681n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint64_euint64(
      18439874662696895677n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 3 (18439874662696895681, 18439874662696895681)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439874662696895681n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint64_euint64(
      18439874662696895681n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint64, euint64) => ebool test 4 (18439874662696895681, 18439874662696895677)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439874662696895677n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint64_euint64(
      18439874662696895681n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 1 (18439148518743681263, 18438975361883729777)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439148518743681263n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint64_uint64(
      encryptedAmount.handles[0],
      18438975361883729777n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 2 (18439148518743681259, 18439148518743681263)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439148518743681259n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint64_uint64(
      encryptedAmount.handles[0],
      18439148518743681263n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 3 (18439148518743681263, 18439148518743681263)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439148518743681263n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint64_uint64(
      encryptedAmount.handles[0],
      18439148518743681263n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint64, uint64) => ebool test 4 (18439148518743681263, 18439148518743681259)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18439148518743681263n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint64_uint64(
      encryptedAmount.handles[0],
      18439148518743681259n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint64, euint64) => ebool test 1 (18446193736553814881, 18438975361883729777)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18438975361883729777n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint64_euint64(
      18446193736553814881n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint64, euint64) => ebool test 2 (18439148518743681259, 18439148518743681263)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439148518743681263n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint64_euint64(
      18439148518743681259n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint64, euint64) => ebool test 3 (18439148518743681263, 18439148518743681263)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439148518743681263n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint64_euint64(
      18439148518743681263n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint64, euint64) => ebool test 4 (18439148518743681263, 18439148518743681259)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439148518743681259n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint64_euint64(
      18439148518743681263n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint64, uint64) => euint64 test 1 (18438647079837069951, 18441732972463081903)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18438647079837069951n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint64_uint64(
      encryptedAmount.handles[0],
      18441732972463081903n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18438647079837069951n);
  });

  it('test operator "min" overload (euint64, uint64) => euint64 test 2 (18438647079837069947, 18438647079837069951)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18438647079837069947n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint64_uint64(
      encryptedAmount.handles[0],
      18438647079837069951n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18438647079837069947n);
  });

  it('test operator "min" overload (euint64, uint64) => euint64 test 3 (18438647079837069951, 18438647079837069951)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18438647079837069951n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint64_uint64(
      encryptedAmount.handles[0],
      18438647079837069951n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18438647079837069951n);
  });

  it('test operator "min" overload (euint64, uint64) => euint64 test 4 (18438647079837069951, 18438647079837069947)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18438647079837069951n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint64_uint64(
      encryptedAmount.handles[0],
      18438647079837069947n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18438647079837069947n);
  });

  it('test operator "min" overload (uint64, euint64) => euint64 test 1 (18439185027342847863, 18441732972463081903)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18441732972463081903n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint64_euint64(
      18439185027342847863n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18439185027342847863n);
  });

  it('test operator "min" overload (uint64, euint64) => euint64 test 2 (18438647079837069947, 18438647079837069951)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18438647079837069951n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint64_euint64(
      18438647079837069947n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18438647079837069947n);
  });

  it('test operator "min" overload (uint64, euint64) => euint64 test 3 (18438647079837069951, 18438647079837069951)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18438647079837069951n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint64_euint64(
      18438647079837069951n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18438647079837069951n);
  });

  it('test operator "min" overload (uint64, euint64) => euint64 test 4 (18438647079837069951, 18438647079837069947)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18438647079837069947n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint64_euint64(
      18438647079837069951n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18438647079837069947n);
  });

  it('test operator "max" overload (euint64, uint64) => euint64 test 1 (18444740910654365979, 18439666167662433509)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18444740910654365979n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint64_uint64(
      encryptedAmount.handles[0],
      18439666167662433509n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18444740910654365979n);
  });

  it('test operator "max" overload (euint64, uint64) => euint64 test 2 (18443401424549949191, 18443401424549949195)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18443401424549949191n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint64_uint64(
      encryptedAmount.handles[0],
      18443401424549949195n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443401424549949195n);
  });

  it('test operator "max" overload (euint64, uint64) => euint64 test 3 (18443401424549949195, 18443401424549949195)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18443401424549949195n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint64_uint64(
      encryptedAmount.handles[0],
      18443401424549949195n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443401424549949195n);
  });

  it('test operator "max" overload (euint64, uint64) => euint64 test 4 (18443401424549949195, 18443401424549949191)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add64(18443401424549949195n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint64_uint64(
      encryptedAmount.handles[0],
      18443401424549949191n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443401424549949195n);
  });

  it('test operator "max" overload (uint64, euint64) => euint64 test 1 (18439696913523000323, 18439666167662433509)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18439666167662433509n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint64_euint64(
      18439696913523000323n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18439696913523000323n);
  });

  it('test operator "max" overload (uint64, euint64) => euint64 test 2 (18443401424549949191, 18443401424549949195)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18443401424549949195n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint64_euint64(
      18443401424549949191n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443401424549949195n);
  });

  it('test operator "max" overload (uint64, euint64) => euint64 test 3 (18443401424549949195, 18443401424549949195)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18443401424549949195n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint64_euint64(
      18443401424549949195n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443401424549949195n);
  });

  it('test operator "max" overload (uint64, euint64) => euint64 test 4 (18443401424549949195, 18443401424549949191)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add64(18443401424549949191n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint64_euint64(
      18443401424549949195n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt64(await this.contract6.resEuint64());
    expect(res).to.equal(18443401424549949195n);
  });

  it('test operator "add" overload (euint128, uint128) => euint128 test 1 (170141183460469231731683580471054505244, 170141183460469231731684014492477673992)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(170141183460469231731683580471054505244n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint128_uint128(
      encryptedAmount.handles[0],
      170141183460469231731684014492477673992n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463367594963532179236n);
  });

  it('test operator "add" overload (euint128, uint128) => euint128 test 2 (170141183460469231731683580471054505242, 170141183460469231731683580471054505244)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(170141183460469231731683580471054505242n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint128_uint128(
      encryptedAmount.handles[0],
      170141183460469231731683580471054505244n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463367160942109010486n);
  });

  it('test operator "add" overload (euint128, uint128) => euint128 test 3 (170141183460469231731683580471054505244, 170141183460469231731683580471054505244)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(170141183460469231731683580471054505244n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint128_uint128(
      encryptedAmount.handles[0],
      170141183460469231731683580471054505244n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463367160942109010488n);
  });

  it('test operator "add" overload (euint128, uint128) => euint128 test 4 (170141183460469231731683580471054505244, 170141183460469231731683580471054505242)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(170141183460469231731683580471054505244n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_euint128_uint128(
      encryptedAmount.handles[0],
      170141183460469231731683580471054505242n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463367160942109010486n);
  });

  it('test operator "add" overload (uint128, euint128) => euint128 test 1 (170141183460469231731684944308180542141, 170141183460469231731684014492477673992)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(170141183460469231731684014492477673992n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint128_euint128(
      170141183460469231731684944308180542141n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463368958800658216133n);
  });

  it('test operator "add" overload (uint128, euint128) => euint128 test 2 (170141183460469231731683580471054505242, 170141183460469231731683580471054505244)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(170141183460469231731683580471054505244n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint128_euint128(
      170141183460469231731683580471054505242n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463367160942109010486n);
  });

  it('test operator "add" overload (uint128, euint128) => euint128 test 3 (170141183460469231731683580471054505244, 170141183460469231731683580471054505244)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(170141183460469231731683580471054505244n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint128_euint128(
      170141183460469231731683580471054505244n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463367160942109010488n);
  });

  it('test operator "add" overload (uint128, euint128) => euint128 test 4 (170141183460469231731683580471054505244, 170141183460469231731683580471054505242)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(170141183460469231731683580471054505242n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.add_uint128_euint128(
      170141183460469231731683580471054505244n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463367160942109010486n);
  });

  it('test operator "sub" overload (euint128, uint128) => euint128 test 1 (340282366920938463463366176284858276059, 340282366920938463463366176284858276059)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463366176284858276059n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463366176284858276059n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint128, uint128) => euint128 test 2 (340282366920938463463366176284858276059, 340282366920938463463366176284858276055)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463366176284858276059n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463366176284858276055n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "sub" overload (uint128, euint128) => euint128 test 1 (340282366920938463463366176284858276059, 340282366920938463463366176284858276059)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463366176284858276059n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_uint128_euint128(
      340282366920938463463366176284858276059n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint128, euint128) => euint128 test 2 (340282366920938463463366176284858276059, 340282366920938463463366176284858276055)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463366176284858276055n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.sub_uint128_euint128(
      340282366920938463463366176284858276059n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint128, uint128) => euint128 test 1 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(9223372036854775809n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint128_uint128(
      encryptedAmount.handles[0],
      9223372036854775809n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (euint128, uint128) => euint128 test 2 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(9223372036854775809n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint128_uint128(
      encryptedAmount.handles[0],
      9223372036854775809n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (euint128, uint128) => euint128 test 3 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(9223372036854775809n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint128_uint128(
      encryptedAmount.handles[0],
      9223372036854775809n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (euint128, uint128) => euint128 test 4 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(9223372036854775809n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_euint128_uint128(
      encryptedAmount.handles[0],
      9223372036854775809n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (uint128, euint128) => euint128 test 1 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint128_euint128(
      9223372036854775809n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (uint128, euint128) => euint128 test 2 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint128_euint128(
      9223372036854775809n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (uint128, euint128) => euint128 test 3 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint128_euint128(
      9223372036854775809n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (uint128, euint128) => euint128 test 4 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.mul_uint128_euint128(
      9223372036854775809n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "div" overload (euint128, uint128) => euint128 test 1 (340282366920938463463368674557279794227, 340282366920938463463369128466967190503)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463368674557279794227n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463369128466967190503n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint128, uint128) => euint128 test 2 (340282366920938463463368629189392129557, 340282366920938463463368629189392129561)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463368629189392129557n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463368629189392129561n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint128, uint128) => euint128 test 3 (340282366920938463463368629189392129561, 340282366920938463463368629189392129561)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463368629189392129561n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463368629189392129561n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint128, uint128) => euint128 test 4 (340282366920938463463368629189392129561, 340282366920938463463368629189392129557)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463368629189392129561n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.div_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463368629189392129557n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint128, uint128) => euint128 test 1 (340282366920938463463365732840424960723, 340282366920938463463366949456228800563)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463365732840424960723n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463366949456228800563n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463365732840424960723n);
  });

  it('test operator "rem" overload (euint128, uint128) => euint128 test 2 (340282366920938463463365732840424960719, 340282366920938463463365732840424960723)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463365732840424960719n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463365732840424960723n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463365732840424960719n);
  });

  it('test operator "rem" overload (euint128, uint128) => euint128 test 3 (340282366920938463463365732840424960723, 340282366920938463463365732840424960723)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463365732840424960723n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463365732840424960723n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint128, uint128) => euint128 test 4 (340282366920938463463365732840424960723, 340282366920938463463365732840424960719)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463365732840424960723n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.rem_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463365732840424960719n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "and" overload (euint128, uint128) => euint128 test 1 (340282366920938463463369595602334690837, 340282366920938463463371070183781333477)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463369595602334690837n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463371070183781333477n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463366199208757438469n);
  });

  it('test operator "and" overload (euint128, uint128) => euint128 test 2 (340282366920938463463369595602334690833, 340282366920938463463369595602334690837)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463369595602334690833n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463369595602334690837n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463369595602334690833n);
  });

  it('test operator "and" overload (euint128, uint128) => euint128 test 3 (340282366920938463463369595602334690837, 340282366920938463463369595602334690837)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463369595602334690837n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463369595602334690837n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463369595602334690837n);
  });

  it('test operator "and" overload (euint128, uint128) => euint128 test 4 (340282366920938463463369595602334690837, 340282366920938463463369595602334690833)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463369595602334690837n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463369595602334690833n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463369595602334690833n);
  });

  it('test operator "and" overload (uint128, euint128) => euint128 test 1 (340282366920938463463369301140341130297, 340282366920938463463371070183781333477)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463371070183781333477n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint128_euint128(
      340282366920938463463369301140341130297n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463365922270239391777n);
  });

  it('test operator "and" overload (uint128, euint128) => euint128 test 2 (340282366920938463463369595602334690833, 340282366920938463463369595602334690837)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463369595602334690837n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint128_euint128(
      340282366920938463463369595602334690833n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463369595602334690833n);
  });

  it('test operator "and" overload (uint128, euint128) => euint128 test 3 (340282366920938463463369595602334690837, 340282366920938463463369595602334690837)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463369595602334690837n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint128_euint128(
      340282366920938463463369595602334690837n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463369595602334690837n);
  });

  it('test operator "and" overload (uint128, euint128) => euint128 test 4 (340282366920938463463369595602334690837, 340282366920938463463369595602334690833)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463369595602334690833n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.and_uint128_euint128(
      340282366920938463463369595602334690837n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463369595602334690833n);
  });

  it('test operator "or" overload (euint128, uint128) => euint128 test 1 (340282366920938463463366383493973364291, 340282366920938463463371921874194074303)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463366383493973364291n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463371921874194074303n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463372071407793295103n);
  });

  it('test operator "or" overload (euint128, uint128) => euint128 test 2 (340282366920938463463366383493973364287, 340282366920938463463366383493973364291)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463366383493973364287n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463366383493973364291n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463366383493973364351n);
  });

  it('test operator "or" overload (euint128, uint128) => euint128 test 3 (340282366920938463463366383493973364291, 340282366920938463463366383493973364291)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463366383493973364291n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463366383493973364291n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463366383493973364291n);
  });

  it('test operator "or" overload (euint128, uint128) => euint128 test 4 (340282366920938463463366383493973364291, 340282366920938463463366383493973364287)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463366383493973364291n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463366383493973364287n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463366383493973364351n);
  });

  it('test operator "or" overload (uint128, euint128) => euint128 test 1 (340282366920938463463369427985623352565, 340282366920938463463371921874194074303)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463371921874194074303n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint128_euint128(
      340282366920938463463369427985623352565n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463374604682970730239n);
  });

  it('test operator "or" overload (uint128, euint128) => euint128 test 2 (340282366920938463463366383493973364287, 340282366920938463463366383493973364291)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463366383493973364291n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint128_euint128(
      340282366920938463463366383493973364287n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463366383493973364351n);
  });

  it('test operator "or" overload (uint128, euint128) => euint128 test 3 (340282366920938463463366383493973364291, 340282366920938463463366383493973364291)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463366383493973364291n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint128_euint128(
      340282366920938463463366383493973364291n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463366383493973364291n);
  });

  it('test operator "or" overload (uint128, euint128) => euint128 test 4 (340282366920938463463366383493973364291, 340282366920938463463366383493973364287)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463366383493973364287n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.or_uint128_euint128(
      340282366920938463463366383493973364291n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463366383493973364351n);
  });

  it('test operator "xor" overload (euint128, uint128) => euint128 test 1 (340282366920938463463372711857062040329, 340282366920938463463368483743007161887)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463372711857062040329n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463368483743007161887n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(5485968242044182n);
  });

  it('test operator "xor" overload (euint128, uint128) => euint128 test 2 (340282366920938463463372711857062040325, 340282366920938463463372711857062040329)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463372711857062040325n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463372711857062040329n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint128, uint128) => euint128 test 3 (340282366920938463463372711857062040329, 340282366920938463463372711857062040329)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463372711857062040329n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463372711857062040329n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint128, uint128) => euint128 test 4 (340282366920938463463372711857062040329, 340282366920938463463372711857062040325)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463372711857062040329n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463372711857062040325n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (uint128, euint128) => euint128 test 1 (340282366920938463463372103881475441885, 340282366920938463463368483743007161887)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463368483743007161887n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint128_euint128(
      340282366920938463463372103881475441885n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(8204011860785858n);
  });

  it('test operator "xor" overload (uint128, euint128) => euint128 test 2 (340282366920938463463372711857062040325, 340282366920938463463372711857062040329)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463372711857062040329n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint128_euint128(
      340282366920938463463372711857062040325n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (uint128, euint128) => euint128 test 3 (340282366920938463463372711857062040329, 340282366920938463463372711857062040329)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463372711857062040329n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint128_euint128(
      340282366920938463463372711857062040329n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (uint128, euint128) => euint128 test 4 (340282366920938463463372711857062040329, 340282366920938463463372711857062040325)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463372711857062040325n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.xor_uint128_euint128(
      340282366920938463463372711857062040329n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint128, uint128) => ebool test 1 (340282366920938463463369341320622597283, 340282366920938463463373418161520937733)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463369341320622597283n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463373418161520937733n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, uint128) => ebool test 2 (340282366920938463463369341320622597279, 340282366920938463463369341320622597283)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463369341320622597279n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463369341320622597283n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, uint128) => ebool test 3 (340282366920938463463369341320622597283, 340282366920938463463369341320622597283)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463369341320622597283n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463369341320622597283n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint128, uint128) => ebool test 4 (340282366920938463463369341320622597283, 340282366920938463463369341320622597279)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463369341320622597283n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463369341320622597279n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint128, euint128) => ebool test 1 (340282366920938463463367057653992876707, 340282366920938463463373418161520937733)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463373418161520937733n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint128_euint128(
      340282366920938463463367057653992876707n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint128, euint128) => ebool test 2 (340282366920938463463369341320622597279, 340282366920938463463369341320622597283)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463369341320622597283n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint128_euint128(
      340282366920938463463369341320622597279n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint128, euint128) => ebool test 3 (340282366920938463463369341320622597283, 340282366920938463463369341320622597283)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463369341320622597283n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint128_euint128(
      340282366920938463463369341320622597283n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint128, euint128) => ebool test 4 (340282366920938463463369341320622597283, 340282366920938463463369341320622597279)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463369341320622597279n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint128_euint128(
      340282366920938463463369341320622597283n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, uint128) => ebool test 1 (340282366920938463463374260133194528747, 340282366920938463463367203908892193359)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463374260133194528747n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463367203908892193359n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, uint128) => ebool test 2 (340282366920938463463373207826379637445, 340282366920938463463373207826379637449)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463373207826379637445n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463373207826379637449n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, uint128) => ebool test 3 (340282366920938463463373207826379637449, 340282366920938463463373207826379637449)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463373207826379637449n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463373207826379637449n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, uint128) => ebool test 4 (340282366920938463463373207826379637449, 340282366920938463463373207826379637445)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463373207826379637449n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463373207826379637445n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint128, euint128) => ebool test 1 (340282366920938463463371907677900374123, 340282366920938463463367203908892193359)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463367203908892193359n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint128_euint128(
      340282366920938463463371907677900374123n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint128, euint128) => ebool test 2 (340282366920938463463373207826379637445, 340282366920938463463373207826379637449)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463373207826379637449n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint128_euint128(
      340282366920938463463373207826379637445n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint128, euint128) => ebool test 3 (340282366920938463463373207826379637449, 340282366920938463463373207826379637449)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463373207826379637449n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint128_euint128(
      340282366920938463463373207826379637449n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint128, euint128) => ebool test 4 (340282366920938463463373207826379637449, 340282366920938463463373207826379637445)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463373207826379637445n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint128_euint128(
      340282366920938463463373207826379637449n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, uint128) => ebool test 1 (340282366920938463463373094444544337525, 340282366920938463463367263597544337867)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463373094444544337525n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463367263597544337867n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, uint128) => ebool test 2 (340282366920938463463371109730891730525, 340282366920938463463371109730891730529)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463371109730891730525n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463371109730891730529n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint128, uint128) => ebool test 3 (340282366920938463463371109730891730529, 340282366920938463463371109730891730529)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463371109730891730529n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463371109730891730529n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, uint128) => ebool test 4 (340282366920938463463371109730891730529, 340282366920938463463371109730891730525)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463371109730891730529n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463371109730891730525n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint128, euint128) => ebool test 1 (340282366920938463463374409464149175549, 340282366920938463463367263597544337867)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463367263597544337867n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint128_euint128(
      340282366920938463463374409464149175549n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint128, euint128) => ebool test 2 (340282366920938463463371109730891730525, 340282366920938463463371109730891730529)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463371109730891730529n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint128_euint128(
      340282366920938463463371109730891730525n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (uint128, euint128) => ebool test 3 (340282366920938463463371109730891730529, 340282366920938463463371109730891730529)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463371109730891730529n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint128_euint128(
      340282366920938463463371109730891730529n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (uint128, euint128) => ebool test 4 (340282366920938463463371109730891730529, 340282366920938463463371109730891730525)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463371109730891730525n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ge_uint128_euint128(
      340282366920938463463371109730891730529n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, uint128) => ebool test 1 (340282366920938463463371550537560571237, 340282366920938463463372464315501000565)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463371550537560571237n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463372464315501000565n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, uint128) => ebool test 2 (340282366920938463463366539271318948817, 340282366920938463463366539271318948821)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463366539271318948817n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463366539271318948821n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, uint128) => ebool test 3 (340282366920938463463366539271318948821, 340282366920938463463366539271318948821)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463366539271318948821n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463366539271318948821n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, uint128) => ebool test 4 (340282366920938463463366539271318948821, 340282366920938463463366539271318948817)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463366539271318948821n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463366539271318948817n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (uint128, euint128) => ebool test 1 (340282366920938463463367036385764436085, 340282366920938463463372464315501000565)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463372464315501000565n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint128_euint128(
      340282366920938463463367036385764436085n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint128, euint128) => ebool test 2 (340282366920938463463366539271318948817, 340282366920938463463366539271318948821)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463366539271318948821n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint128_euint128(
      340282366920938463463366539271318948817n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint128, euint128) => ebool test 3 (340282366920938463463366539271318948821, 340282366920938463463366539271318948821)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463366539271318948821n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint128_euint128(
      340282366920938463463366539271318948821n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (uint128, euint128) => ebool test 4 (340282366920938463463366539271318948821, 340282366920938463463366539271318948817)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463366539271318948817n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.gt_uint128_euint128(
      340282366920938463463366539271318948821n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, uint128) => ebool test 1 (340282366920938463463371225510804102607, 340282366920938463463372712747087659243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463371225510804102607n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463372712747087659243n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, uint128) => ebool test 2 (340282366920938463463367547641750712619, 340282366920938463463367547641750712623)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463367547641750712619n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463367547641750712623n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, uint128) => ebool test 3 (340282366920938463463367547641750712623, 340282366920938463463367547641750712623)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463367547641750712623n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463367547641750712623n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, uint128) => ebool test 4 (340282366920938463463367547641750712623, 340282366920938463463367547641750712619)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463367547641750712623n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463367547641750712619n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint128, euint128) => ebool test 1 (340282366920938463463373595764159680903, 340282366920938463463372712747087659243)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463372712747087659243n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint128_euint128(
      340282366920938463463373595764159680903n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (uint128, euint128) => ebool test 2 (340282366920938463463367547641750712619, 340282366920938463463367547641750712623)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463367547641750712623n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint128_euint128(
      340282366920938463463367547641750712619n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint128, euint128) => ebool test 3 (340282366920938463463367547641750712623, 340282366920938463463367547641750712623)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463367547641750712623n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint128_euint128(
      340282366920938463463367547641750712623n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (uint128, euint128) => ebool test 4 (340282366920938463463367547641750712623, 340282366920938463463367547641750712619)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463367547641750712619n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.le_uint128_euint128(
      340282366920938463463367547641750712623n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, uint128) => ebool test 1 (340282366920938463463373402487778254921, 340282366920938463463367094321073449681)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463373402487778254921n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463367094321073449681n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, uint128) => ebool test 2 (340282366920938463463370673861262887367, 340282366920938463463370673861262887371)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463370673861262887367n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463370673861262887371n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint128, uint128) => ebool test 3 (340282366920938463463370673861262887371, 340282366920938463463370673861262887371)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463370673861262887371n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463370673861262887371n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, uint128) => ebool test 4 (340282366920938463463370673861262887371, 340282366920938463463370673861262887367)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463370673861262887371n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463370673861262887367n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint128, euint128) => ebool test 1 (340282366920938463463366834422073898567, 340282366920938463463367094321073449681)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463367094321073449681n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint128_euint128(
      340282366920938463463366834422073898567n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint128, euint128) => ebool test 2 (340282366920938463463370673861262887367, 340282366920938463463370673861262887371)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463370673861262887371n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint128_euint128(
      340282366920938463463370673861262887367n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (uint128, euint128) => ebool test 3 (340282366920938463463370673861262887371, 340282366920938463463370673861262887371)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463370673861262887371n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint128_euint128(
      340282366920938463463370673861262887371n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (uint128, euint128) => ebool test 4 (340282366920938463463370673861262887371, 340282366920938463463370673861262887367)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463370673861262887367n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.lt_uint128_euint128(
      340282366920938463463370673861262887371n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint128, uint128) => euint128 test 1 (340282366920938463463374521421549503473, 340282366920938463463374365607984863343)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463374521421549503473n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463374365607984863343n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463374365607984863343n);
  });

  it('test operator "min" overload (euint128, uint128) => euint128 test 2 (340282366920938463463365934575807890533, 340282366920938463463365934575807890537)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463365934575807890533n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463365934575807890537n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463365934575807890533n);
  });

  it('test operator "min" overload (euint128, uint128) => euint128 test 3 (340282366920938463463365934575807890537, 340282366920938463463365934575807890537)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463365934575807890537n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463365934575807890537n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463365934575807890537n);
  });

  it('test operator "min" overload (euint128, uint128) => euint128 test 4 (340282366920938463463365934575807890537, 340282366920938463463365934575807890533)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463365934575807890537n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463365934575807890533n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463365934575807890533n);
  });

  it('test operator "min" overload (uint128, euint128) => euint128 test 1 (340282366920938463463370116216079159827, 340282366920938463463374365607984863343)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463374365607984863343n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint128_euint128(
      340282366920938463463370116216079159827n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463370116216079159827n);
  });

  it('test operator "min" overload (uint128, euint128) => euint128 test 2 (340282366920938463463365934575807890533, 340282366920938463463365934575807890537)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463365934575807890537n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint128_euint128(
      340282366920938463463365934575807890533n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463365934575807890533n);
  });

  it('test operator "min" overload (uint128, euint128) => euint128 test 3 (340282366920938463463365934575807890537, 340282366920938463463365934575807890537)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463365934575807890537n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint128_euint128(
      340282366920938463463365934575807890537n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463365934575807890537n);
  });

  it('test operator "min" overload (uint128, euint128) => euint128 test 4 (340282366920938463463365934575807890537, 340282366920938463463365934575807890533)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463365934575807890533n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.min_uint128_euint128(
      340282366920938463463365934575807890537n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463365934575807890533n);
  });

  it('test operator "max" overload (euint128, uint128) => euint128 test 1 (340282366920938463463368911375098628099, 340282366920938463463371350604967263505)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463368911375098628099n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463371350604967263505n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463371350604967263505n);
  });

  it('test operator "max" overload (euint128, uint128) => euint128 test 2 (340282366920938463463368442504189657813, 340282366920938463463368442504189657817)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463368442504189657813n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463368442504189657817n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463368442504189657817n);
  });

  it('test operator "max" overload (euint128, uint128) => euint128 test 3 (340282366920938463463368442504189657817, 340282366920938463463368442504189657817)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463368442504189657817n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463368442504189657817n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463368442504189657817n);
  });

  it('test operator "max" overload (euint128, uint128) => euint128 test 4 (340282366920938463463368442504189657817, 340282366920938463463368442504189657813)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add128(340282366920938463463368442504189657817n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_euint128_uint128(
      encryptedAmount.handles[0],
      340282366920938463463368442504189657813n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463368442504189657817n);
  });

  it('test operator "max" overload (uint128, euint128) => euint128 test 1 (340282366920938463463373232374547678547, 340282366920938463463371350604967263505)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463371350604967263505n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint128_euint128(
      340282366920938463463373232374547678547n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463373232374547678547n);
  });

  it('test operator "max" overload (uint128, euint128) => euint128 test 2 (340282366920938463463368442504189657813, 340282366920938463463368442504189657817)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463368442504189657817n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint128_euint128(
      340282366920938463463368442504189657813n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463368442504189657817n);
  });

  it('test operator "max" overload (uint128, euint128) => euint128 test 3 (340282366920938463463368442504189657817, 340282366920938463463368442504189657817)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463368442504189657817n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint128_euint128(
      340282366920938463463368442504189657817n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463368442504189657817n);
  });

  it('test operator "max" overload (uint128, euint128) => euint128 test 4 (340282366920938463463368442504189657817, 340282366920938463463368442504189657813)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add128(340282366920938463463368442504189657813n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.max_uint128_euint128(
      340282366920938463463368442504189657817n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract6.resEuint128());
    expect(res).to.equal(340282366920938463463368442504189657817n);
  });

  it('test operator "eq" overload (euint256, uint256) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457580923518383388271, 115792089237316195423570985008687907853269984665640564039457579292328994784675)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388271n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint256_uint256(
      encryptedAmount.handles[0],
      115792089237316195423570985008687907853269984665640564039457579292328994784675n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, uint256) => ebool test 2 (115792089237316195423570985008687907853269984665640564039457580923518383388267, 115792089237316195423570985008687907853269984665640564039457580923518383388271)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388267n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint256_uint256(
      encryptedAmount.handles[0],
      115792089237316195423570985008687907853269984665640564039457580923518383388271n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, uint256) => ebool test 3 (115792089237316195423570985008687907853269984665640564039457580923518383388271, 115792089237316195423570985008687907853269984665640564039457580923518383388271)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388271n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint256_uint256(
      encryptedAmount.handles[0],
      115792089237316195423570985008687907853269984665640564039457580923518383388271n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, uint256) => ebool test 4 (115792089237316195423570985008687907853269984665640564039457580923518383388271, 115792089237316195423570985008687907853269984665640564039457580923518383388267)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388271n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_euint256_uint256(
      encryptedAmount.handles[0],
      115792089237316195423570985008687907853269984665640564039457580923518383388267n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint256, euint256) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457580146761358295109, 115792089237316195423570985008687907853269984665640564039457579292328994784675)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add256(115792089237316195423570985008687907853269984665640564039457579292328994784675n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint256_euint256(
      115792089237316195423570985008687907853269984665640564039457580146761358295109n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint256, euint256) => ebool test 2 (115792089237316195423570985008687907853269984665640564039457580923518383388267, 115792089237316195423570985008687907853269984665640564039457580923518383388271)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388271n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint256_euint256(
      115792089237316195423570985008687907853269984665640564039457580923518383388267n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (uint256, euint256) => ebool test 3 (115792089237316195423570985008687907853269984665640564039457580923518383388271, 115792089237316195423570985008687907853269984665640564039457580923518383388271)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388271n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint256_euint256(
      115792089237316195423570985008687907853269984665640564039457580923518383388271n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (uint256, euint256) => ebool test 4 (115792089237316195423570985008687907853269984665640564039457580923518383388271, 115792089237316195423570985008687907853269984665640564039457580923518383388267)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388267n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.eq_uint256_euint256(
      115792089237316195423570985008687907853269984665640564039457580923518383388271n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, uint256) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457575905150736621917, 115792089237316195423570985008687907853269984665640564039457582213156444190905)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621917n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint256_uint256(
      encryptedAmount.handles[0],
      115792089237316195423570985008687907853269984665640564039457582213156444190905n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, uint256) => ebool test 2 (115792089237316195423570985008687907853269984665640564039457575905150736621913, 115792089237316195423570985008687907853269984665640564039457575905150736621917)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621913n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint256_uint256(
      encryptedAmount.handles[0],
      115792089237316195423570985008687907853269984665640564039457575905150736621917n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, uint256) => ebool test 3 (115792089237316195423570985008687907853269984665640564039457575905150736621917, 115792089237316195423570985008687907853269984665640564039457575905150736621917)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621917n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint256_uint256(
      encryptedAmount.handles[0],
      115792089237316195423570985008687907853269984665640564039457575905150736621917n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, uint256) => ebool test 4 (115792089237316195423570985008687907853269984665640564039457575905150736621917, 115792089237316195423570985008687907853269984665640564039457575905150736621913)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621917n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_euint256_uint256(
      encryptedAmount.handles[0],
      115792089237316195423570985008687907853269984665640564039457575905150736621913n,
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint256, euint256) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457580728441652749885, 115792089237316195423570985008687907853269984665640564039457582213156444190905)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add256(115792089237316195423570985008687907853269984665640564039457582213156444190905n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint256_euint256(
      115792089237316195423570985008687907853269984665640564039457580728441652749885n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint256, euint256) => ebool test 2 (115792089237316195423570985008687907853269984665640564039457575905150736621913, 115792089237316195423570985008687907853269984665640564039457575905150736621917)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621917n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint256_euint256(
      115792089237316195423570985008687907853269984665640564039457575905150736621913n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (uint256, euint256) => ebool test 3 (115792089237316195423570985008687907853269984665640564039457575905150736621917, 115792089237316195423570985008687907853269984665640564039457575905150736621917)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621917n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint256_euint256(
      115792089237316195423570985008687907853269984665640564039457575905150736621917n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (uint256, euint256) => ebool test 4 (115792089237316195423570985008687907853269984665640564039457575905150736621917, 115792089237316195423570985008687907853269984665640564039457575905150736621913)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);

    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621913n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.ne_uint256_euint256(
      115792089237316195423570985008687907853269984665640564039457575905150736621917n,
      encryptedAmount.handles[0],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract6.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "shl" overload (euint8, euint8) => euint8 test 1 (69, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add8(69n);
    input.add8(9n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.shl_euint8_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt8(await this.contract6.resEuint8());
    expect(res).to.equal(138n);
  });

  it('test operator "shl" overload (euint8, euint8) => euint8 test 2 (5, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add8(5n);
    input.add8(9n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.shl_euint8_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt8(await this.contract6.resEuint8());
    expect(res).to.equal(10n);
  });

  it('test operator "shl" overload (euint8, euint8) => euint8 test 3 (9, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add8(9n);
    input.add8(9n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.shl_euint8_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt8(await this.contract6.resEuint8());
    expect(res).to.equal(18n);
  });

  it('test operator "shl" overload (euint8, euint8) => euint8 test 4 (9, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add8(9n);
    input.add8(5n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.shl_euint8_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt8(await this.contract6.resEuint8());
    expect(res).to.equal(32n);
  });

  it('test operator "shl" overload (euint8, uint8) => euint8 test 1 (69, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add8(69n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.shl_euint8_uint8(encryptedAmount.handles[0], 9n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract6.resEuint8());
    expect(res).to.equal(138n);
  });

  it('test operator "shl" overload (euint8, uint8) => euint8 test 2 (5, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add8(5n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.shl_euint8_uint8(encryptedAmount.handles[0], 9n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract6.resEuint8());
    expect(res).to.equal(10n);
  });

  it('test operator "shl" overload (euint8, uint8) => euint8 test 3 (9, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add8(9n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.shl_euint8_uint8(encryptedAmount.handles[0], 9n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract6.resEuint8());
    expect(res).to.equal(18n);
  });

  it('test operator "shl" overload (euint8, uint8) => euint8 test 4 (9, 5)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract6Address, this.signers.alice.address);
    input.add8(9n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract6.shl_euint8_uint8(encryptedAmount.handles[0], 5n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract6.resEuint8());
    expect(res).to.equal(32n);
  });
});
