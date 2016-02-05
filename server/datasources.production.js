var mysqlUser = process.env.MYSQL_USER;
var mysqlHost = process.env.MYSQL_HOST;
var mysqlPass = process.env.MYSQL_PASS;
var mysqlDb = process.env.MYSQL_DB;
var mysqlPort = process.env.MYSQL_PORT;

module.exports = {
  mysql: {
  	name: "mysql",
    connector: "loopback-connector-mysql",
    database: mysqlDb,
    host: mysqlHost,
    username: mysqlUser,
    password: mysqlPass,
    port: mysqlPort
  }
}; 