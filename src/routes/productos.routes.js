import {Router} from 'express'  
import { actualizarProducto, crearProducto, eliminarProducto, verProducto } from '../controllers/producto.controllers.js'

const router= Router();

router.get("/",verProducto);
router.post("/",crearProducto);
router.put("/:id",actualizarProducto);
router.delete("/:id",eliminarProducto);

export default router