import  express,{Express, request}  from "express";
import "dotenv/config";
import cookie from 'cookie-parser'
import rootSeller from "./routes/routeSeller";
import rootClient from "./routes/rootClient";
import rootMessenger from "./routes/rootMessenger";
import connectMongo from './config/db'
import rootStore from "./routes/rootStore";

const app:Express = express()

const PORT:number = (process.env.PORT  || 1414) as number

app.use(express.json());
app.use(cookie())
connectMongo()


app.use('/seller', (req) => {console.log(req.body);
})
app.use('/store',rootStore)
app.use('client',rootClient)
app.use('/messenger',rootMessenger)

app.listen(
    PORT, () => { console.log(`http://localhost:${PORT}`)}
)


