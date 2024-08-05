import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "biei9nveuu1l3cmigfgr-mysql.services.clever-cloud.com",
    username: 'urqhihwsar2t7jxt',
    password: 'WHLFCIN5NJxEFABOQvqW',
    database: 'biei9nveuu1l3cmigfgr',
    models: []
})

export default sequelize