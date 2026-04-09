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
  }),
});

const about = defineCollection({
  loader: glob({
    pattern: "about.md",
    base: "./src/content",
  }),
  schema: z.object({
    bullet1: z.string().optional(),
    bullet2: z.string().optional(),
    bullet3: z.string().optional(),
    bullet4: z.string().optional(),
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
    titulo1: z.string().optional(),
    descripcion1: z.string().optional(),
    titulo2: z.string().optional(),
    descripcion2: z.string().optional(),
    titulo3: z.string().optional(),
    descripcion3: z.string().optional(),
    titulo4: z.string().optional(),
    descripcion4: z.string().optional(),
  }),
});

export const collections = {
  inicio,
  about,
  proyectos,
};