import { prisma } from "@/src/utils/prisma";
import { publicProcedure, router } from "../trpc";
export const booksRouter = router({
  getAllBooks: publicProcedure.query(async() => {
  }),
});
