import dotenv from "dotenv";
import { initApp } from "./initApp";
dotenv.config({ path: "../.env" });

const app = initApp();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
