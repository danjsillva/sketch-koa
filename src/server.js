import Dotenv from "dotenv";

import app from "./app";

Dotenv.config();

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Running on port ${port}`));