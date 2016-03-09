import r from 'rethinkdb';

export default tableName => dbName => connection =>
  r.db(dbName).tableList().run(connection).then(list => {
    if (list.indexOf(tableName) >= 0) {
      return Promise.resolve(true);
    }

    return Promise.resolve(false);
  });
