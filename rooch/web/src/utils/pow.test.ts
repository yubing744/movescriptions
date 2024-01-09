

import { expect, test } from 'vitest'
import { hash, concatBytes, pow, hexlify, arrayify } from './pow'

test('test hash', () => {
  expect(hexlify(hash('0x00'))).toBe('0xbc36789e7a1e281436464229828f817d6612f7b477d66591ff96a9e064bcc98a')
  expect(hexlify(hash('0x01'))).toBe('0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2')
})

test('test concat bytes', () => {
  expect(hexlify(concatBytes(arrayify('0x00'), 1))).toBe('0x000100000000000000')
})

test('test pow', () => {
  expect(hexlify(pow(arrayify('0x00'), 1))).toBe('0xdac9acd0a27c1b2b2ea7337c7db91f10a0b2d0021b3396d6cf17ea440d44f3de')
  expect(hexlify(pow(arrayify('0x01'), 1))).toBe('0x62b37b4426cc078150de8cd78cd7ae786d20d03d54e59d0997ab90a5f4e6e5dd')
  expect(hexlify(pow(arrayify('0x4c6d6f7665e8030000000000000000000000000000000000000000000000000000000000007194e6bf0860250491496174e7f7d7a9a9424d41734830656b9466787c04480c0000000000000000'), 1342185966))).toBe('0x00006e5917a8966d8b9a9cfc7d85404d3b6da67ec2ed850e03c7c5e5fa7e3e15')
  expect(hexlify(pow(arrayify('0x6d6f7665e8030000000000000000000000000000000000000000000000000000000000005078ae74bac281e65fc446b467a843b186904a1b2d435f367030fc755eef10810200000000000000'), 170095))).toBe('0x0000ba3600fc7f2276c11b1c1bf207dc263493a40f4e70d2021784e8652c797c')
})

test('test validate', () => {
  expect(hexlify(pow(arrayify('0x00'), 1))).toBe('0xdac9acd0a27c1b2b2ea7337c7db91f10a0b2d0021b3396d6cf17ea440d44f3de')
  expect(hexlify(pow(arrayify('0x01'), 1))).toBe('0x62b37b4426cc078150de8cd78cd7ae786d20d03d54e59d0997ab90a5f4e6e5dd')
  expect(hexlify(pow(arrayify('0x4c6d6f7665e8030000000000000000000000000000000000000000000000000000000000007194e6bf0860250491496174e7f7d7a9a9424d41734830656b9466787c04480c0000000000000000'), 1342185966))).toBe('0x00006e5917a8966d8b9a9cfc7d85404d3b6da67ec2ed850e03c7c5e5fa7e3e15')
  expect(hexlify(pow(arrayify('0x6d6f7665e8030000000000000000000000000000000000000000000000000000000000005078ae74bac281e65fc446b467a843b186904a1b2d435f367030fc755eef10810200000000000000'), 170095))).toBe('0x0000ba3600fc7f2276c11b1c1bf207dc263493a40f4e70d2021784e8652c797c')
})
