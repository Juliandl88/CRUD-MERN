//Importamos la conexión de la base de datos

import db from "../database/db.js";

//Importamos sequelize 

import { DataTypes } from "sequelize";

const BlogModel = db.define("blog", {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING }
})

export default BlogModel;