import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const about = defineCollection({
  loader: glob({
    pattern: "about.md",
    base: "./src/content",
  }),
  schema: z.object({
    texto1: z.string(),
    texto2: z.string(),
  }),
});

export const collections = {
  about,
};