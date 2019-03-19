const sourceMap_0_4_4 = require('source-map-0.4.4');
const sourceMap_0_5_7 = require('source-map-0.5.7');
const sourceMap_0_6_1 = require('source-map-0.6.1');
const sourceMap_0_7_3 = require('source-map-0.7.3');
const sourceMap_master = require('source-map-master');

function wrapSyncApi(sourceMap) {
  return {
    SourceMapConsumer: function(...args) {
      return Promise.resolve().then(
        () => new sourceMap.SourceMapConsumer(...args),
      );
    },
  };
}

function wrapAsyncApi(sourceMap) {
  return {
    SourceMapConsumer: sourceMap.SourceMapConsumer,
  };
}

module.exports = [
  ['0.4.4', wrapSyncApi(sourceMap_0_4_4)],
  ['0.5.7', wrapSyncApi(sourceMap_0_5_7)],
  ['0.6.1', wrapSyncApi(sourceMap_0_6_1)],
  ['0.7.3', wrapAsyncApi(sourceMap_0_7_3)],
  ['master (7adff2c)', wrapAsyncApi(sourceMap_master)],
];
