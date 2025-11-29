import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/productsSchema";
import { eq } from "drizzle-orm";
export async function productList(req: Request, res: Response){
    try{
        const products = await db.select().from(productsTable)
        if(products.length <=0) return res.status(404).json({message: "Products not found !"})
        return res.status(200).json(products)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

export async function getProductById(req: Request, res: Response){
    try{
        const product = await db.select().from(productsTable).where(eq(productsTable.id, Number(req.params.id)))
        if(product.length <=0) return res.status(404).json({message: "Product not found !"})
        return res.status(200).json(product)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

export async function createProduct(req: Request, res: Response){
    try{
        const [product] = await db.insert(productsTable).values(req.cleanBody).returning()
        return res.status(201).json(product)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

export async function updateProduct(req: Request, res: Response){
    try{
        const {id} = req.params
        const [product] = await db.update(productsTable).set(req.cleanBody).where(eq(productsTable.id, Number(id))).returning()
        if(!product) return res.status(404).json({message: "Product not found !"})
        return res.status(201).json(product)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

export async function deleteProduct(req: Request, res: Response){
    try{
        const { id } = req.params
        const [product] = await db.delete(productsTable).where(eq(productsTable.id, Number(id))).returning()
        if(!product) return res.status(404).json({message: "Product not found !"})
        return res.status(204).json({message: "Product deleted successful !"})
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}