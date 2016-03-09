# reshine
Let's take the sunshine path with RethinkDB

![sunshine](https://media.giphy.com/media/ZNAgXPBbykpnG/giphy.gif)

Are you tired of always checking if your database exists and check for errors?  
Are you tired of always checking if your table exists and check for errors?  
Is your answer `YES`?  
Then `reshine` is for you! It takes away that error handling and creates databases, tables for you if they don't exist.

### Usage
```
import { connect, database } from 'reshine';

connect().then(conn =>
  database('mydb')(conn)
    .then({ table } => table('mytable'))
    .then({ find } => find('my-id'));
);
```

This gets the document if it exists. Any database and tables that don't exist along the way will be creating.

### Things to do
- exists for doc
- upsert
- documents need to be handled more sunshine-y
- Tests (Not trusting the sunshine path that much)
