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

describe('TFHE operations 8', function () {
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

  it('test operator "eq" overload (euint128, euint64) => ebool test 1 (340282366920938463463369572125585654169, 18445264876645949351)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369572125585654169n);
    input.add64(18445264876645949351n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint64) => ebool test 2 (18445264876645949347, 18445264876645949351)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18445264876645949347n);
    input.add64(18445264876645949351n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint64) => ebool test 3 (18445264876645949351, 18445264876645949351)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18445264876645949351n);
    input.add64(18445264876645949351n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint128, euint64) => ebool test 4 (18445264876645949351, 18445264876645949347)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18445264876645949351n);
    input.add64(18445264876645949347n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint64) => ebool test 1 (340282366920938463463372365154055728843, 18444841576501645519)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463372365154055728843n);
    input.add64(18444841576501645519n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint64) => ebool test 2 (18444841576501645515, 18444841576501645519)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444841576501645515n);
    input.add64(18444841576501645519n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint64) => ebool test 3 (18444841576501645519, 18444841576501645519)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444841576501645519n);
    input.add64(18444841576501645519n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint64) => ebool test 4 (18444841576501645519, 18444841576501645515)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444841576501645519n);
    input.add64(18444841576501645515n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint64) => ebool test 1 (340282366920938463463370019730377895251, 18442187850834028027)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370019730377895251n);
    input.add64(18442187850834028027n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint64) => ebool test 2 (18442187850834028023, 18442187850834028027)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442187850834028023n);
    input.add64(18442187850834028027n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint128, euint64) => ebool test 3 (18442187850834028027, 18442187850834028027)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442187850834028027n);
    input.add64(18442187850834028027n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint64) => ebool test 4 (18442187850834028027, 18442187850834028023)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442187850834028027n);
    input.add64(18442187850834028023n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint64) => ebool test 1 (340282366920938463463369875938282365353, 18444284382497755697)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369875938282365353n);
    input.add64(18444284382497755697n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint64) => ebool test 2 (18444284382497755693, 18444284382497755697)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444284382497755693n);
    input.add64(18444284382497755697n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint64) => ebool test 3 (18444284382497755697, 18444284382497755697)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444284382497755697n);
    input.add64(18444284382497755697n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint64) => ebool test 4 (18444284382497755697, 18444284382497755693)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444284382497755697n);
    input.add64(18444284382497755693n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint64) => ebool test 1 (340282366920938463463371828811621686703, 18442521642867005483)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371828811621686703n);
    input.add64(18442521642867005483n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint128, euint64) => ebool test 2 (18442521642867005479, 18442521642867005483)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442521642867005479n);
    input.add64(18442521642867005483n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint64) => ebool test 3 (18442521642867005483, 18442521642867005483)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442521642867005483n);
    input.add64(18442521642867005483n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint64) => ebool test 4 (18442521642867005483, 18442521642867005479)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442521642867005483n);
    input.add64(18442521642867005479n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint64) => ebool test 1 (340282366920938463463366563991249420183, 18443951374592504659)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366563991249420183n);
    input.add64(18443951374592504659n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint64) => ebool test 2 (18443951374592504655, 18443951374592504659)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18443951374592504655n);
    input.add64(18443951374592504659n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint128, euint64) => ebool test 3 (18443951374592504659, 18443951374592504659)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18443951374592504659n);
    input.add64(18443951374592504659n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint64) => ebool test 4 (18443951374592504659, 18443951374592504655)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18443951374592504659n);
    input.add64(18443951374592504655n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint128, euint64) => euint128 test 1 (340282366920938463463372406026227436383, 18442284276482216205)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463372406026227436383n);
    input.add64(18442284276482216205n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442284276482216205n);
  });

  it('test operator "min" overload (euint128, euint64) => euint128 test 2 (18442284276482216201, 18442284276482216205)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442284276482216201n);
    input.add64(18442284276482216205n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442284276482216201n);
  });

  it('test operator "min" overload (euint128, euint64) => euint128 test 3 (18442284276482216205, 18442284276482216205)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442284276482216205n);
    input.add64(18442284276482216205n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442284276482216205n);
  });

  it('test operator "min" overload (euint128, euint64) => euint128 test 4 (18442284276482216205, 18442284276482216201)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18442284276482216205n);
    input.add64(18442284276482216201n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18442284276482216201n);
  });

  it('test operator "max" overload (euint128, euint64) => euint128 test 1 (340282366920938463463367883658073767655, 18444796668987800073)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463367883658073767655n);
    input.add64(18444796668987800073n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463367883658073767655n);
  });

  it('test operator "max" overload (euint128, euint64) => euint128 test 2 (18444796668987800069, 18444796668987800073)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444796668987800069n);
    input.add64(18444796668987800073n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18444796668987800073n);
  });

  it('test operator "max" overload (euint128, euint64) => euint128 test 3 (18444796668987800073, 18444796668987800073)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444796668987800073n);
    input.add64(18444796668987800073n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18444796668987800073n);
  });

  it('test operator "max" overload (euint128, euint64) => euint128 test 4 (18444796668987800073, 18444796668987800069)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(18444796668987800073n);
    input.add64(18444796668987800069n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(18444796668987800073n);
  });

  it('test operator "add" overload (euint128, euint128) => euint128 test 1 (170141183460469231731683580471054505244, 170141183460469231731685394008170154317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(170141183460469231731683580471054505244n);
    input.add128(170141183460469231731685394008170154317n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463368974479224659561n);
  });

  it('test operator "add" overload (euint128, euint128) => euint128 test 2 (170141183460469231731683580471054505242, 170141183460469231731683580471054505244)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(170141183460469231731683580471054505242n);
    input.add128(170141183460469231731683580471054505244n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463367160942109010486n);
  });

  it('test operator "add" overload (euint128, euint128) => euint128 test 3 (170141183460469231731683580471054505244, 170141183460469231731683580471054505244)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(170141183460469231731683580471054505244n);
    input.add128(170141183460469231731683580471054505244n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463367160942109010488n);
  });

  it('test operator "add" overload (euint128, euint128) => euint128 test 4 (170141183460469231731683580471054505244, 170141183460469231731683580471054505242)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(170141183460469231731683580471054505244n);
    input.add128(170141183460469231731683580471054505242n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.add_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463367160942109010486n);
  });

  it('test operator "sub" overload (euint128, euint128) => euint128 test 1 (340282366920938463463366176284858276059, 340282366920938463463366176284858276059)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366176284858276059n);
    input.add128(340282366920938463463366176284858276059n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint128, euint128) => euint128 test 2 (340282366920938463463366176284858276059, 340282366920938463463366176284858276055)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366176284858276059n);
    input.add128(340282366920938463463366176284858276055n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.sub_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint128, euint128) => euint128 test 1 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9223372036854775809n);
    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (euint128, euint128) => euint128 test 2 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9223372036854775809n);
    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (euint128, euint128) => euint128 test 3 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9223372036854775809n);
    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "mul" overload (euint128, euint128) => euint128 test 4 (9223372036854775809, 9223372036854775809)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(9223372036854775809n);
    input.add128(9223372036854775809n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.mul_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(85070591730234615884290395931651604481n);
  });

  it('test operator "and" overload (euint128, euint128) => euint128 test 1 (340282366920938463463369595602334690837, 340282366920938463463374183106553002347)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369595602334690837n);
    input.add128(340282366920938463463374183106553002347n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463369593676030289921n);
  });

  it('test operator "and" overload (euint128, euint128) => euint128 test 2 (340282366920938463463369595602334690833, 340282366920938463463369595602334690837)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369595602334690833n);
    input.add128(340282366920938463463369595602334690837n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463369595602334690833n);
  });

  it('test operator "and" overload (euint128, euint128) => euint128 test 3 (340282366920938463463369595602334690837, 340282366920938463463369595602334690837)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369595602334690837n);
    input.add128(340282366920938463463369595602334690837n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463369595602334690837n);
  });

  it('test operator "and" overload (euint128, euint128) => euint128 test 4 (340282366920938463463369595602334690837, 340282366920938463463369595602334690833)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369595602334690837n);
    input.add128(340282366920938463463369595602334690833n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.and_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463369595602334690833n);
  });

  it('test operator "or" overload (euint128, euint128) => euint128 test 1 (340282366920938463463366383493973364291, 340282366920938463463367816467597422887)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366383493973364291n);
    input.add128(340282366920938463463367816467597422887n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463367816845639810919n);
  });

  it('test operator "or" overload (euint128, euint128) => euint128 test 2 (340282366920938463463366383493973364287, 340282366920938463463366383493973364291)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366383493973364287n);
    input.add128(340282366920938463463366383493973364291n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463366383493973364351n);
  });

  it('test operator "or" overload (euint128, euint128) => euint128 test 3 (340282366920938463463366383493973364291, 340282366920938463463366383493973364291)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366383493973364291n);
    input.add128(340282366920938463463366383493973364291n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463366383493973364291n);
  });

  it('test operator "or" overload (euint128, euint128) => euint128 test 4 (340282366920938463463366383493973364291, 340282366920938463463366383493973364287)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366383493973364291n);
    input.add128(340282366920938463463366383493973364287n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.or_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463366383493973364351n);
  });

  it('test operator "xor" overload (euint128, euint128) => euint128 test 1 (340282366920938463463372711857062040329, 340282366920938463463374090838451285259)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463372711857062040329n);
    input.add128(340282366920938463463374090838451285259n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(2086688925400578n);
  });

  it('test operator "xor" overload (euint128, euint128) => euint128 test 2 (340282366920938463463372711857062040325, 340282366920938463463372711857062040329)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463372711857062040325n);
    input.add128(340282366920938463463372711857062040329n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(12n);
  });

  it('test operator "xor" overload (euint128, euint128) => euint128 test 3 (340282366920938463463372711857062040329, 340282366920938463463372711857062040329)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463372711857062040329n);
    input.add128(340282366920938463463372711857062040329n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(0n);
  });

  it('test operator "xor" overload (euint128, euint128) => euint128 test 4 (340282366920938463463372711857062040329, 340282366920938463463372711857062040325)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463372711857062040329n);
    input.add128(340282366920938463463372711857062040325n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.xor_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(12n);
  });

  it('test operator "eq" overload (euint128, euint128) => ebool test 1 (340282366920938463463369341320622597283, 340282366920938463463369579806195678799)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369341320622597283n);
    input.add128(340282366920938463463369579806195678799n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint128) => ebool test 2 (340282366920938463463369341320622597279, 340282366920938463463369341320622597283)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369341320622597279n);
    input.add128(340282366920938463463369341320622597283n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint128) => ebool test 3 (340282366920938463463369341320622597283, 340282366920938463463369341320622597283)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369341320622597283n);
    input.add128(340282366920938463463369341320622597283n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint128, euint128) => ebool test 4 (340282366920938463463369341320622597283, 340282366920938463463369341320622597279)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463369341320622597283n);
    input.add128(340282366920938463463369341320622597279n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint128) => ebool test 1 (340282366920938463463374260133194528747, 340282366920938463463373207826379637449)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463374260133194528747n);
    input.add128(340282366920938463463373207826379637449n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint128) => ebool test 2 (340282366920938463463373207826379637445, 340282366920938463463373207826379637449)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373207826379637445n);
    input.add128(340282366920938463463373207826379637449n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint128) => ebool test 3 (340282366920938463463373207826379637449, 340282366920938463463373207826379637449)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373207826379637449n);
    input.add128(340282366920938463463373207826379637449n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint128) => ebool test 4 (340282366920938463463373207826379637449, 340282366920938463463373207826379637445)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373207826379637449n);
    input.add128(340282366920938463463373207826379637445n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint128) => ebool test 1 (340282366920938463463373094444544337525, 340282366920938463463371109730891730529)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373094444544337525n);
    input.add128(340282366920938463463371109730891730529n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint128) => ebool test 2 (340282366920938463463371109730891730525, 340282366920938463463371109730891730529)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371109730891730525n);
    input.add128(340282366920938463463371109730891730529n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ge" overload (euint128, euint128) => ebool test 3 (340282366920938463463371109730891730529, 340282366920938463463371109730891730529)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371109730891730529n);
    input.add128(340282366920938463463371109730891730529n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ge" overload (euint128, euint128) => ebool test 4 (340282366920938463463371109730891730529, 340282366920938463463371109730891730525)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371109730891730529n);
    input.add128(340282366920938463463371109730891730525n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ge_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint128) => ebool test 1 (340282366920938463463371550537560571237, 340282366920938463463366539271318948821)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371550537560571237n);
    input.add128(340282366920938463463366539271318948821n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "gt" overload (euint128, euint128) => ebool test 2 (340282366920938463463366539271318948817, 340282366920938463463366539271318948821)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366539271318948817n);
    input.add128(340282366920938463463366539271318948821n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint128) => ebool test 3 (340282366920938463463366539271318948821, 340282366920938463463366539271318948821)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366539271318948821n);
    input.add128(340282366920938463463366539271318948821n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "gt" overload (euint128, euint128) => ebool test 4 (340282366920938463463366539271318948821, 340282366920938463463366539271318948817)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463366539271318948821n);
    input.add128(340282366920938463463366539271318948817n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.gt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint128) => ebool test 1 (340282366920938463463371225510804102607, 340282366920938463463367547641750712623)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371225510804102607n);
    input.add128(340282366920938463463367547641750712623n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "le" overload (euint128, euint128) => ebool test 2 (340282366920938463463367547641750712619, 340282366920938463463367547641750712623)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463367547641750712619n);
    input.add128(340282366920938463463367547641750712623n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint128) => ebool test 3 (340282366920938463463367547641750712623, 340282366920938463463367547641750712623)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463367547641750712623n);
    input.add128(340282366920938463463367547641750712623n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "le" overload (euint128, euint128) => ebool test 4 (340282366920938463463367547641750712623, 340282366920938463463367547641750712619)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463367547641750712623n);
    input.add128(340282366920938463463367547641750712619n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.le_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint128) => ebool test 1 (340282366920938463463373402487778254921, 340282366920938463463370673861262887371)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463373402487778254921n);
    input.add128(340282366920938463463370673861262887371n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint128) => ebool test 2 (340282366920938463463370673861262887367, 340282366920938463463370673861262887371)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370673861262887367n);
    input.add128(340282366920938463463370673861262887371n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "lt" overload (euint128, euint128) => ebool test 3 (340282366920938463463370673861262887371, 340282366920938463463370673861262887371)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370673861262887371n);
    input.add128(340282366920938463463370673861262887371n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "lt" overload (euint128, euint128) => ebool test 4 (340282366920938463463370673861262887371, 340282366920938463463370673861262887367)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463370673861262887371n);
    input.add128(340282366920938463463370673861262887367n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.lt_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "min" overload (euint128, euint128) => euint128 test 1 (340282366920938463463374521421549503473, 340282366920938463463365934575807890537)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463374521421549503473n);
    input.add128(340282366920938463463365934575807890537n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463365934575807890537n);
  });

  it('test operator "min" overload (euint128, euint128) => euint128 test 2 (340282366920938463463365934575807890533, 340282366920938463463365934575807890537)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463365934575807890533n);
    input.add128(340282366920938463463365934575807890537n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463365934575807890533n);
  });

  it('test operator "min" overload (euint128, euint128) => euint128 test 3 (340282366920938463463365934575807890537, 340282366920938463463365934575807890537)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463365934575807890537n);
    input.add128(340282366920938463463365934575807890537n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463365934575807890537n);
  });

  it('test operator "min" overload (euint128, euint128) => euint128 test 4 (340282366920938463463365934575807890537, 340282366920938463463365934575807890533)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463365934575807890537n);
    input.add128(340282366920938463463365934575807890533n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.min_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463365934575807890533n);
  });

  it('test operator "max" overload (euint128, euint128) => euint128 test 1 (340282366920938463463368911375098628099, 340282366920938463463368442504189657817)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368911375098628099n);
    input.add128(340282366920938463463368442504189657817n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463368911375098628099n);
  });

  it('test operator "max" overload (euint128, euint128) => euint128 test 2 (340282366920938463463368442504189657813, 340282366920938463463368442504189657817)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368442504189657813n);
    input.add128(340282366920938463463368442504189657817n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463368442504189657817n);
  });

  it('test operator "max" overload (euint128, euint128) => euint128 test 3 (340282366920938463463368442504189657817, 340282366920938463463368442504189657817)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368442504189657817n);
    input.add128(340282366920938463463368442504189657817n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463368442504189657817n);
  });

  it('test operator "max" overload (euint128, euint128) => euint128 test 4 (340282366920938463463368442504189657817, 340282366920938463463368442504189657813)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368442504189657817n);
    input.add128(340282366920938463463368442504189657813n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.max_euint128_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decrypt128(await this.contract4.resEuint128());
    expect(res).to.equal(340282366920938463463368442504189657817n);
  });

  it('test operator "eq" overload (euint128, euint256) => ebool test 1 (340282366920938463463371130667999715701, 115792089237316195423570985008687907853269984665640564039457580671203593051253)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371130667999715701n);
    input.add256(115792089237316195423570985008687907853269984665640564039457580671203593051253n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint256) => ebool test 2 (340282366920938463463371130667999715697, 340282366920938463463371130667999715701)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371130667999715697n);
    input.add256(340282366920938463463371130667999715701n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint128, euint256) => ebool test 3 (340282366920938463463371130667999715701, 340282366920938463463371130667999715701)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371130667999715701n);
    input.add256(340282366920938463463371130667999715701n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint128, euint256) => ebool test 4 (340282366920938463463371130667999715701, 340282366920938463463371130667999715697)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463371130667999715701n);
    input.add256(340282366920938463463371130667999715697n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.eq_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint256) => ebool test 1 (340282366920938463463368551021934762141, 115792089237316195423570985008687907853269984665640564039457581127270304473469)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368551021934762141n);
    input.add256(115792089237316195423570985008687907853269984665640564039457581127270304473469n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint256) => ebool test 2 (340282366920938463463368551021934762137, 340282366920938463463368551021934762141)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368551021934762137n);
    input.add256(340282366920938463463368551021934762141n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint128, euint256) => ebool test 3 (340282366920938463463368551021934762141, 340282366920938463463368551021934762141)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368551021934762141n);
    input.add256(340282366920938463463368551021934762141n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint128, euint256) => ebool test 4 (340282366920938463463368551021934762141, 340282366920938463463368551021934762137)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract4Address, this.signers.alice.address);
    input.add128(340282366920938463463368551021934762141n);
    input.add256(340282366920938463463368551021934762137n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract4.ne_euint128_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract4.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint8) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457582150614615118403, 102)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582150614615118403n);
    input.add8(102n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint8) => ebool test 2 (98, 102)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(98n);
    input.add8(102n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint8) => ebool test 3 (102, 102)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(102n);
    input.add8(102n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint8) => ebool test 4 (102, 98)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(102n);
    input.add8(98n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint8) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457578997499360269247, 52)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457578997499360269247n);
    input.add8(52n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint8) => ebool test 2 (48, 52)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(48n);
    input.add8(52n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint8) => ebool test 3 (52, 52)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(52n);
    input.add8(52n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint8) => ebool test 4 (52, 48)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(52n);
    input.add8(48n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint8(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint16) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457582048869454828187, 17635)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582048869454828187n);
    input.add16(17635n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint16) => ebool test 2 (17631, 17635)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(17631n);
    input.add16(17635n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint16) => ebool test 3 (17635, 17635)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(17635n);
    input.add16(17635n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint16) => ebool test 4 (17635, 17631)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(17635n);
    input.add16(17631n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint16) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457582522094525279937, 54126)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582522094525279937n);
    input.add16(54126n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint16) => ebool test 2 (54122, 54126)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(54122n);
    input.add16(54126n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint16) => ebool test 3 (54126, 54126)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(54126n);
    input.add16(54126n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint16) => ebool test 4 (54126, 54122)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(54126n);
    input.add16(54122n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint16(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint32) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457578896656034889517, 2190842194)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457578896656034889517n);
    input.add32(2190842194n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint32) => ebool test 2 (2190842190, 2190842194)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2190842190n);
    input.add32(2190842194n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint32) => ebool test 3 (2190842194, 2190842194)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2190842194n);
    input.add32(2190842194n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint32) => ebool test 4 (2190842194, 2190842190)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(2190842194n);
    input.add32(2190842190n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint32) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457583720613042692353, 3655160826)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457583720613042692353n);
    input.add32(3655160826n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint32) => ebool test 2 (3655160822, 3655160826)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(3655160822n);
    input.add32(3655160826n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint32) => ebool test 3 (3655160826, 3655160826)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(3655160826n);
    input.add32(3655160826n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint32) => ebool test 4 (3655160826, 3655160822)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(3655160826n);
    input.add32(3655160822n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint32(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint64) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457583220018582979239, 18441454671171755321)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457583220018582979239n);
    input.add64(18441454671171755321n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint64) => ebool test 2 (18441454671171755317, 18441454671171755321)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18441454671171755317n);
    input.add64(18441454671171755321n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint64) => ebool test 3 (18441454671171755321, 18441454671171755321)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18441454671171755321n);
    input.add64(18441454671171755321n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint64) => ebool test 4 (18441454671171755321, 18441454671171755317)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18441454671171755321n);
    input.add64(18441454671171755317n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint64) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457582161255322535097, 18439400538883069021)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582161255322535097n);
    input.add64(18439400538883069021n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint64) => ebool test 2 (18439400538883069017, 18439400538883069021)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18439400538883069017n);
    input.add64(18439400538883069021n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint64) => ebool test 3 (18439400538883069021, 18439400538883069021)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18439400538883069021n);
    input.add64(18439400538883069021n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint64) => ebool test 4 (18439400538883069021, 18439400538883069017)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(18439400538883069021n);
    input.add64(18439400538883069017n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint64(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint128) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457577931081827363047, 340282366920938463463369546775196226461)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457577931081827363047n);
    input.add128(340282366920938463463369546775196226461n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint128) => ebool test 2 (340282366920938463463369546775196226457, 340282366920938463463369546775196226461)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463369546775196226457n);
    input.add128(340282366920938463463369546775196226461n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint128) => ebool test 3 (340282366920938463463369546775196226461, 340282366920938463463369546775196226461)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463369546775196226461n);
    input.add128(340282366920938463463369546775196226461n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint128) => ebool test 4 (340282366920938463463369546775196226461, 340282366920938463463369546775196226457)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463369546775196226461n);
    input.add128(340282366920938463463369546775196226457n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint128) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457582810868403161319, 340282366920938463463371906385092701177)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457582810868403161319n);
    input.add128(340282366920938463463371906385092701177n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint128) => ebool test 2 (340282366920938463463371906385092701173, 340282366920938463463371906385092701177)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463371906385092701173n);
    input.add128(340282366920938463463371906385092701177n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint128) => ebool test 3 (340282366920938463463371906385092701177, 340282366920938463463371906385092701177)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463371906385092701177n);
    input.add128(340282366920938463463371906385092701177n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint128) => ebool test 4 (340282366920938463463371906385092701177, 340282366920938463463371906385092701173)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(340282366920938463463371906385092701177n);
    input.add128(340282366920938463463371906385092701173n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint128(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint256) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457580923518383388271, 115792089237316195423570985008687907853269984665640564039457582714973368291309)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388271n);
    input.add256(115792089237316195423570985008687907853269984665640564039457582714973368291309n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint256) => ebool test 2 (115792089237316195423570985008687907853269984665640564039457580923518383388267, 115792089237316195423570985008687907853269984665640564039457580923518383388271)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388267n);
    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388271n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "eq" overload (euint256, euint256) => ebool test 3 (115792089237316195423570985008687907853269984665640564039457580923518383388271, 115792089237316195423570985008687907853269984665640564039457580923518383388271)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388271n);
    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388271n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "eq" overload (euint256, euint256) => ebool test 4 (115792089237316195423570985008687907853269984665640564039457580923518383388271, 115792089237316195423570985008687907853269984665640564039457580923518383388267)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388271n);
    input.add256(115792089237316195423570985008687907853269984665640564039457580923518383388267n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.eq_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint256) => ebool test 1 (115792089237316195423570985008687907853269984665640564039457575905150736621917, 115792089237316195423570985008687907853269984665640564039457577268048497192627)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621917n);
    input.add256(115792089237316195423570985008687907853269984665640564039457577268048497192627n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint256) => ebool test 2 (115792089237316195423570985008687907853269984665640564039457575905150736621913, 115792089237316195423570985008687907853269984665640564039457575905150736621917)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621913n);
    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621917n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "ne" overload (euint256, euint256) => ebool test 3 (115792089237316195423570985008687907853269984665640564039457575905150736621917, 115792089237316195423570985008687907853269984665640564039457575905150736621917)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621917n);
    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621917n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(false);
  });

  it('test operator "ne" overload (euint256, euint256) => ebool test 4 (115792089237316195423570985008687907853269984665640564039457575905150736621917, 115792089237316195423570985008687907853269984665640564039457575905150736621913)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621917n);
    input.add256(115792089237316195423570985008687907853269984665640564039457575905150736621913n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.ne_euint256_euint256(
      encryptedAmount.handles[0],
      encryptedAmount.handles[1],
      encryptedAmount.inputProof,
    );
    await tx.wait();
    const res = await decryptBool(await this.contract5.resEbool());
    expect(res).to.equal(true);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 1 (83, 56)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(83n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint8_uint8(encryptedAmount.handles[0], 56n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(139n);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 2 (81, 83)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(81n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint8_uint8(encryptedAmount.handles[0], 83n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(164n);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 3 (83, 83)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(83n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint8_uint8(encryptedAmount.handles[0], 83n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(166n);
  });

  it('test operator "add" overload (euint8, uint8) => euint8 test 4 (83, 81)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(83n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_euint8_uint8(encryptedAmount.handles[0], 81n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(164n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 1 (86, 56)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(56n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint8_euint8(86n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(142n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 2 (81, 83)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(83n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint8_euint8(81n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(164n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 3 (83, 83)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(83n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint8_euint8(83n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(166n);
  });

  it('test operator "add" overload (uint8, euint8) => euint8 test 4 (83, 81)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(81n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.add_uint8_euint8(83n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(164n);
  });

  it('test operator "sub" overload (euint8, uint8) => euint8 test 1 (43, 43)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(43n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_euint8_uint8(encryptedAmount.handles[0], 43n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (euint8, uint8) => euint8 test 2 (43, 39)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(43n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_euint8_uint8(encryptedAmount.handles[0], 39n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(4n);
  });

  it('test operator "sub" overload (uint8, euint8) => euint8 test 1 (43, 43)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(43n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_uint8_euint8(43n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "sub" overload (uint8, euint8) => euint8 test 2 (43, 39)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(39n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.sub_uint8_euint8(43n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(4n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 1 (16, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(16n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint8_uint8(encryptedAmount.handles[0], 9n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(144n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 2 (9, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(9n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint8_uint8(encryptedAmount.handles[0], 9n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(81n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 3 (9, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(9n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint8_uint8(encryptedAmount.handles[0], 9n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(81n);
  });

  it('test operator "mul" overload (euint8, uint8) => euint8 test 4 (9, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(9n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_euint8_uint8(encryptedAmount.handles[0], 9n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(81n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 1 (8, 17)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(17n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint8_euint8(8n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(136n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 2 (9, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(9n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint8_euint8(9n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(81n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 3 (9, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(9n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint8_euint8(9n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(81n);
  });

  it('test operator "mul" overload (uint8, euint8) => euint8 test 4 (9, 9)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(9n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.mul_uint8_euint8(9n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(81n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 1 (95, 211)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(95n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint8_uint8(encryptedAmount.handles[0], 211n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 2 (91, 95)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(91n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint8_uint8(encryptedAmount.handles[0], 95n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 3 (95, 95)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(95n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint8_uint8(encryptedAmount.handles[0], 95n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(1n);
  });

  it('test operator "div" overload (euint8, uint8) => euint8 test 4 (95, 91)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(95n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.div_euint8_uint8(encryptedAmount.handles[0], 91n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(1n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 1 (22, 164)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(22n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint8_uint8(encryptedAmount.handles[0], 164n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(22n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 2 (18, 22)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(18n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint8_uint8(encryptedAmount.handles[0], 22n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(18n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 3 (22, 22)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(22n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint8_uint8(encryptedAmount.handles[0], 22n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "rem" overload (euint8, uint8) => euint8 test 4 (22, 18)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(22n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.rem_euint8_uint8(encryptedAmount.handles[0], 18n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(4n);
  });

  it('test operator "and" overload (euint8, uint8) => euint8 test 1 (198, 124)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(198n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint8_uint8(encryptedAmount.handles[0], 124n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(68n);
  });

  it('test operator "and" overload (euint8, uint8) => euint8 test 2 (60, 64)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(60n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint8_uint8(encryptedAmount.handles[0], 64n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (euint8, uint8) => euint8 test 3 (64, 64)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(64n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint8_uint8(encryptedAmount.handles[0], 64n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(64n);
  });

  it('test operator "and" overload (euint8, uint8) => euint8 test 4 (64, 60)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(64n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_euint8_uint8(encryptedAmount.handles[0], 60n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (uint8, euint8) => euint8 test 1 (147, 124)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(124n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint8_euint8(147n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(16n);
  });

  it('test operator "and" overload (uint8, euint8) => euint8 test 2 (60, 64)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(64n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint8_euint8(60n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "and" overload (uint8, euint8) => euint8 test 3 (64, 64)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(64n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint8_euint8(64n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(64n);
  });

  it('test operator "and" overload (uint8, euint8) => euint8 test 4 (64, 60)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(60n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.and_uint8_euint8(64n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(0n);
  });

  it('test operator "or" overload (euint8, uint8) => euint8 test 1 (34, 43)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(34n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint8_uint8(encryptedAmount.handles[0], 43n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(43n);
  });

  it('test operator "or" overload (euint8, uint8) => euint8 test 2 (30, 34)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(30n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint8_uint8(encryptedAmount.handles[0], 34n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(62n);
  });

  it('test operator "or" overload (euint8, uint8) => euint8 test 3 (34, 34)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(34n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint8_uint8(encryptedAmount.handles[0], 34n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(34n);
  });

  it('test operator "or" overload (euint8, uint8) => euint8 test 4 (34, 30)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);
    input.add8(34n);

    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_euint8_uint8(encryptedAmount.handles[0], 30n, encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(62n);
  });

  it('test operator "or" overload (uint8, euint8) => euint8 test 1 (53, 43)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(43n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint8_euint8(53n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(63n);
  });

  it('test operator "or" overload (uint8, euint8) => euint8 test 2 (30, 34)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(34n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint8_euint8(30n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(62n);
  });

  it('test operator "or" overload (uint8, euint8) => euint8 test 3 (34, 34)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(34n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint8_euint8(34n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(34n);
  });

  it('test operator "or" overload (uint8, euint8) => euint8 test 4 (34, 30)', async function () {
    const input = this.instances.alice.createEncryptedInput(this.contract5Address, this.signers.alice.address);

    input.add8(30n);
    const encryptedAmount = await input.encrypt();
    const tx = await this.contract5.or_uint8_euint8(34n, encryptedAmount.handles[0], encryptedAmount.inputProof);
    await tx.wait();
    const res = await decrypt8(await this.contract5.resEuint8());
    expect(res).to.equal(62n);
  });
});
