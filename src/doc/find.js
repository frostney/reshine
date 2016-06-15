import r from '../adapter';

export default id => tableName => dbName => connection =>
  r.db(dbName)
    .table(tableName)
    .get(id)
    .run(connection);
