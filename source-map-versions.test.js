const implementations = require('./implementations');
const fs = require('fs').promises;
const {objectContaining} = expect;

describe.each(implementations)('source-map %s', (version, api) => {
  it('accepts mappings without sources in an indexed map', async () => {
    const map = await fs.readFile(
      __dirname + '/fixtures/indexed-null-source.json',
      'utf8',
    );
    const consumer = await new api.SourceMapConsumer(map);
    const mappings = [];
    consumer.eachMapping(mapping => {
      mappings.push(mapping);
    });
    expect(mappings).toEqual([
      objectContaining({
        source: null,
        generatedLine: 1,
        generatedColumn: 0,
        originalLine: null,
        originalColumn: null,
        name: null,
      }),
    ]);
  });

  it('accepts mappings without names in an indexed map', async () => {
    const map = await fs.readFile(
      __dirname + '/fixtures/indexed-null-name.json',
      'utf8',
    );
    const consumer = await new api.SourceMapConsumer(map);
    const mappings = [];
    consumer.eachMapping(mapping => {
      mappings.push(mapping);
    });
    expect(mappings).toEqual([
      objectContaining({
        generatedLine: 1,
        generatedColumn: 0,
        originalLine: 1,
        originalColumn: 0,
        name: null,
      }),
    ]);
  });

  it('accepts mappings to the first name entry in an indexed map', async () => {
    const map = await fs.readFile(
      __dirname + '/fixtures/indexed-1st-name.json',
      'utf8',
    );
    const consumer = await new api.SourceMapConsumer(map);
    const mappings = [];
    consumer.eachMapping(mapping => {
      mappings.push(mapping);
    });
    expect(mappings).toEqual([
      objectContaining({
        generatedLine: 1,
        generatedColumn: 0,
        originalLine: 1,
        originalColumn: 0,
        name: 'first',
      }),
    ]);
  });

  it('processes sources correctly in an indexed map', async () => {
    const map = await fs.readFile(
      __dirname + '/fixtures/indexed-sources.json',
      'utf8',
    );
    const consumer = await new api.SourceMapConsumer(map);
    const mappings = [];
    consumer.eachMapping(mapping => {
      mappings.push(mapping);
    });
    expect(mappings).toEqual([
      objectContaining({
        source: 'foo.js',
        generatedLine: 1,
        generatedColumn: 0,
        originalLine: 1,
        originalColumn: 0,
      }),
      objectContaining({
        source: 'bar.js',
        generatedLine: 1,
        generatedColumn: 1,
        originalLine: 2,
        originalColumn: 1,
      }),
    ]);
  });

  it('supports unmapped sections in an indexed map', async () => {
    const map = await fs.readFile(
      __dirname + '/fixtures/indexed-unmapped-section.json',
      'utf8',
    );
    const consumer = await new api.SourceMapConsumer(map);
    expect(consumer.originalPositionFor({line: 2, column: 0})).toEqual(
      expect.objectContaining({
        source: null,
        line: null,
        column: null,
        name: null,
      }),
    );
  });

  it('performs lookup correctly in an indexed map', async () => {
    const map = await fs.readFile(
      __dirname + '/fixtures/indexed-multiple-sections.json',
      'utf8',
    );
    const consumer = await new api.SourceMapConsumer(map);
    expect(consumer.originalPositionFor({line: 1, column: 0})).toEqual(
      objectContaining({source: 'foo.js', line: 1, column: 0}),
    );
    expect(consumer.originalPositionFor({line: 1, column: 1})).toEqual(
      objectContaining({source: 'bar.js', line: 2, column: 1}),
    );
    expect(consumer.originalPositionFor({line: 1, column: 2})).toEqual(
      objectContaining({source: 'baz.js', line: 1, column: 0}),
    );
    expect(consumer.originalPositionFor({line: 1, column: 3})).toEqual(
      objectContaining({source: 'quux.js', line: 2, column: 1}),
    );
  });

  it('performs lookup correctly in a non-indexed map', async () => {
    const map = await fs.readFile(
      __dirname + '/fixtures/simple-map.json',
      'utf8',
    );
    const consumer = await new api.SourceMapConsumer(map);
    expect(consumer.originalPositionFor({line: 1, column: 0})).toEqual(
      objectContaining({source: 'foo.js', line: 1, column: 0, name: 'first'}),
    );
    expect(consumer.originalPositionFor({line: 1, column: 1})).toEqual(
      objectContaining({source: 'bar.js', line: 2, column: 1, name: 'second'}),
    );
    expect(consumer.originalPositionFor({line: 1, column: 2})).toEqual(
      objectContaining({source: 'bar.js', line: 2, column: 1, name: 'second'}),
    );
  });
});
