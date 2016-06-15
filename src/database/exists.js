import r from '../adapter';

export default dbName => connection =>
  r.dbList().run(connection).then(list => {
    if (list.indexOf(dbName) >= 0) {
      return Promise.resolve(true);
    }

    return Promise.resolve(false);
  });
