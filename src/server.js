const express = require("express");
const app = express();
const port = 3000;
const { setBodyParser, setCors } = require("./config");
const { initRoutes } = require("./routes/index");
const { connectDB, syncModel } = require("./app/models");
// config bodyparser and cors
setBodyParser(app);
setCors(app);

//connect DB
connectDB();

//initial route
initRoutes(app);

app.listen(port, () => console.log(`App listening on the port ${port}`));

// set up synchronization sequelize models
syncModel();
