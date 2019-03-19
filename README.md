# source-map-tests

A test suite for known bugs and edge cases in various versions of
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
  source-map 0.4.4
    ✕ accepts mappings without sources in an indexed map (16ms)
    ✕ accepts mappings without names in an indexed map (7ms)
    ✓ accepts mappings to the first name entry in an indexed map (8ms)
    ✕ processes sources correctly in an indexed map (7ms)
    ✓ supports unmapped sections in an indexed map (2ms)
    ✕ performs lookup correctly in an indexed map (1ms)
    ✓ performs lookup correctly in a non-indexed map (2ms)
  source-map 0.5.7
    ✕ accepts mappings without sources in an indexed map (3ms)
    ✕ accepts mappings without names in an indexed map (1ms)
    ✓ accepts mappings to the first name entry in an indexed map (1ms)
    ✓ processes sources correctly in an indexed map (1ms)
    ✓ supports unmapped sections in an indexed map (1ms)
    ✕ performs lookup correctly in an indexed map (1ms)
    ✓ performs lookup correctly in a non-indexed map (2ms)
  source-map 0.6.1
    ✕ accepts mappings without sources in an indexed map (2ms)
    ✓ accepts mappings without names in an indexed map (2ms)
    ✕ accepts mappings to the first name entry in an indexed map (1ms)
    ✓ processes sources correctly in an indexed map (1ms)
    ✓ supports unmapped sections in an indexed map (1ms)
    ✕ performs lookup correctly in an indexed map (2ms)
    ✓ performs lookup correctly in a non-indexed map (1ms)
  source-map 0.7.3
    ✕ accepts mappings without sources in an indexed map (25ms)
    ✓ accepts mappings without names in an indexed map (1ms)
    ✓ accepts mappings to the first name entry in an indexed map (1ms)
    ✕ processes sources correctly in an indexed map (2ms)
    ✓ supports unmapped sections in an indexed map (1ms)
    ✕ performs lookup correctly in an indexed map (2ms)
    ✓ performs lookup correctly in a non-indexed map (1ms)
  source-map master (7adff2c)
    ✓ accepts mappings without sources in an indexed map (20ms)
    ✓ accepts mappings without names in an indexed map (2ms)
    ✓ accepts mappings to the first name entry in an indexed map (2ms)
    ✓ processes sources correctly in an indexed map (1ms)
    ✓ supports unmapped sections in an indexed map (2ms)
    ✕ performs lookup correctly in an indexed map (3ms)
    ✓ performs lookup correctly in a non-indexed map (2ms)
```
