import r from 'rethinkdb';

import database from './database';
import table from './table';
import doc from './doc';

const connect = (...args) => r.connect.apply(r, args);

export { database, table, doc, connect };
