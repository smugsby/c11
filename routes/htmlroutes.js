const path = require("path");

module.exports = (app) => {
    app.get("/notes", (req, res) => {
        //if 200 good then send html file
        res.status(200).sendFile(path.join(__dirname, "../public/notes.html"));
    });
    //serves html page on other than note load
    app.get("*", (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
    });
};