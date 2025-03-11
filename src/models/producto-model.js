import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Categoria from "../models/categoria-model.js";

const Producto = sequelize.define('Producto',{
id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
nombre:{
    type: DataTypes.STRING,
    allowNull:false,
    unique:true
},
precio:{
    type: DataTypes.INTEGER,
    allowNull: false
},
 estado:{
    type: DataTypes.BOOLEAN,
    defaultValue: true
},
cantidad:{
    type:DataTypes.FLOAT,
    allowNull:true
},
descripcion:{
    type:DataTypes.TEXT,
    allowNull:true
},

Id_Categoria:{
    type:DataTypes.INTEGER,
    references:{model:Categoria,key:'id'}
}

},
{
    timetamps:true,
});

Producto.belongsTo(Categoria, { foreignKey: 'Id_Categoria' });
Categoria.hasMany(Producto, { foreignKey: 'Id_Categoria' });


export default Producto;


