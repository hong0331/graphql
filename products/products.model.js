const products = [
    {
        id: 'redshoe',
        description:'Red Shoe',
        price: 43.12,
        reviews: [],
    },
    {
        id: 'blueJean',
        description:'Blue Jeans',
        price: 55.23,
        reviews: [],
    },
];


function getAllProducts(){
    return products;
}

function getProductByPrice(min,max){
    products.filter((product) => {
        return product.price >= min && product.price <= max;
    });
}

function getProductByID(id){
    return products.find((product) => {
        return product.id === id;
    });
}

function addNewProduct(id, description, price){
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    }

    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment){
    const matchedProduct= getProductByID(id);
    if (matchedProduct){
        const newProductReview={
            rating,
            comment,
        };
        
        matchedProduct.reviews.push(newProductReview);

        return newProductReview;
    }
}

module.exports={
    getAllProducts,
    getProductByPrice,
    getProductByID,
    addNewProduct,
    addNewProductReview,
}