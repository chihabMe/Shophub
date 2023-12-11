import { publicProcedure, router } from "../trpc";
import * as z from "zod";
import { booksRouter } from "./books";
import { Context } from "../context";

export const appRouter = router<Context>({
  books: booksRouter,
});

export type AppRouter = typeof appRouter;
