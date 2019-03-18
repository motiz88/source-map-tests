# source-map-tests

A test suite for known bugs in various versions of
[`source-map`](https://github.com/mozilla/source-map).

## Prerequisites
* Node >= v10
* [Yarn](yarnpkg.com) (supports installing multiple versions of one package)

## Running the tests

```
yarn && yarn jest
```

## Example output

```
source-map v0.4.4
  ✕ accepts mappings without sources in an indexed map (8ms)
  ✕ accepts mappings without names in an indexed map (1ms)
  ✓ accepts mappings to the first name entry in an indexed map (4ms)
  ✕ processes sources correctly in an indexed map (7ms)
source-map v0.5.7
  ✕ accepts mappings without sources in an indexed map (2ms)
  ✕ accepts mappings without names in an indexed map (1ms)
  ✓ accepts mappings to the first name entry in an indexed map (1ms)
  ✓ processes sources correctly in an indexed map (1ms)
source-map v0.6.1
  ✕ accepts mappings without sources in an indexed map (2ms)
  ✓ accepts mappings without names in an indexed map (2ms)
  ✕ accepts mappings to the first name entry in an indexed map (1ms)
  ✓ processes sources correctly in an indexed map (1ms)
source-map v0.7.3
  ✕ accepts mappings without sources in an indexed map (21ms)
  ✓ accepts mappings without names in an indexed map (1ms)
  ✓ accepts mappings to the first name entry in an indexed map (1ms)
  ✕ processes sources correctly in an indexed map (2ms)
```
