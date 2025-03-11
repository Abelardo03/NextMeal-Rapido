import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: console.log,
})

sequelize.sync()

export const conectarDB = async () => {
  try {
    await sequelize.authenticate()
    console.log("Conexión a la base de datos establecida correctamente.")
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error)
    process.exit(1)
  }
} 
