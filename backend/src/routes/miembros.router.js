import express from "express";
import {
  obtenerMiembros,
  crearMiembro,
  obtenerMiembroPorId,
  actualizarMiembro,
  eliminarMiembro
} from "../controllers/miembros.controller.js";

const router = express.Router();

router.get("/", obtenerMiembros);
router.post("/", crearMiembro);
router.get("/:id", obtenerMiembroPorId);
router.put("/:id", actualizarMiembro);
router.delete("/:id", eliminarMiembro);

export default router;
