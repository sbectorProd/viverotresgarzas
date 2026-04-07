import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const inicio = defineCollection({
  loader: glob({
    pattern: "inicio.md",
    base: "./src/content",
  }),
  schema: z.object({
    linea1: z.string(),
    linea2: z.string(),
    video: z.string().optional(),
  }),
});

const about = defineCollection({
  loader: glob({
    pattern: "about.md",
    base: "./src/content",
  }),
  schema: z.object({
    bullet1: z.string(),
    bullet2: z.string(),
    bullet3: z.string(),
    bullet4: z.string(),
  }),
});

export const collections = {
  inicio, about,
};