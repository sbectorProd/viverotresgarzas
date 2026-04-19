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
    video: z.string().optional(),
    body: z.string().optional(),
  }),
});

const about = defineCollection({
  loader: glob({
    pattern: "about.md",
    base: "./src/content",
  }),
  schema: z.object({
    bullets: z.array(
      z.union([
        z.string(),
        z.object({
          title: z.string().optional(),
          text: z.string().optional(),
          image: z.string().optional(),
        }),
      ]),
    ).optional(),
    texto1: z.string().optional(),
    texto2: z.string().optional(),
  }),
});

const servicios = defineCollection({
  loader: glob({
    pattern: "servicios.md",
    base: "./src/content",
  }),
  schema: z.object({
    encabezado: z.string().optional(),
    servicios_lista: z.array(
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
  servicios,
};