import express from 'express';


const app = express();

app.get("/test", (request, response) => {
  return response.send('Olar mundo')
})

app.post("/test-post", (request, response) => {
  return response.send('Olar mundo POST')
})

app.listen(3000, () => console.log("server os running"));