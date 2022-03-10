import express from "express";

import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog } from "../controllers/BlogController.js";

const router = express.Router();

router.get("/", getAllBlogs); //Ruta para mostrar TODOS los registros

router.get("/:id", getBlog);  //Ruta para mostrar UN registro

router.post("/", createBlog);  //Ruta para CREAR un registro

router.put("/:id", updateBlog); //Ruta para BORRAR un registro

router.delete("/:id", deleteBlog); //Ruta para BORRAR un registro

export default router;






