import Fastify from "fastify";
import cors from "@fastify/cors"
import { PrismaClient } from "@prisma/client"

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors)

/**
 * Métodos HTTP
 *  Get: obtém um registro
 *  Post: cria um registro
 *  Put: atualiza um registro completo
 *  Patch: atualiza parte de um registro
 *  Delete: deleta um registro
 *  */ 
app.get('/hello', async () => {

  const habits = await prisma.habit.findMany({
    // where: {
    //   title: {
    //     startsWith: "Beber"
    //   }
    // }
  })

  return habits
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP server running')
})