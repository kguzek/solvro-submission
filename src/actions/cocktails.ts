import { prisma } from "@/lib/db";
import { actionClient } from "@/lib/safeAction";
import {
  cocktailCreateSchema,
  cocktailDeleteSchema,
  cocktailUpdateSchema,
} from "@/lib/schema";

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

export const modifyCocktail = actionClient
  .schema(cocktailUpdateSchema)
  .action(async ({ parsedInput }) => {
    const { id, ...newCocktail } = parsedInput;
    try {
      await prisma.cocktail.update({ where: { id }, data: { ...newCocktail } });
    } catch (ex) {
      console.error(ex);
      return { failure: "Cocktail not found" };
    }
    return { success: "Cocktail updated" };
  });

export const deleteCocktail = actionClient
  .schema(cocktailDeleteSchema)
  .action(async ({ parsedInput }) => {
    try {
      await prisma.cocktail.delete({ where: { id: parsedInput } });
    } catch (ex) {
      console.error(ex);
      return { failure: "Cocktail not found" };
    }
    return { success: "Cocktail deleted" };
  });
