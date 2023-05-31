import { Admin } from "typeorm"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.phone = "01752039732"
    user.firstName = "Anouk"
    user.lastName = "Lofi"
    user.age = 20
    user.role = 'admin'
    await AppDataSource.manager.save(user)
    console.log("Saved a new user " + user.firstName + user.lastName + "(" + user.age + ")" + "with id: " + user.phone)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
