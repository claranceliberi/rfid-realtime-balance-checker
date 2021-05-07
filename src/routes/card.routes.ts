
import {Express} from "express";
import { PrismaClient } from '@prisma/client'
import cardController from "../controllers/card.controller";

class cardRoutes{
    app : Express
    prisma = new PrismaClient()

    constructor(app) {
        this.app = app
        const card = new cardController(this.prisma.transaction)

        this.app.get('/',card.getAll)
        this.app.post('/',card.create)
    }
}

export default cardRoutes