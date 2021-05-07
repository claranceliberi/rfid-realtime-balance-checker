import {Express} from "express";
import { PrismaClient } from '@prisma/client'
import transactionController from "../controllers/transaction.controller";

class transactionRoutes{
    app : Express
    prisma = new PrismaClient()

    constructor(app) {
        this.app = app
        const transactionController = new transactionController(this.prisma.transaction)

        this.app.get('/',transactionController.getAll)
        this.app.get('/',transactionController.getByCard)
        this.app.post('/',transactionController.create)
    }
}