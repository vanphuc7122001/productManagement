const express = require("express");
const app = express();
const port = 3000;
const { setBodyParser, setCors } = require("./config");
const { initRoutes } = require("./routes/index");

// config bodyparser and cors
setBodyParser(app);
setCors(app);

//initial route
initRoutes(app);

app.listen(port, () => console.log(`App listening on the port ${port}`));
