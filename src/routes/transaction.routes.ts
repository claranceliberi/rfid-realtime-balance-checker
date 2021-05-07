import {Express} from "express";
import { PrismaClient } from '@prisma/client'
import transactionController from "../controllers/transaction.controller";

class transactionRoutes{
    app : Express
    prisma = new PrismaClient()

    constructor(app:Express) {
        this.app = app
        const transaction = new transactionController(this.prisma.transaction)

        this.app.get('/',transaction.getAll)
        this.app.get('/:id',transaction.getByCard)
        this.app.post('/',transaction.create)
    }
}

export default transactionController