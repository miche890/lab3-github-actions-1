const request = require('supertest');
const server = require('../index');

afterAll(() => {
  server.close();
});

describe('Pruebas de API', () => {
  it('Debe devolver "API funcionando correctamente"', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('API funcionando correctamente');
  });

  it('La ruta /prueba debe devolver "Prueba exitosa"', async () => {
    const res = await request(server).get('/prueba');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Prueba exitosa');
  });

  it('La API debe devolver un error 404 cuando se hace una petición a una ruta que no existe', async () => {
    const res = await request(server).get('/ruta-que-no-existe');
    expect(res.status).toBe(404);
  });
});
