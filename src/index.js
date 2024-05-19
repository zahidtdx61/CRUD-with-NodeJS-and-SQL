const express = require("express");

const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully running the server on port: ${ServerConfig.PORT}`);
  Logger.info(`Successfully running the server on port: ${ServerConfig.PORT}`);
});
