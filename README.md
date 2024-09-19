# benchmark-checksums

Benchmarks checksum implementations used by AWS SDK for JavaScript.

## Pre-requisites

- Install [Node.js](https://nodejs.org/)
- Run `corepack enable`.

## Results

```console
$ yarn bench

Benchmark:
crc32 x 89,777 ops/sec ±0.90% (95 runs sampled)
crc32c x 91,208 ops/sec ±0.43% (95 runs sampled)
sha1 x 552,898 ops/sec ±1.82% (82 runs sampled)
sha256 x 554,440 ops/sec ±2.60% (74 runs sampled)
Fastest is sha1,sha256
```
