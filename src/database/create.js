import r from '../adapter';

import exists from './exists';

export default dbName => connection =>
  exists(dbName)(connection).then(doesExist => {
    if (!doesExist) {
      return r.dbCreate(dbName).run(connection);
    }

    return Promise.resolve();
  });
