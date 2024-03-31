const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectionString = process.env.MONGO_URL;

mongoose.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (error, goose) => {
        if (error) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connecttion succeed");
            // console.log(goose);

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = process.env.PORT || 3000;
            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
                );
            });
        }
    }
);
