import { getCocktails } from "@/actions/cocktails";
import { Button } from "@/components/ui/button";
import React from "react";

export default async function Home() {
  const cocktails = await getCocktails();
  return (
    <div className="flex flex-col align-items-start">
      <h1 className="text-3xl font-bold">Cocktails</h1>
      <Button>+</Button>
      {cocktails.map((cocktail) => {
        return JSON.stringify(cocktail);
      })}
    </div>
  );
}

