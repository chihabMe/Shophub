import { PrismaClient } from "@prisma/client";
import { inferAsyncReturnType } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions,
) => {
  const prisma = new PrismaClient();
  return {
    prisma,
  };
};
export type Context = inferAsyncReturnType<typeof createContext>;
