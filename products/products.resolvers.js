const productsModel= require('./products.model');

module.exports={
    Query:{
        products:()=>{
            return productsModel.getAllProducts();
        },
        productsByPrice:( __ ,args)=>{
            return productsModel.getAllProductsByPrice(args.min, args.max); 
        },
        product: (__, args) =>{
            return productsModel.getProductByID(args.id);
        }
    },
    Mutation:{
        addNewProduct: (__,args) => {
            return productsModel.addNewProduct(args.id, args.description, args.price);
        },
        addNewProductReview: (__, args) => {
            return productsModel.addNewProductReview(args.id, args.rating, args.comment);
        }
        
    }
}; 