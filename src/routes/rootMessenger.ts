import {Response, Router, Request} from "express";

const rootMessenger:Router = Router()

// create seller
rootMessenger.post('/register', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

//get all order
rootMessenger.get('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

//geet specifi order
rootMessenger.get('/id', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// get all order of specifi client
rootMessenger.get('/getorder/:id', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// add product 
rootMessenger.put('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// delete prodact
rootMessenger.delete('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

//delete shop
rootMessenger.delete('/', async (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})


export default rootMessenger