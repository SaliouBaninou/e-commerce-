import { Router } from "express";
import { createProduct, deleteProduct, getProductById, productList, updateProduct } from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";
import { createProductSchema, updateProductSchema } from "../../db/productsSchema";

const router = Router()

router.post("/", validateData(createProductSchema) ,createProduct)
router.get("/", productList)
router.get("/:id", getProductById)
router.put("/:id", validateData(updateProductSchema) ,updateProduct)
router.delete("/:id", deleteProduct)

export default router