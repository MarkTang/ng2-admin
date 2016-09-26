import { Pool, PoolConfig, } from 'pg';

export class DatabaseManager {
  config: PoolConfig = {
    database: 'prueba',
    user: 'postgres',
    password: '1234',
    max: 10,
    idleTimeoutMillis: 5 * 60 * 100,
  };

  database: Pool;

  constructor(app: Electron.App) {
    this.database = new Pool(this.config);
    this.database.connect()
      .then((client) => {
        return client.query(`INSERT INTO usuario VALUES (null, 'Michael');`);
      })
      .then((value) => {
        value.rows.forEach(row => {
          console.log(row);
        });
      })
      .catch((error) => {
        console.log(error);
        app.quit();
      });

  }





}

