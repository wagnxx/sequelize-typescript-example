import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  host:'192.168.1.112',
  // dialect: 'sqlite',
  dialect: 'mysql',
  database: 'movies',
  username: 'root',
  password:'root',
  storage: ':memory:',
  define: {
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
  },
  models: [__dirname + '/models']
});

 