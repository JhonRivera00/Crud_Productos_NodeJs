import express from 'express'   
import cors from 'cors'
import morgan from 'morgan'
import producto from './routes/productos.routes.js';

const app = express();
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))

app.use(producto)

export default app;