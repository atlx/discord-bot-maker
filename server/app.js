const express = require("express");
const path = require("path");

const port = 3000;
const app = express();

app.use("/api/discord", require("./api/discord"));

app.use("/editor", express.static(path.resolve(path.join(__dirname, "../build"))));

app.use((err, req, res, next) => {
    switch (err.message) {
        case "NoCodeProvided":
            return res.status(400).send({
                status: "ERROR",
                error: err.message,
            });
        default:
            return res.status(500).send({
                status: "ERROR",
                error: err.message,
            });
    }
});

app.listen(port, () => {
    console.info(`Server running on port ${port}`);
});
