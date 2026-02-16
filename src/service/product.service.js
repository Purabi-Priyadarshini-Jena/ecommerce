const { createProductRepository, getProductByNameRepository, getAllProductsRepository, getProductRepository } = require('../repository/product.repository')

const createProductService = async (product) => {
    const productExist = await getProductByNameRepository(product.name)
    if (productExist) {
        return 'Product already exists'
    }
    const newProduct = await createProductRepository(product)
    return newProduct
}

const getAllProductsService = async () => {
    const products = await getAllProductsRepository()
    return products
}

const getProductService = async (id) => {
    const products = await getProductRepository(id)
    if (!products) {
        return 'Product not found'
    }
    return products
}

module.exports = {
    createProductService,
    getAllProductsService,
    getProductService
}