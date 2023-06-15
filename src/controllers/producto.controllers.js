import Producto from '../models/producto.models.js'

export const verProducto = async (req,res)=>{
    try {
        let productos = await Producto.find()
        res.status(200).json(productos)
    } catch (error) {
        console.log(error)
        res.status(400).json("Error en el servidor")

    }
}

export const crearProducto = async (req,res)=>{
    try {
        const {nombre,categoria,ubicacion,precio}=req.body
        const existeNombre = await Producto.findOne({nombre})
        if(existeNombre){
            return res.status(402).json("Nombre ya existe")
        }
        if(!nombre || !categoria || !ubicacion || !precio){
            return res.status(402).json("Se requieren todos los campos")
        }else{
            let productos = new Producto(req.body);
            await productos.save()
            res.status(200).json("Producto agregado")
        }
    } catch (error) {
        console.log(error)
        res.status(400).json("Error en el servidor")

    }
}
export const actualizarProducto = async (req,res)=>{
    try {
        const{id}=req.params
        if(!id){
            return res.status(402).json("Se requieren un id")
        }else{
            let productos = await Producto.findByIdAndUpdate(id,req.body);
            if(productos){

               return res.status(200).json("Producto actualizado")
            }else{
                res.status(401).json("No se pudo actualizar el producto")
            }
        }
    } catch (error) {
        console.log(error)
        res.status(400).json("Error en el servidor")

    }
}
export const eliminarProducto = async (req,res)=>{
    try {
        const{id}=req.params
        if(!id){
            return res.status(402).json("Se requieren un id")
        }else{
            let productos = await Producto.findByIdAndDelete(id);
            if(productos){

               return res.status(200).json("Producto Eliminado")
            }else{
                res.status(401).json("No se pudo eliminar el producto")
            }
        }
    } catch (error) {
        console.log(error)
        res.status(400).json("Error en el servidor")

    }
}