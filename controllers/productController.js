import Product from "../models/Product.js";
import { isAdmin } from "./userController.js";
 


export function createProduct(req,res){
    if(!isAdmin(req)){
    req.status(403).json({
        message : "Forbidden"
    });
    return
}

    const product = new Product(req.body)
    product.save().then(
        ()=>{
            res.json({
                message : "Product created successfully"
            })
        }
    ).catch(
        (error)=>{
            res.status(500).json({
                message : "Error creating product",
                error : error.message
            })
        }
    )   
}

export function getAllProducts(req,res){
    if(isAdmin(req)){
        Product.find()
    }else{
        Product.find({isAvailable : true})
        .then(
            (Products)=>{
                res.json(Products)
            }
        )
        .catch((error) => {
            res.status(500).json({
                message : "Error fetching products",
                error : error.message
            })
        })
    }
}

export function deleteProduct(res,req){
    if(!isAdmin(req)){
        res.status(403).json({
            message : "only admin can delete products"
        });
        return
    }

    const productId = req.body.productId

    Product.deleteone({productId : productId}).then(
        ()=>{
            res.json({
                message : "Product deleted successfully"
            }) 
        }
    )

}