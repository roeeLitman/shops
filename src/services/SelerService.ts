import { createSellerDTO } from "../typs/DTO/createSellerDTO"
import ResponseDTO from "../typs/DTO/ResponseDTO"
import UserModel, { IUser } from "../typs/models/userSchema"

class SelerService {

    public static async create(sellerFromReq: createSellerDTO): Promise<ResponseDTO> {
        try {
            // to hnhsh password
            //add seler from db
            const newSeller = await new UserModel(sellerFromReq)
            await newSeller.save()

            console.log(newSeller);
            
            return {
                err: false,
                status: 200,
                data: newSeller,
                msege: `user: ${newSeller.name} is created`
            }
        } catch (err) {
            return {
                err: false,
                status: 400,
                data: err,
            }
        }
    }
}

export default SelerService