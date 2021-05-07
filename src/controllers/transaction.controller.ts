import {Request, Response} from "express";
import exp from "constants";

class transactionController{
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
            const result = await this.prisma.card.findMany({include:{card:true}})
            res.json(result)
        }catch (e) {
            res.status(500).json({msg:"error",error:e})
        }
    }

    async getByCard(req:Request, res:Response){
        try{
            const result = await this.prisma.card.findMany({where:{card_UUID:req.params.id}, include:{card:true}})
            res.json(result)
        }catch (e) {
            res.status(500).json({msg:"error",error:e})
        }
    }
}

export default transactionController