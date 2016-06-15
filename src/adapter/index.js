import rethinkdbdash from 'rethinkdbdash';

export default rethinkdbdash({
  pool: false,
  cursor: true,
});
