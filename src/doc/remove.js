import r from 'rethinkdb';

export default id => tableName => dbName => connection =>
  r.db(dbName)
    .table(tableName)
    .get(id)
    .delete()
    .run(connection);
