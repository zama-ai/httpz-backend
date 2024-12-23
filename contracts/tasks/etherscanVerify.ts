import dotenv from 'dotenv';
import fs from 'fs';
import { task } from 'hardhat/config';

task('task:verifyACL').setAction(async function (taskArguments, { upgrades, run }) {
  const parsedEnvACL = dotenv.parse(fs.readFileSync('addresses/.env.acl'));
  const proxyACLAddress = parsedEnvACL.ACL_CONTRACT_ADDRESS;
  const implementationACLAddress = await upgrades.erc1967.getImplementationAddress(proxyACLAddress);
  await run('verify:verify', {
    address: implementationACLAddress,
    constructorArguments: [],
  });
  await run('verify:verify', {
    address: proxyACLAddress,
    constructorArguments: [],
  });
});

task('task:verifyTFHEExecutor').setAction(async function (taskArguments, { upgrades, run }) {
  const parsedEnvTFHEExecutor = dotenv.parse(fs.readFileSync('addresses/.env.exec'));
  const proxyTFHEExecutorAddress = parsedEnvTFHEExecutor.TFHE_EXECUTOR_CONTRACT_ADDRESS;
  const implementationTFHEExecutorAddress = await upgrades.erc1967.getImplementationAddress(proxyTFHEExecutorAddress);
  await run('verify:verify', {
    address: implementationTFHEExecutorAddress,
    constructorArguments: [],
  });
  await run('verify:verify', {
    address: proxyTFHEExecutorAddress,
    constructorArguments: [],
  });
});

task('task:verifyKMSVerifier').setAction(async function (taskArguments, { upgrades, run }) {
  const parsedEnvKMSVerifier = dotenv.parse(fs.readFileSync('addresses/.env.kmsverifier'));
  const proxyKMSVerifier = parsedEnvKMSVerifier.KMS_VERIFIER_CONTRACT_ADDRESS;
  const implementationKMSVerifierAddress = await upgrades.erc1967.getImplementationAddress(proxyKMSVerifier);
  await run('verify:verify', {
    address: implementationKMSVerifierAddress,
    constructorArguments: [],
  });
  await run('verify:verify', {
    address: proxyKMSVerifier,
    constructorArguments: [],
  });
});

task('task:verifyInputVerifier').setAction(async function (taskArguments, { upgrades, run }) {
  const parsedEnvInputVerifier = dotenv.parse(fs.readFileSync('addresses/.env.inputverifier'));
  const proxyInputVerifier = parsedEnvInputVerifier.INPUT_VERIFIER_CONTRACT_ADDRESS;
  const implementationInputVerifierAddress = await upgrades.erc1967.getImplementationAddress(proxyInputVerifier);
  await run('verify:verify', {
    address: implementationInputVerifierAddress,
    constructorArguments: [],
  });
  await run('verify:verify', {
    address: proxyInputVerifier,
    constructorArguments: [],
  });
});

task('task:verifyFHEGasLimit').setAction(async function (taskArguments, { upgrades, run }) {
  const parsedEnvFHEGasLimit = dotenv.parse(fs.readFileSync('addresses/.env.fhegaslimit'));
  const proxyFHEGasLimit = parsedEnvFHEGasLimit.FHE_PAYMENT_CONTRACT_ADDRESS;
  const implementationFHEGasLimitAddress = await upgrades.erc1967.getImplementationAddress(proxyFHEGasLimit);
  await run('verify:verify', {
    address: implementationFHEGasLimitAddress,
    constructorArguments: [],
  });
  await run('verify:verify', {
    address: proxyFHEGasLimit,
    constructorArguments: [],
  });
});

task('task:verifyGatewayContract').setAction(async function (taskArguments, { upgrades, run }) {
  const parsedEnvGateway = dotenv.parse(fs.readFileSync('addresses/.env.gateway'));
  const proxyGateway = parsedEnvGateway.GATEWAY_CONTRACT_PREDEPLOY_ADDRESS;
  const implementationGatewayAddress = await upgrades.erc1967.getImplementationAddress(proxyGateway);
  await run('verify:verify', {
    address: implementationGatewayAddress,
    constructorArguments: [],
  });
  await run('verify:verify', {
    address: proxyGateway,
    constructorArguments: [],
  });
});
