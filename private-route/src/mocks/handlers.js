import { rest } from "msw";

const user = {
    username: "banx",
    fullname: "Ba Nguyễn",
    password: "123465",
    email: "ba@techmaster.vn",
};

const SIGNED_TOKEN = "SECRET";

export const handlers = [
    rest.post("/api/login", async (req, res, ctx) => {
        const { username, password } = await req.json();

        if (username === user.username && password === user.password) {
            return res(
                ctx.delay(2000),
                ctx.status(200),
                ctx.set({
                    Authorization: "Bearer " + SIGNED_TOKEN,
                }),
                ctx.json(user)
            );
        }
    }),

    rest.get("/api/user", async (req, res, ctx) => {
        const bearer = req.headers.get("Authorization");

        console.log(bearer);

        if (!bearer)
            return res(
                ctx.delay(1000),
                ctx.status(404),
                ctx.json({ error: "Invalid token" })
            );

        const token = bearer.split(" ")[1];

        if (token !== SIGNED_TOKEN)
            return res(
                ctx.delay(1000),
                ctx.status(404),
                ctx.json({ error: "Invalid token" })
            );

        return res(ctx.delay(2000), ctx.status(200), ctx.json(user));
    }),
];
