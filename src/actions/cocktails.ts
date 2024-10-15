import { prisma } from "@/lib/db";
import { actionClient } from "@/lib/safeAction";
import { cocktailCreateSchema } from "@/lib/schema";

export async function getCocktails() {
  const cocktails = await prisma.cocktail.findMany();
  return cocktails;
}

export const createCocktail = actionClient
  .schema(cocktailCreateSchema)
  .action(async ({ parsedInput }) => {
    console.log(parsedInput);
    await prisma.cocktail.create({ data: { ...parsedInput } });
  });

