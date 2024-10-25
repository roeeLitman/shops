import { createSellerDTO } from "../typs/DTO/createSellerDTO"
import { createStoreDTO } from "../typs/DTO/createStoreDTO";
import ResponseDTO from "../typs/DTO/ResponseDTO"
import StoreModel from "../typs/models/storeSchema";


class StoreService {

    public static async createStore(storFromReq: createStoreDTO): Promise<ResponseDTO> {
        try {
            //chck if have last then 2 store
            //crete new store 
            const newSeller = await new StoreModel(storFromReq)
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
                err: true,
                status: 400,
                data: err,
            }
        }
    }
}

export default StoreService