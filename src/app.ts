import { PrismaClient } from '@prisma/client'
import * as bodyParser from 'body-parser'
import express from 'express'
import cardRoutes from "./routes/card.routes";
import transactionRoutes from "./routes/transaction.routes";

const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.json())

// app.post(`/cards`, async (req, res) => {
//   try{
//     const result = await prisma.card.create({data: {...req.body}})
//     res.json(result)
//   }catch (e){
//     res.status(500).json({msg:"error",error:e})
//   }
// })
//
// app.get(`/cards`, async (req, res) => {
//   try{
//     const result = await prisma.card.findMany({where:{}})
//     res.json(result)
//   }catch (e) {
//     res.status(500).json({msg:"error",error:e})
//   }
// })
//
// app.get(`/cards/getTransactionsByUUID/:id`, async (req, res) => {
//   console.log(req.params)
//   try{
//     const result = await prisma.transaction.findMany({include: {card: true}})
//     res.json(result)
//   }catch (e) {
//     res.status(500).json({msg:"error",error:e})
//   }
// })
//
// app.post(`/transactions`, async (req, res) => {
//   try{
//     const result = await prisma.transaction.create({data: {...req.body}})
//     res.json(result)
//   }catch (e){
//     res.status(500).json({msg:"error",error:e})
//   }
// })
//
// app.get(`/transactions`, async (req, res) => {
//   try{
//     const result = await prisma.transaction.findMany()
//     res.json(result)
//   }catch (e) {
//     res.status(500).json({msg:"error",error:e})
//   }
// })


// app.post(`/transaction`, async (req, res) => {
//   const { title, content, authorEmail } = req.body
//   const result = await prisma.transaction.create({
//     data: {
//       title,
//       content,
//       published: false,
//       author: { connect: { email: authorEmail } },
//     },
//   })
//   res.json(result)
// })
//
// app.put('/publish/:id', async (req, res) => {
//   const { id } = req.params
//   const post = await prisma.post.update({
//     where: { id: Number(id) },
//     data: { published: true },
//   })
//   res.json(post)
// })
//
// app.delete(`/post/:id`, async (req, res) => {
//   const { id } = req.params
//   const post = await prisma.post.delete({
//     where: {
//       id: Number(id),
//     },
//   })
//   res.json(post)
// })
//
// app.get(`/post/:id`, async (req, res) => {
//   const { id } = req.params
//   const post = await prisma.post.findUnique({
//     where: {
//       id: Number(id),
//     },
//   })
//   res.json(post)
// })
//
// app.get('/feed', async (req, res) => {
//   const posts = await prisma.post.findMany({
//     where: { published: true },
//     include: { author: true },
//   })
//   res.json(posts)
// })
//
// app.get('/filterPosts', async (req, res) => {
//   const { searchString }: { searchString?: string } = req.query
//   const draftPosts = await prisma.post.findMany({
//     where: {
//       OR: [
//         {
//           title: {
//             contains: searchString,
//           },
//         },
//         {
//           content: {
//             contains: searchString,
//           },
//         },
//       ],
//     },
//   })
//   res.json(draftPosts)
// })

const server = app.listen(5000, () =>
  console.log(
    '🚀 Server ready at: http://localhost:5000\n⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api',
  ),
)
