const db_task = require("./db_connection/db");
const app = require("./src/app");
const PORT = 3000;

db_task();
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
