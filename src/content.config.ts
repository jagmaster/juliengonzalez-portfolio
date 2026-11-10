
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    descriptionShort: z.string(),

    cover: z.string(),
    coverAlt: z.string(),

    categories: z.array(z.string()),

    featured: z.boolean().default(false),
    order: z.number().default(0),

    detailCover: z.string(),
    detailCoverAlt: z.string().optional(),

    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().default(""),
        })
      )
      .default([]),
  }),
});

export const collections = {
  projects,
};
