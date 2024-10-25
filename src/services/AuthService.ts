import { loginDTO } from "../typs/DTO/loginDTO";
import ResponseDTO from "../typs/DTO/ResponseDTO";
import UserModel, { IUser } from "../typs/models/userSchema";
import jwt  from 'jsonwebtoken' 

class SelerService {
  public static async createToken(logiReq: loginDTO): Promise<ResponseDTO> {
    try {
      //found user
      const userFromDB: IUser | null = await UserModel.findOne({name:logiReq.name}, {id:1, name:1, isActiv:1, role:1, password:1 });  
      //check ifc user exisit and if password match
      if ( ! userFromDB || userFromDB.password !== logiReq.password) {
        return {
          err: true,
          status: 400,
          msege: `wornng name or password`,
        };
      }      

      //crete token
      const payload:string = await jwt.sign({id: userFromDB.id, name: userFromDB.name, role: userFromDB.role}, process.env.SecretKey as string , {expiresIn: "10m"})
      // returen mesage with token
      return {
        err: false,
        status: 200,
        data: payload,
      };

    } catch (err) {
      return {
        err: true,
        status: 500,
        data: err,
      };
    }
  }
}

export default SelerService;
