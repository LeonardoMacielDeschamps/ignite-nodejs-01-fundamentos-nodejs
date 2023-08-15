import http from 'node:http';

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários');
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuário');
  }

  return response.end('Hello world!');
});

server.listen(3333, () => {
  console.log('Server is running!');
});