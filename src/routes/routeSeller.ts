import {Response, Router, Request} from "express";
import { createSeller } from "../controller/clientController";

const rootSeller:Router = Router()

// create seller
rootSeller.post('/register', createSeller)

//get all order
rootSeller.get('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

//geet specifi order
rootSeller.get('/id', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// get all order of specifi client
rootSeller.get('/getorder/:id', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// add product 
rootSeller.put('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// delete prodact
rootSeller.delete('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

//delete shop
rootSeller.delete('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})


export default rootSeller