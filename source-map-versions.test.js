const implementations = require('./implementations');
const fs = require('fs').promises;
const {objectContaining} = expect;

describe.each(implementations)('source-map v%s', (version, api) => {
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
      {
        source: null,
        generatedLine: 1,
        generatedColumn: 0,
        originalLine: null,
        originalColumn: null,
        name: null,
      },
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
});
