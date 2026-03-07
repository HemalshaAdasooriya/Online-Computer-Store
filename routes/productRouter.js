import express from 'express';
import { createProduct, getAllProducts } from '../controllers/productController.js';

const productRounter = express.Router();

productRounter.get("/",getAllProducts);
productRounter.post("/",createProduct);

export default productRounter