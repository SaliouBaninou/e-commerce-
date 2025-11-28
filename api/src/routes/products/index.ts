import { Router } from "express";
import { createProduct, deleteProduct, getProductById, productList, updateProduct } from "./productsController";

const router = Router()

router.post("/", createProduct)
router.get("/", productList)
router.get("/:id", getProductById)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router