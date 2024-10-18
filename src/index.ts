import  express,{Express}  from "express";
import "dotenv/config";
import cookie from 'cookie-parser'

const PORT:number = (process.env.PORT  || 1414) as number

const app:Express = express()

app.use(express.json())
app.use(cookie())

app.use('/seller',root)
app.use('client',root)
app.use('/messenger',root)