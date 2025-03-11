import { Sequelize } from "sequelize"

export const sequelize = new Sequelize("nextmeal", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
})

export const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log("Conexión a la base de datos establecida correctamente.")
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error)
    process.exit(1)
  }
}

