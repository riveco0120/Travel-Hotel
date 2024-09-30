import { connection, } from "../connection.js";
import {DataTypes} from 'sequelize'
const user = connection.define(
    'users',
    {
      id: {
        type:DataTypes.STRING,
        primaryKey:true,
      },
      email:{
        type:DataTypes.STRING,
        unique:true,
      },
      password:{
        type:DataTypes.STRING
      },
      name:{
        type:DataTypes.STRING
      }

    },
    {
        timestamps:true,
    }
)
user.sync({
    //force:true
});

export {user,}