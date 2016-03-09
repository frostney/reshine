import mapObj from 'map-obj';

import create from './create';
import drop from './drop';
import exists from './exists';

import doc from '../doc';

const select = tableName => dbName => connection => {
  const docMethods = mapObj(doc, (key, value) => [key, (...args) =>
    value(args)(tableName)(dbName)(connection)]);

  return create(tableName)(dbName)(connection).then(result => {
    docMethods.result = result;

    return docMethods;
  });
};

select.create = create;
select.drop = drop;
select.exists = exists;

export default select;
