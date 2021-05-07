import {Request, Response} from "express";

class cardController{
     prisma

    constructor(prisma) {
        this.prisma = prisma
    }
    
    async create(req:Request, res:Response){
      try{
        const result = await this.prisma.card.create({data: {...req.body}})
        res.json(result)
      }catch (e){
        res.status(500).json({msg:"error",error:e})
      }
    }

    async getAll(req:Request, res:Response){
        try{
            const result = await this.prisma.card.findMany({include:{transaction:true}})
            res.json(result)
        }catch (e) {
            res.status(500).json({msg:"error",error:e})
        }
    }
}