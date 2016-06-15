import r from '../adapter';

export default (id, content) => tableName => dbName => connection =>
  r.db(dbName)
    .table(tableName)
    .get(id)
    .merge(content)
    .run(connection);
