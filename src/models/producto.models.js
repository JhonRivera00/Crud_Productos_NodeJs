import {Schema,model} from 'mongoose'

const productoSchema = new Schema({
    nombre:{
        type:String,
        unique:true},
    categoria:{type:String},
    ubicacion:{type:String},
    precio:{type:Number},
},{
    timestamps:false,
    versionKey:false
})

export default model("Producto",productoSchema)