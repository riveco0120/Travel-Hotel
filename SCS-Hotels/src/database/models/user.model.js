import {v4,} from 'uuid'
import { connection, } from "../connection.js";
import {DataTypes} from 'sequelize'
const User = connection.define(
    'users',
    {
      id: {
        type:DataTypes.STRING,
        primaryKey:true,
        defaultValue :v4(), 
      },
      email:{
        type:DataTypes.STRING,
        unique:true,
      },
      password:DataTypes.STRING,
      giveName:DataTypes.STRING,
      lastNAme:DataTypes.STRING,
      phoneNumber : {
        type:DataTypes.STRING(15), 
        unique:true,
        allowNull:true
      },
      address:DataTypes.STRING
    

    },
    {
        timestamps:true,
    }
)
User.sync({
    //force:true
});

export {User,}