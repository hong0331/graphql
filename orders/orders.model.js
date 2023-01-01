const orders= [{
    date: '2020-12-23',
    subtotal: 92.5,
    items:[{
        product:{
            id:'redshoe',
            description:'Old Red Shoe',
            price: 46.25
        },
        quantity: 2,
    }],
}];

function getAllOrders(){
    return orders;
}

module.exports={
    getAllOrders,
}
    
