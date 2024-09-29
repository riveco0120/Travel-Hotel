import {Sequelize, } from 'sequelize'

const connection = new Sequelize({
    dialect:'postgres', //'mysql',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username : process.env.DATABASE_USERNAME, 
    password : process.env.DATABASE_PASSWORD, 
    database : process.env.DATABASE_NAME
});