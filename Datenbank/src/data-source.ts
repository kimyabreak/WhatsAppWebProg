import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../../backend/src/entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "NickiDiao1001!!Kimy",
    database: "database",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
