import mongoos from 'mongoose'

const connectDB = async () => {
    try {        
        const conction = await mongoos.connect(process.env.URL_MONGOOSE as string)
        console.log('mongo is connect');
    } catch (err) {
        console.log(err);
    }
}

export default connectDB