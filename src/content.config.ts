import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const inicio = defineCollection({
  loader: glob({
    pattern: "inicio.md",
    base: "./src/content",
  }),
  schema: z.object({
    linea1: z.string().optional(),
    linea2: z.string().optional(),
    fondo: z.string().optional(),
    body: z.string().optional(),
  }),
});

const about = defineCollection({
  loader: glob({
    pattern: "about.md",
    base: "./src/content",
  }),
  schema: z.object({
    bullets: z.array(z.string()).optional(),
    texto1: z.string().optional(),
    texto2: z.string().optional(),
  }),
});

const proyectos = defineCollection({
  loader: glob({
    pattern: "proyectos.md",
    base: "./src/content",
  }),
  schema: z.object({
    encabezado: z.string().optional(),
    proyectos_lista: z.array(
      z.object({
        titulo: z.string().optional(),
        descripcion: z.string().optional(),
      }),
    ).optional(),
  }),
});

export const collections = {
  inicio,
  about,
  proyectos,
};