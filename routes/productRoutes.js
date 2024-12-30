import express from "express";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
import { braintreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";
const router  = express.Router()

//routes
router.post('/create-product' , requiredSignIn  , isAdmin , formidable(), createProductController)


router.put('/update-product/:pid' , requiredSignIn  , isAdmin , formidable(), updateProductController)

//get Products

router.get('/get-product' , getProductController);

//single product

router.get('/get-product/:slug' , getSingleProductController);
 
//get photo

router.get('/product-photo/:pid' , productPhotoController);

//delete Product

router.delete('/delete-product/:pid' , deleteProductController);


//filter product
 
router.post('/product-filters' , productFiltersController)

//product count 

router.get('/product-count' , productCountController)

//product per page

router.get('/product-list/:page', productListController)

//seaarch product
router.get('/search/:keyword' , searchProductController);

//similar product

router.get('/related-product/:pid/:cid' , relatedProductController)

//category

router.get('/product-category/:slug', productCategoryController);

//payment route
//token
router.get('/braintree/token' , braintreeTokenController );


//payment
router.post('/braintree/payment' , requiredSignIn , braintreePaymentController);


export  default router