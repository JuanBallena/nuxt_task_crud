import mysql from 'mysql2/promise';

export default class MySQL {

  private static _instance: MySQL;

  constructor() {
    console.log("Connect database mysql...");
  }

  public async getConnection(): Promise<mysql.Connection> {

    return await mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'db_nuxt_test'
    });
  }

  static get instance(): MySQL {
    return this._instance || ( this._instance = new this());
  }
}