import { Request } from "express";
import ResponseDTO from "../typs/DTO/ResponseDTO";

const createSeller = async (req: Request, res: Response): Promise<void> => {
    try {
        const newSeler: ResponseDTO = async SelerService.create(req.body)
        res.status(newSeler.status).json(newSeler)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

const getAllSeller = async (req: Request, res: Response): Promise<void> => {}

const update = async (req: Request, res: Response): Promise<void> => {}

const deletss = async (req: Request, res: Response): Promise<void> => {}