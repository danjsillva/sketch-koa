import Sequelize from "sequelize";

const credentials = []

credentials["dev"] = {
    host: "datacenter.resultsistemas.com",
    port: 1433,
    username: "sa",
    password: "result@2014#",
    database: "dev_webvendas"
}

credentials["farmagroup"] = {
    host: "datacenter.resultsistemas.com",
    port: 1433,
    username: "sa",
    password: "result@2014#",
    database: "backup_farmagroup"
}

const connections = []

const connect = async () => {
    for (let index in credentials) {
        connections[index] = new Sequelize(
            credentials[index].database,
            credentials[index].username,
            credentials[index].password,
            {
                host: credentials[index].host,
                dialect: 'mssql',
                dialectOptions: {
                    options: {
                        encrypt: false,
                        trustServerCertificate: true
                    }
                }
            }
        )
    }
}

export default { connect, connections }