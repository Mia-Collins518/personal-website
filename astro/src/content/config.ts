import { defineCollection, z } from 'astro:content';

const log = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date:  z.string(),
    tags:  z.array(z.string()).default([]),
  }),
});

export const collections = { log };