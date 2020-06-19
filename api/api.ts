import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { MenuItem } from "./menu-item.model.ts";

// DB
const menu_items: MenuItem[] = [
  { name: "Spring Roll", price: 5, description: "hot and crunchy", image: ""},
  { name: "Ginger Beef", price: 12, description: "not real chinese food", image: ""},
  { name: "Beef and Brocoli", price: 11, description: "very tasty", image: ""}
];


const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/menu-items", (context) => {
    context.response.body = menu_items;
  });

const app = new Application();

app.use(router.routes());
await app.listen({ port: 8000 });