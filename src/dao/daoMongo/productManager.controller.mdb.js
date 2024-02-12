import productModel from '../models/product.model.js'

class ProductManager{
    constructor(){}

    async addProduct(product) {
        try{
            productModel.create(product)
            return 'Product agregado'
        }catch(err){
            return err.message
        }
    }

    getProducts = async (filter, limit, page, sort = 'asc') => {
        try {
            const sortOrder = sort === 'asc' ? 1 : sort === 'desc' ? -1 : undefined;

            let query = {};
            if (filter) {
                query.category = filter;
            }
    
            const process = await productModel.paginate(
                query,
                {
                    limit: limit,
                    page: page,
                    sort: sortOrder ? { price: sortOrder } : undefined,
                    lean: true,
                }
            );
            return process;
        } catch (err) {
            return err.message;
        }
    };
    
    

    getProductById = async (id) => {
        try{
            const product = productModel.findById(id)
            return product
        }catch(err){
            return err.message
        }
    }
    
    async updateProduct(id, newData) {
        try{
            const product = productModel.findByIdAndUpdate(id, newData)
            return product
        }catch(err){
            return err.message
        }
    }

    deleteProduct = async (id) => {
        try{
            const product = productModel.findByIdAndDelete(id)
            return product
        }catch(err){
            err.message
        }
    }
}

export {ProductManager}