import r from 'rethinkdb';

export default content => tableName => dbName => connection =>
  r.db(dbName)
    .table(tableName)
    .insert(content)
    .run(connection);
