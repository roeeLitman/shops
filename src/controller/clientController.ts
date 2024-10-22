import { Request, Response } from "express";
import ResponseDTO from "../typs/DTO/ResponseDTO";
import SelerService from "../services/SelerService";
import { createSellerDTO } from "../typs/DTO/createSellerDTO";

export const createSeller = async (req: Request<any, any, createSellerDTO>, res: Response): Promise<void> => {
    try {
        console.log(req.body);
        
        const newSeler: ResponseDTO = await SelerService.create(req.body)
        console.log(newSeler);
        
        res.status(newSeler.status).json(newSeler)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

export const getAllSeller = async (req: Request, res: Response): Promise<void> => {}

export const update = async (req: Request, res: Response): Promise<void> => {}

export const deletss = async (req: Request, res: Response): Promise<void> => {}