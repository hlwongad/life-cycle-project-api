module.exports = {
    dbConfig : {
        user:  process.env['db_username'] || "usrDev",
        password: process.env['db_password'] || "usrDev",
        server: process.env['db_address'] || "localhost",
        database: process.env['db_database'] || "ControlPanel"
    }
}