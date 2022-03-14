export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      version: '1.0.0'
    },
    server: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./router/posts.ts']
};
