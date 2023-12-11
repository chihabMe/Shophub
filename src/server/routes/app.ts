import { publicProcedure, router } from "../trpc";
import * as z from "zod";

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return "hello world";
  }),
  sayHello: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .query(({ input }) => {
      return "hello " + input.name;
    }),
});

export type AppRouter = typeof appRouter;
