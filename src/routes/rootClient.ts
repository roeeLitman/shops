import {Response, Router, Request} from "express";

const rootClient:Router = Router()

// create seller
rootClient.post('/register', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

//get all order
rootClient.get('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

//geet specifi order
rootClient.get('/id', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// get all order of specifi client
rootClient.get('/getorder/:id', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// add product 
rootClient.put('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// delete prodact
rootClient.delete('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

//delete shop
rootClient.delete('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})


export default rootClient