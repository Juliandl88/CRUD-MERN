import express from "express";
import cors from "cors";

//Importamos la conexión a la base de datos
import db from "./database/db.js";

import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

//Establecemos la conexión a la base de datos

db.authenticate()
.then(() => {
    console.log("Database Connected");
})
.catch(err => {
    console.log("Conectado a la base de datos Connection Error ${err}");
})

try {
    
} catch (error) {
    
}

app.get("/", (req, res) => {
  res.send("HOLA MUNDO");
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000/");
});
