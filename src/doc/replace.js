import r from 'rethinkdb';

export default (id, content) => tableName => dbName => connection =>
  r.db(dbName)
    .table(tableName)
    .get(id)
    .replace(content)
    .run(connection);
