# benchmark-checksums

Benchmarks checksum implementations used by AWS SDK for JavaScript.

## Pre-requisites

- Install [Node.js](https://nodejs.org/)
- Run `corepack enable`.

## Results

```console
$ yarn bench

Benchmark for buffer of size 16 KB:
crc32 x 5,847 ops/sec ±0.94% (97 runs sampled)
crc32c x 5,696 ops/sec ±2.56% (95 runs sampled)
sha1 x 115,813 ops/sec ±3.62% (89 runs sampled)
sha256 x 117,583 ops/sec ±2.80% (87 runs sampled)
Fastest is sha256,sha1

Benchmark for buffer of size 64 KB:
crc32 x 1,438 ops/sec ±0.58% (97 runs sampled)
crc32c x 1,378 ops/sec ±4.90% (93 runs sampled)
sha1 x 33,010 ops/sec ±2.74% (91 runs sampled)
sha256 x 34,076 ops/sec ±1.57% (91 runs sampled)
Fastest is sha256

Benchmark for buffer of size 256 KB:
crc32 x 361 ops/sec ±1.13% (93 runs sampled)
crc32c x 367 ops/sec ±0.43% (94 runs sampled)
sha1 x 9,096 ops/sec ±0.43% (101 runs sampled)
sha256 x 9,178 ops/sec ±0.58% (100 runs sampled)
Fastest is sha256

Benchmark for buffer of size 1024 KB:
crc32 x 90.94 ops/sec ±0.36% (79 runs sampled)
crc32c x 90.49 ops/sec ±0.47% (79 runs sampled)
sha1 x 2,261 ops/sec ±1.45% (96 runs sampled)
sha256 x 2,111 ops/sec ±7.35% (91 runs sampled)
Fastest is sha1
```
