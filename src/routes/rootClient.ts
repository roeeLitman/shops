import {Response, Router, Request} from "express";
import { createSeller } from "../controller/clientController";

const rootClient:Router = Router()

// create seller
rootClient.post('/register', () => {})

//get all order
rootClient.get('/', () => {} )

//geet specifi order
rootClient.get('/id', () => {} )

// get all order of specifi client
rootClient.get('/getorder/:id', () => {} )

// add product 
rootClient.put('/', () => {} )

// delete prodact
rootClient.delete('/', () => {} )

//delete shop
rootClient.delete('/', () => {} )


export default rootClient