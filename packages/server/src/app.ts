import express from "express";
import config from "./config/default";
import { createContext, router } from "./utils/trpc";
import * as AppRoutes from "./routes";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [config.origin, "http://localhost:3000"],
    credentials: true,
  })
);
const appRoutes = router({
  dog: AppRoutes.dogRouter,
  cat: AppRoutes.catRouter,
});

app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRoutes,
    createContext,
  })
);

app.listen(config.port, () => {
  console.log(`Server listening at port ${config.port}`);
});

export type AppRouter = typeof appRoutes;
