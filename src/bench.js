import benchmark from "benchmark";
import { AwsCrc32 } from "@aws-crypto/crc32";
import { AwsCrc32c } from "@aws-crypto/crc32c";
import { Hash } from "@smithy/hash-node";

const generateBuffer = (size) => {
  const buf = Buffer.alloc(size);
  for (let i = 0; i < size; i++) buf[i] = parseInt(Math.random() * 256);
  return buf;
};

const suite = new benchmark.Suite();
const testBuffer = generateBuffer(1024);

const crc32 = new AwsCrc32();
const crc32c = new AwsCrc32c();
const sha1 = new (Hash.bind(null, "sha1"))();
const sha256 = new (Hash.bind(null, "sha256"))();

console.log(`Benchmark:`);
suite
  .add("crc32", () => {
    crc32.update(testBuffer);
    crc32.digest(16);
    crc32.reset();
  })
  .add("crc32c", () => {
    crc32c.update(testBuffer);
    crc32c.digest(16);
    crc32c.reset();
  })
  .add("sha1", () => {
    sha1.update(testBuffer);
    sha1.digest(16);
    sha1.reset();
  })
  .add("sha256", () => {
    sha256.update(testBuffer);
    sha256.digest(16);
    sha256.reset();
  })
  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  .on("complete", () => {
    console.log("Fastest is " + suite.filter("fastest").map("name"));
  })
  // run sync
  .run({ async: false });
