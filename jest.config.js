/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // Detectar arquivos .test.ts ou .spec.ts
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};