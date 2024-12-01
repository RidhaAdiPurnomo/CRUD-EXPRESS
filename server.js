const express = require("express");
const app = express();
const PORT = 3000;
const itemRoutes = require("./routes/itemRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", itemRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
