const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: 'This field is required'
    },
    category: {
        type: String,
    },
    clientCode: {
        type: String
    },
    brand: {
        type: String
    },
    modelNumber: {
        type: String
    },
    dimensions: {
        type: Number
    },
    weight: {   //positive integer
        type: Number
    },
    quantity: {  //positive integer
        type: Number
    },
    description: {  
        type: String
    },
    photos: {  
        type: String
    },
    location: {
        type: String
    },
    listedPrice: {
        type: Number
    },
    sellingPrice: {
        type: Number
    },
    reserve: {
        type: Number
    },
    // sku: {
    //     type: Number  //6 digit auto-generated numerical key, generated in order (000001, 000002)
    // },
    // condition: {
    //     type: String,
    //     required: 'You have to choose condition'
    // },
    // paymentMethod: {
    //     type: String,
    //     required: 'You have to choose payment method'
    // },
    // transactionDetails: {
    //     type: String,
    // //    required: 'This field is required'
    // },
    // amountReceived: {
    //     type: String
    // },
    // status: {
    //     type: String,  
    //     required: 'You have to choose status'
    // },

});

//Custom validation 1


productSchema.path('title').validate((val) => {
    titleRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/   ;
    return titleRegex.test(val);
}, 'Invalid title. Please write alphanumeric string');


// old validation has some errors
// productSchema.path('title').validate((val) => {
//     titleRegex = /(([a-zA-Z0-9]))$/    ; 
//     return titleRegex.test(val);
// }, 'Invalid title. Please write alphanumeric string');

// productSchema.path('clientCode').validate((val) => {
//     clientCodeRegex = /(([a-zA-Z0-9]))$/;
//     return clientCodeRegex.test(val);
// }, 'Invalid client code. Please write alphanumeric string');

// productSchema.path('brand').validate((val) => {
//     brandRegex = /(([a-zA-Z0-9]))$/;
//     return brand.test(val);
// }, 'Invalid brand. Please write alphanumeric string');

// productSchema.path('modelNumber').validate((val) => {
//     modelNumberRegex = /(([a-zA-Z0-9]))$/;
//     return modelNumber.test(val);
// }, 'Invalid model number. Please write alphanumeric string');

// productSchema.path('dimensions').validate((val) => {
//     dimensionsRegex = /(([a-zA-Z0-9]))$/;
//     return dimensions.test(val);
// }, 'Invalid dimensions. Please write alphanumeric string');

// productSchema.path('category').validate((val) => {
//     categoryRegex = /(([a-zA-Z0-9]))$/;
//     return category.test(val);
// }, 'Invalid category. Please write alphanumeric string');

// productSchema.path('description').validate((val) => {
//     descriptionRegex = /(([a-zA-Z0-9]))$/;
//     return description.test(val);
// }, 'Invalid description. Please write alphanumeric string');

// productSchema.path('location').validate((val) => {
//     locationRegex = /(([a-zA-Z0-9]))$/;
//     return location.test(val);
// }, 'Invalid location. Please write alphanumeric string');

// productSchema.path('transactionDetails').validate((val) => {
//     transactionDetailsRegex = /(([a-zA-Z0-9]))$/;
//     return transactionDetails.test(val);
// }, 'Invalid transaction details. Please write alphanumeric string');

// productSchema.path('amountReceived').validate((val) => {
//     amountReceivedRegex = /(([a-zA-Z0-9]))$/;
//     return amountReceived.test(val);
// }, 'Invalid amount received. Please write alphanumeric string');

mongoose.model('products', productSchema);