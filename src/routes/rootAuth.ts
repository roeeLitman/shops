import {Response, Router, Request} from "express";
import { createSeller } from "../controller/clientController";
import { authLogin } from "../controller/authController copy";

const routAuth:Router = Router()

// login
routAuth.post('/login', authLogin)

//get all order
routAuth.get('/', () => {} )


export default routAuth