import r from '../adapter';

import exists from './exists';

export default tableName => dbName => connection =>
  exists(tableName)(dbName)(connection).then(doesExist => {
    if (!doesExist) {
      return r.db(dbName).tableCreate(tableName).run(connection);
    }

    return Promise.resolve();
  });
