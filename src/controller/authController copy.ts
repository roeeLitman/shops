import { Request, Response } from "express";
import ResponseDTO from "../typs/DTO/ResponseDTO";
import AuthService from "../services/AuthService";
import { loginDTO } from "../typs/DTO/loginDTO";

// create token
export const authLogin = async (req: Request<any,any,loginDTO>, res: Response): Promise<void> => {
    try {        
        const pylodeToken: ResponseDTO = await AuthService.createToken(req.body)
        res.status(pylodeToken.status).cookie('token', pylodeToken.data).json(pylodeToken)
        
    } catch (err) {
        console.log(err);
        res.send(500)
    }
}

export const getAllSeller = async (req: Request, res: Response): Promise<void> => {}

export const update = async (req: Request, res: Response): Promise<void> => {}

export const deletss = async (req: Request, res: Response): Promise<void> => {}