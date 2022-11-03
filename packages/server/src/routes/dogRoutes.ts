import { router, t } from "../utils/trpc";

export const dogRouter = router({
  get: t.procedure.query(() => "Hello from Dog"),
});
