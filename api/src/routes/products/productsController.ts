import { Request, Response } from "express";
export function productList(req: Request, res: Response){
    return res.send("List of products")
}

export function getProductById(req: Request, res: Response){
    console.log(req.params)
    return res.send("Product id")
}

export function createProduct(req: Request, res: Response){
    console.log(req.body)
    return res.send("Create product")
}

export function updateProduct(req: Request, res: Response){
    return res.send("Update product")
}

export function deleteProduct(req: Request, res: Response){
    return res.send("Delete product")
}