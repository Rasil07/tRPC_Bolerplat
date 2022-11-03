import { router, t } from "../utils/trpc";

export const catRouter = router({
  get: t.procedure.query(() => ({ text: "Hello from cat" })),
});
