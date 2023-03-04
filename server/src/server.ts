import Fastify from "fastify";

const app = Fastify();

/**
 * Métodos HTTP
 *  Get: obtém um registro
 *  Post: cria um registro
 *  Put: atualiza um registro completo
 *  Patch: atualiza parte de um registro
 *  Delete: deleta um registro
 *  */ 
app.get('/', () => {
  return 'Hello world'
})

app.listen({
  port: 3333
})