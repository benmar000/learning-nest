import { z } from 'zod';

const configSchema = z.object({
  env: z.enum(['production', 'development']),
  port: z.number(),
});

export type Config = z.infer<typeof configSchema>;

export default configSchema;
