import {Response, Router, Request} from "express";
import { createStore } from "../controller/storeController";

const rootStore:Router = Router()

// create seller
rootStore.post('/create', createStore)

//get all order
rootStore.get('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

//geet specifi order
rootStore.get('/id', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// get all order of specifi client
rootStore.get('/getorder/:id', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// add product 
rootStore.put('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// delete prodact
rootStore.delete('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

//delete shop
rootStore.delete('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})


export default rootStore