import { z } from "zod";

export const ingredientSchema = z.object({
  name: z.string({ required_error: "Nazwa składnika jest wymagana" }),
  description: z.string({ required_error: "Opis składnika jest wymagany" }),
  isAlcoholic: z.boolean({
    required_error: "Zawartość alkoholu składnika jest wymagana",
  }),
  imageUrl: z.string().url(),
});

export const cocktailCreateSchema = z.object({
  name: z.string({ required_error: "Nazwa koktajlu jest wymagana" }),
  category: z.string({ required_error: "Kategoria koktajlu jest wymagana" }),
  recipe: z.string({ required_error: "Instrukcja koktajlu jest wymagana" }),
  ingredients: z.array(
    z.object({
      ingredient: ingredientSchema,
      amount: z.number(),
    }),
    {
      required_error: "Lista składników jest wymagana",
    }
  ),
});

export const cocktailUpdateSchema = z.object({
  id: z.string({ required_error: "Id koktajlu jest wymagane" }),
  name: z.string({ required_error: "Nazwa koktajlu jest wymagana" }),
  category: z.string({ required_error: "Kategoria koktajlu jest wymagana" }),
  recipe: z.string({ required_error: "Instrukcja koktajlu jest wymagana" }),
  ingredients: z.array(
    z.object({
      ingredient: ingredientSchema,
      amount: z.number(),
    }),
    {
      required_error: "Lista składników jest wymagana",
    }
  ),
});

export const cocktailDeleteSchema = z.string({
  required_error: "Id koktajlu jest wymagane",
});
