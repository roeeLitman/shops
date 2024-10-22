import { Request, Response } from "express";
import ResponseDTO from "../typs/DTO/ResponseDTO";

export const createStore = async (req: Request, res: Response): Promise<void> => {
    const newStore: ResponseDTO = await StoreService.createStore()
}

export const getAllSeller = async (req: Request, res: Response): Promise<void> => {}

export const update = async (req: Request, res: Response): Promise<void> => {}

export const deletss = async (req: Request, res: Response): Promise<void> => {}