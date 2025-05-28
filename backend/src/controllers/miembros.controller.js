import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los miembros
// Obtener todos los miembros
export const obtenerMiembros = async (req, res) => {
  try {
    const miembros = await prisma.avenger.findMany();
    res.json(miembros);
  } catch (error) {
    console.error("❌ Error al obtener miembros:", error);
    res.status(500).json({ mensaje: "Error al obtener miembros" });
  }
};


// Crear un nuevo miembro
export const crearMiembro = async (req, res) => {
  try {
    const { nombre, alias, habilidades, actor } = req.body;
    const nuevoMiembro = await prisma.avenger.create({
      data: { nombre, alias, habilidades: habilidades.join(', '), actor }
    });
    res.status(201).json(nuevoMiembro);
  } catch (error) {
    console.error("❌ Error al crear miembro:", error);
    res.status(500).json({ mensaje: "Error al crear miembro" });
  }
};

// Obtener miembro por ID
export const obtenerMiembroPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const miembro = await prisma.avenger.findUnique({ where: { id: Number(id) } });

    if (!miembro) return res.status(404).json({ mensaje: "Miembro no encontrado" });

    res.json(miembro);
  } catch (error) {
    console.error("❌ Error al obtener miembro:", error);
    res.status(500).json({ mensaje: "Error al obtener miembro" });
  }
};

// Actualizar miembro
export const actualizarMiembro = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = req.body;

    const miembroActualizado = await prisma.avenger.update({
      where: { id: Number(id) },
      data: datos
    });

    res.json(miembroActualizado);
  } catch (error) {
    console.error("❌ Error al actualizar miembro:", error);
    res.status(500).json({ mensaje: "Error al actualizar miembro" });
  }
};

// Eliminar miembro
export const eliminarMiembro = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.avenger.delete({ where: { id: Number(id) } });
    res.json({ mensaje: "Miembro eliminado correctamente" });
  } catch (error) {
    console.error("❌ Error al eliminar miembro:", error);
    res.status(500).json({ mensaje: "Error al eliminar miembro" });
  }
};
