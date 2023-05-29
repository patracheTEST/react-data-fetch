import { rest } from "msw";

export const handlers = [
    
    rest.get('http://localhost:8888/api/user', (req, res, ctx) => {
        const { id } = req.url.searchParams;
        return res(
            ctx.status(200),
            ctx.json({
                id: id,
                name: 'John Doe'
            })
        );
    }),

  // GET 요청 핸들링 - Path Parameter 사용
    rest.get('http://localhost:8888/api/user/:id', (req, res, ctx) => {
        const { id } = req.params;
        return res(
            ctx.status(200),
            ctx.json({
                id: id,
                name: 'Jane Doe'
            })
        );
    }),

    // POST 요청 핸들링 - Request Body 사용
    rest.post('http://localhost:8888/api/user', (req, res, ctx) => {
        const { name } = req.body;
        return res(
            ctx.status(201),
            ctx.json({
                id: Math.floor(Math.random() * 100),
                name: name
            })
        );
    }),

    // POST 요청 핸들링 - 특정 헤더에 따른 분기
    rest.post('http://localhost:8888/api/user/advanced', (req, res, ctx) => {
        if (req.headers.get('Content-Type') === 'application/json') {
            return res(
                ctx.status(200),
                ctx.json({
                    message: 'JSON payload received'
                })
            );
        } else {
            return res(
                ctx.status(415),
                ctx.json({
                    error: 'Invalid content type. Please send JSON.'
                })
            );
        }
    })
    
]