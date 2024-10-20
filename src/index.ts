import  express,{Express}  from "express";
import "dotenv/config";
import cookie from 'cookie-parser'
import rootSeller from "./routes/routeSeller";
import rootClient from "./routes/rootClient";
import rootMessenger from "./routes/rootMessenger";
import connectMongo from './config/db'

const PORT:number = (process.env.PORT  || 1414) as number

const app:Express = express()

connectMongo()

app.use(express.json())
app.use(cookie())

app.use('/seller',rootSeller)
app.use('client',rootClient)
app.use('/messenger',rootMessenger)

app.listen(
    PORT,
    (): void => {
        console.log(`http://localhost:${PORT}`);
         
})


