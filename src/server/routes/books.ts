import { prisma } from "@/src/utils/prisma";
import { publicProcedure, router } from "../trpc";
import * as z from "zod";
import { TRPCError } from "@trpc/server";

export const booksRouter = router({
  getAllBooks: publicProcedure.query(async () => {
    return prisma.book.findMany();
  }),
  addBook: publicProcedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation(async (ctx) => {
      const author = await prisma.author.findFirst();
      if (!author)
        throw new TRPCError({
          message: "no author",
          code: "BAD_REQUEST",
        });
      return prisma.book.create({
        data: {
          title: ctx.input.title,
          description: ctx.input.description,
          authorId: author.id,
        },
      });
    }),
});
