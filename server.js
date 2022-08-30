/*const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static("./public"));
require("./routes/apiroutes")(app);

app.listen(3000);
*/
//parsing http request
const morgan = require('morgan');
//server
const express = require('express');

const app = express();
//set port on 8080
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("./public"))
//serves api routes
require('./routes/apiroutes')(app);
//serves html routes
require('./routes/htmlroutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});


