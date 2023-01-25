import Fastify from 'fastify'

const app = Fastify()

app.get ( '/', ()=>{
  return 'Hello'
})

app.listen ({
  port: 8080
})