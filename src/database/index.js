import create from './create';
import drop from './drop';
import exists from './exists';

import table from '../table';

const select = dbName => connection =>
  create(dbName)(connection).then(result => ({
    result,
    table(tableName) {
      return table(tableName)(dbName)(connection);
    },
  }));

select.create = create;
select.drop = drop;
select.exists = exists;

export default select;
