import { prisma } from "@/src/utils/prisma";
import { publicProcedure, router } from "../trpc";
import * as z from "zod";
import { TRPCError } from "@trpc/server";

export const booksRouter = router({
  getAllBooks: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.book.findMany();
  }),
  addBook: publicProcedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const author = await ctx.prisma.author.findFirst();
      if (!author)
        throw new TRPCError({
          message: "no author",
          code: "BAD_REQUEST",
        });
      return prisma.book.create({
        data: {
          title: input.title,
          description: input.description,
          authorId: author.id,
        },
      });
    }),
});
