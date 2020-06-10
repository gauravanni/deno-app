import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const products = [
    {
        id: "1",
        title: "abc",
        price: 2000,
    }
]


const router = new Router();

router.get("/api/v1/products", ({ response }) => {
    response.body = products;
})

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
