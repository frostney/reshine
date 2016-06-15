import r from '../adapter';

const filter = toFilter => tableName => dbName => connection =>
  r.db(dbName)
    .table(tableName)
    .filter(toFilter)
    .run(connection);

filter.toArray = toFilter => tableName => dbName => connection =>
  filter(toFilter)(tableName)(dbName)(connection).then(filtered => filtered.toArray());

export default filter;
