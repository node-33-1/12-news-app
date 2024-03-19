const request = require('supertest');
const app = require('../app');

let id;

test('GET /users debe traer todos los usuarios', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /users debe crear un usuario', async () => {
    const body = {
        firstName: 'Luis',
        lastName: 'Catalan',
        email: 'luis@gmail.com',
        password: 'luis1234',
        gender: 'MALE',
    }
    const res = await request(app).post('/users').send(body);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe(body.firstName);
    expect(res.body.id).toBeDefined();
});

test('PUT /users/:id debe actualizar un usuario', async () => {
    const body = {
        firstName: 'Luis updated'
    }
    const res = await request(app).put(`/users/${id}`).send(body);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(body.firstName);
});

test('DELETE /users/:id debe eliminar un usuario', async () => {
    const res = await request(app).delete(`/users/${id}`)
    expect(res.status).toBe(204);
})
